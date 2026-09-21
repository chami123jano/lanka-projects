(() => {
  const storageKey = 'lanka-expenses-state-v1';
  const expenseCategories = ['Food & groceries', 'Housing', 'Transport', 'Utilities', 'Health', 'Education', 'Family', 'Farming', 'Savings', 'Leisure', 'Other'];
  const incomeCategories = ['Salary', 'Business', 'Farming income', 'Freelance', 'Pension', 'Gift', 'Other income'];
  const allCategories = [...expenseCategories, ...incomeCategories];
  const categoryIcons = {
    'Food & groceries':'shopping-bag', Housing:'house', Transport:'bus-front', Utilities:'lightbulb', Health:'heart-pulse', Education:'graduation-cap', Family:'users', Farming:'sprout', Savings:'piggy-bank', Leisure:'ticket', Salary:'briefcase-business', Business:'store', 'Farming income':'wheat', Freelance:'laptop', Pension:'landmark', Gift:'gift'
  };
  const $ = selector => document.querySelector(selector);
  const escapeHtml = value => String(value ?? '').replace(/[&<>"']/g, character => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[character]));
  const money = value => 'LKR ' + new Intl.NumberFormat('en-LK', { maximumFractionDigits:2 }).format(Number(value) || 0);
  const validMonth = value => /^\d{4}-(0[1-9]|1[0-2])$/.test(value);
  const validDate = value => /^\d{4}-\d{2}-\d{2}$/.test(value) && Number.isFinite(Date.parse(value));
  const localDate = date => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };
  const today = localDate(new Date());
  const currentMonth = today.slice(0, 7);

  function readState() {
    try {
      const saved = JSON.parse(localStorage.getItem(storageKey));
      return {
        selectedMonth: validMonth(saved?.selectedMonth) ? saved.selectedMonth : currentMonth,
        monthlyBudgets: saved?.monthlyBudgets && typeof saved.monthlyBudgets === 'object' && !Array.isArray(saved.monthlyBudgets) ? saved.monthlyBudgets : {},
        transactions: Array.isArray(saved?.transactions) ? saved.transactions.filter(transaction => transaction && typeof transaction === 'object') : [],
      };
    } catch {
      return { selectedMonth:currentMonth, monthlyBudgets:{}, transactions:[] };
    }
  }

  let state = readState();
  let pendingDeleteId = null;

  function persist(next, message) {
    try {
      localStorage.setItem(storageKey, JSON.stringify(next));
      state = next;
      if (message) window.lankaToast?.(message);
      return true;
    } catch {
      window.lankaToast?.('Could not save. Browser storage may be full.');
      return false;
    }
  }

  function monthName(month = state.selectedMonth) {
    const [year, number] = month.split('-').map(Number);
    return new Intl.DateTimeFormat('en-LK', { month:'long', year:'numeric' }).format(new Date(year, number - 1, 1));
  }

  function formatDate(value) {
    const [year, month, day] = value.split('-').map(Number);
    return new Intl.DateTimeFormat('en-LK', { day:'numeric', month:'short' }).format(new Date(year, month - 1, day));
  }

  function monthTransactions() {
    return state.transactions.filter(transaction => transaction.date?.startsWith(state.selectedMonth));
  }

  function updateCategoryOptions(preferred) {
    const categories = $('#transactionType').value === 'income' ? incomeCategories : expenseCategories;
    $('#transactionCategory').innerHTML = categories.map(category => `<option>${escapeHtml(category)}</option>`).join('');
    if (preferred && categories.includes(preferred)) $('#transactionCategory').value = preferred;
  }

  function updateCategoryFilter() {
    const previous = $('#transactionCategoryFilter').value;
    const categories = [...new Set(monthTransactions().map(transaction => transaction.category).filter(Boolean))].sort();
    $('#transactionCategoryFilter').innerHTML = '<option value="all">All categories</option>' + categories.map(category => `<option>${escapeHtml(category)}</option>`).join('');
    if (categories.includes(previous)) $('#transactionCategoryFilter').value = previous;
  }

  function renderTransactions() {
    const query = $('#transactionSearch').value.trim().toLowerCase();
    const type = $('#transactionTypeFilter').value;
    const category = $('#transactionCategoryFilter').value;
    const transactions = monthTransactions()
      .filter(transaction => type === 'all' || transaction.type === type)
      .filter(transaction => category === 'all' || transaction.category === category)
      .filter(transaction => !query || `${transaction.description} ${transaction.category} ${transaction.payment}`.toLowerCase().includes(query))
      .sort((a, b) => b.date.localeCompare(a.date) || b.id.localeCompare(a.id));

    if (!transactions.length) {
      const hasEntries = monthTransactions().length > 0;
      $('#transactionList').innerHTML = `<div class="transaction-empty"><i data-lucide="${hasEntries ? 'search-x' : 'receipt-text'}"></i><div><strong>${hasEntries ? 'No matching transactions' : `Nothing recorded for ${escapeHtml(monthName())}`}</strong><p>${hasEntries ? 'Try a different search or filter.' : 'Add an expense or income entry to begin.'}</p></div></div>`;
      window.lucide?.createIcons();
      return;
    }

    $('#transactionList').innerHTML = transactions.map(transaction => {
      const expense = transaction.type === 'expense';
      const icon = categoryIcons[transaction.category] || (expense ? 'receipt' : 'circle-dollar-sign');
      return `<article class="transaction-row">
        <span class="transaction-icon ${expense ? 'expense' : 'income'}"><i data-lucide="${icon}"></i></span>
        <div class="transaction-main"><h3>${escapeHtml(transaction.description)}</h3><p>${escapeHtml(transaction.category)}<span>/</span>${escapeHtml(transaction.payment)}${transaction.recurring ? '<span>/</span><i data-lucide="refresh-cw"></i> Recurring' : ''}</p></div>
        <time datetime="${escapeHtml(transaction.date)}">${escapeHtml(formatDate(transaction.date))}</time>
        <strong class="transaction-amount ${expense ? 'expense' : 'income'}">${expense ? '-' : '+'}${escapeHtml(money(transaction.amount))}</strong>
        <div class="row-actions"><button class="mini-button" data-edit-transaction="${escapeHtml(transaction.id)}" aria-label="Edit ${escapeHtml(transaction.description)}"><i data-lucide="pencil"></i></button><button class="mini-button danger-button" data-delete-transaction="${escapeHtml(transaction.id)}" aria-label="Delete ${escapeHtml(transaction.description)}"><i data-lucide="trash-2"></i></button></div>
      </article>`;
    }).join('');
    window.lucide?.createIcons();
  }

  function renderInsights(expenses) {
    const totals = expenses.reduce((result, transaction) => {
      result[transaction.category] = (result[transaction.category] || 0) + Number(transaction.amount);
      return result;
    }, {});
    const categories = Object.entries(totals).sort((a, b) => b[1] - a[1]);
    const top = categories[0]?.[1] || 0;
    $('#categoryBreakdown').innerHTML = categories.length ? categories.map(([category, total]) => `<div class="category-row"><div><span><i data-lucide="${categoryIcons[category] || 'receipt'}"></i>${escapeHtml(category)}</span><strong>${escapeHtml(money(total))}</strong></div><div class="category-track"><span style="width:${Math.max(4, total / top * 100)}%"></span></div></div>`).join('') : '<div class="insight-empty"><i data-lucide="chart-no-axes-column-increasing"></i><p>Spending categories will appear here.</p></div>';

    const recurring = monthTransactions().filter(transaction => transaction.recurring).sort((a, b) => a.date.localeCompare(b.date));
    $('#recurringList').innerHTML = recurring.length ? recurring.map(transaction => `<button class="recurring-row" data-edit-transaction="${escapeHtml(transaction.id)}"><span><strong>${escapeHtml(transaction.description)}</strong><small>${escapeHtml(transaction.category)}</small></span><b class="${transaction.type}">${transaction.type === 'expense' ? '-' : '+'}${escapeHtml(money(transaction.amount))}</b></button>`).join('') : '<div class="insight-empty compact"><i data-lucide="refresh-cw"></i><p>No recurring entries this month.</p></div>';
  }

  function render() {
    const transactions = monthTransactions();
    const expenses = transactions.filter(transaction => transaction.type === 'expense');
    const incomes = transactions.filter(transaction => transaction.type === 'income');
    const spent = expenses.reduce((sum, transaction) => sum + Number(transaction.amount || 0), 0);
    const income = incomes.reduce((sum, transaction) => sum + Number(transaction.amount || 0), 0);
    const budget = Number(state.monthlyBudgets[state.selectedMonth]) || 0;
    const remaining = budget - spent;
    const percentage = budget ? spent / budget * 100 : 0;

    $('#expenseMonth').value = state.selectedMonth;
    $('#monthlyBudget').value = budget || '';
    $('#transactionMonthLabel').textContent = `Activity for ${monthName()}`;
    $('#spentMetric').textContent = money(spent);
    $('#spentCount').textContent = expenses.length ? `${expenses.length} expense${expenses.length === 1 ? '' : 's'} recorded` : 'No expenses';
    $('#incomeMetric').textContent = money(income);
    $('#incomeCount').textContent = incomes.length ? `${incomes.length} income entr${incomes.length === 1 ? 'y' : 'ies'}` : 'No income recorded';
    $('#balanceMetric').textContent = money(income - spent);
    $('#balanceMetric').classList.toggle('negative', income - spent < 0);
    $('#remainingMetric').textContent = budget ? money(remaining) : 'Not set';
    $('#remainingMetric').classList.toggle('negative', budget > 0 && remaining < 0);
    $('#budgetStatus').textContent = budget ? (remaining >= 0 ? 'Available in this budget' : 'Over monthly budget') : 'Set a monthly budget';
    $('#budgetHeading').textContent = budget ? `${money(spent)} of ${money(budget)}` : 'No budget set';
    $('#budgetDetail').textContent = budget ? (remaining >= 0 ? `${money(remaining)} is still available.` : `${money(Math.abs(remaining))} over budget.`) : 'Add a monthly budget to monitor your pace.';
    $('#budgetProgress').style.width = `${Math.min(100, percentage)}%`;
    $('#budgetProgress').classList.toggle('over', percentage > 100);
    $('#budgetPercent').textContent = budget ? `${Math.round(percentage)}% used` : '0% used';
    updateCategoryFilter();
    renderTransactions();
    renderInsights(expenses);
    window.lucide?.createIcons();
  }

  function defaultDate() {
    if (state.selectedMonth === currentMonth) return today;
    return `${state.selectedMonth}-01`;
  }

  function openForm(transaction = null) {
    $('#transactionForm').hidden = false;
    $('#transactionId').value = transaction?.id || '';
    $('#transactionType').value = transaction?.type || 'expense';
    updateCategoryOptions(transaction?.category);
    $('#transactionDate').value = transaction?.date || defaultDate();
    $('#transactionDescription').value = transaction?.description || '';
    $('#transactionAmount').value = transaction?.amount || '';
    $('#transactionPayment').value = transaction?.payment || 'Cash';
    $('#transactionRecurring').checked = Boolean(transaction?.recurring);
    $('#transactionFormTitle').textContent = transaction ? 'Edit transaction' : 'Add transaction';
    $('#transactionSubmitLabel').textContent = transaction ? 'Save changes' : 'Add transaction';
    $('#transactionForm').scrollIntoView({ behavior:'smooth', block:'nearest' });
    $('#transactionDescription').focus({ preventScroll:true });
  }

  function closeForm() {
    $('#transactionForm').hidden = true;
    $('#transactionForm').reset();
    $('#transactionId').value = '';
    updateCategoryOptions();
  }

  function changeMonth(offset) {
    const [year, month] = state.selectedMonth.split('-').map(Number);
    const target = new Date(year, month - 1 + offset, 1);
    const nextMonth = `${target.getFullYear()}-${String(target.getMonth() + 1).padStart(2, '0')}`;
    if (persist({ ...state, selectedMonth:nextMonth })) {
      closeForm();
      render();
    }
  }

  $('#previousMonth').addEventListener('click', () => changeMonth(-1));
  $('#nextMonth').addEventListener('click', () => changeMonth(1));
  $('#expenseMonth').addEventListener('change', event => {
    if (!validMonth(event.target.value)) return;
    if (persist({ ...state, selectedMonth:event.target.value })) {
      closeForm();
      render();
    }
  });
  $('#monthlyBudget').addEventListener('change', event => {
    const value = Number(event.target.value);
    if (!Number.isFinite(value) || value < 0 || value > 1e9) {
      window.lankaToast?.('Enter a budget between 0 and 1 billion LKR.');
      event.target.value = state.monthlyBudgets[state.selectedMonth] || '';
      return;
    }
    const monthlyBudgets = { ...state.monthlyBudgets };
    if (value) monthlyBudgets[state.selectedMonth] = value;
    else delete monthlyBudgets[state.selectedMonth];
    if (persist({ ...state, monthlyBudgets }, value ? 'Monthly budget saved.' : 'Monthly budget cleared.')) render();
  });
  $('#newTransaction').addEventListener('click', () => openForm());
  $('#closeTransactionForm').addEventListener('click', closeForm);
  $('#cancelTransaction').addEventListener('click', closeForm);
  $('#transactionType').addEventListener('change', () => updateCategoryOptions());
  $('#transactionSearch').addEventListener('input', renderTransactions);
  $('#transactionTypeFilter').addEventListener('change', renderTransactions);
  $('#transactionCategoryFilter').addEventListener('change', renderTransactions);

  $('#transactionForm').addEventListener('submit', event => {
    event.preventDefault();
    const id = $('#transactionId').value;
    const amount = Number($('#transactionAmount').value);
    const date = $('#transactionDate').value;
    const description = $('#transactionDescription').value.trim();
    const type = $('#transactionType').value;
    const category = $('#transactionCategory').value;
    const payment = $('#transactionPayment').value;
    if (!description || description.length > 100 || !validDate(date) || !Number.isFinite(amount) || amount <= 0 || amount > 1e9 || !['expense','income'].includes(type) || !allCategories.includes(category) || !['Cash','Bank account','Card','Mobile wallet','Other'].includes(payment)) {
      window.lankaToast?.('Check the transaction details and try again.');
      return;
    }
    const transaction = { id:id || (crypto.randomUUID?.() || `transaction-${Date.now()}`), type, date, description, amount, category, payment, recurring:$('#transactionRecurring').checked };
    const transactions = id ? state.transactions.map(item => item.id === id ? transaction : item) : [...state.transactions, transaction];
    const selectedMonth = date.slice(0, 7);
    if (persist({ ...state, selectedMonth, transactions }, id ? 'Transaction updated.' : 'Transaction added.')) {
      closeForm();
      render();
    }
  });

  document.addEventListener('click', event => {
    const editButton = event.target.closest('[data-edit-transaction]');
    if (editButton) {
      const transaction = state.transactions.find(item => item.id === editButton.dataset.editTransaction);
      if (transaction) openForm(transaction);
      return;
    }
    const deleteButton = event.target.closest('[data-delete-transaction]');
    if (!deleteButton) return;
    const transaction = state.transactions.find(item => item.id === deleteButton.dataset.deleteTransaction);
    if (!transaction) return;
    pendingDeleteId = transaction.id;
    $('#deleteTransactionSummary').textContent = `${transaction.description} (${money(transaction.amount)}) will be removed.`;
    $('#deleteTransactionDialog').showModal();
  });

  $('#confirmDeleteTransaction').addEventListener('click', () => {
    if (!pendingDeleteId) return;
    const transactions = state.transactions.filter(transaction => transaction.id !== pendingDeleteId);
    if (persist({ ...state, transactions }, 'Transaction deleted.')) render();
    pendingDeleteId = null;
    $('#deleteTransactionDialog').close();
  });

  function csvCell(value) {
    let text = String(value ?? '');
    if (/^[=+\-@]/.test(text)) text = `'${text}`;
    return `"${text.replace(/"/g, '""')}"`;
  }

  $('#exportExpenses').addEventListener('click', () => {
    const rows = [['Date','Type','Description','Category','Payment method','Recurring','Amount (LKR)']];
    monthTransactions().sort((a, b) => a.date.localeCompare(b.date)).forEach(transaction => rows.push([transaction.date, transaction.type, transaction.description, transaction.category, transaction.payment, transaction.recurring ? 'Yes' : 'No', transaction.amount]));
    const csv = rows.map(row => row.map(csvCell).join(',')).join('\r\n');
    const url = URL.createObjectURL(new Blob(['\ufeff' + csv], { type:'text/csv;charset=utf-8' }));
    const link = document.createElement('a');
    link.href = url;
    link.download = `lanka-one-expenses-${state.selectedMonth}.csv`;
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    window.lankaToast?.(`Exported ${monthTransactions().length} transactions.`);
  });

  updateCategoryOptions();
  render();
  if (location.hash === '#add-transaction') openForm();
})();
