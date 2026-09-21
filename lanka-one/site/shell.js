(() => {
  const keys = { ready: 'lanka-ready-state-v1', basket: 'lanka-basket-state-v1', expenses:'lanka-expenses-state-v1', grow: 'lanka-grow-state-v1', clarity: 'clarity-lens-state-v1' };
  const names = { ready:'Lanka Ready', basket:'Lanka Basket', expenses:'Monthly expenses', grow:'Lanka Grow', clarity:'Clarity Lens' };
  const preferenceKey = 'lanka-one-preferences-v1';
  const $ = selector => document.querySelector(selector);
  const escape = value => String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const read = key => { try { return JSON.parse(localStorage.getItem(key)) || {}; } catch { return {}; } };
  const list = value => Array.isArray(value) ? value : [];
  const number = value => Number.isFinite(Number(value)) ? Number(value) : 0;
  const money = value => 'LKR ' + new Intl.NumberFormat('en-LK', { maximumFractionDigits:2 }).format(value);
  let toastTimer;
  function toast(message) {
    $('#siteToast').textContent = message;
    $('#siteToast').hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { $('#siteToast').hidden = true; }, 4000);
  }
  window.lankaToast = toast;
  const icons = () => window.lucide?.createIcons();
  const prefs = read(preferenceKey);
  if (prefs.name) document.querySelectorAll('.user-avatar').forEach(el => { el.textContent = prefs.name.trim().slice(0,2).toUpperCase(); });
  $('#footerDate').textContent = new Intl.DateTimeFormat('en-LK', { dateStyle:'medium' }).format(new Date());
  $('#pageKicker').textContent = document.body.dataset.page === 'index' ? 'A GOOD DAY STARTS HERE' : 'LANKA ONE / ' + (document.body.dataset.page === 'data' ? 'SETTINGS' : 'YOUR TOOLS');
  if (document.body.dataset.page === 'index') {
    if (prefs.name) $('#pageTitle').textContent = `Good to see you, ${prefs.name}.`;
    $('#breadcrumb').textContent = 'Overview';
    $('#pageActions').innerHTML = '<a class="ghost-button" href="./data.html"><i data-lucide="sliders-horizontal"></i>My workspace</a>';
    dashboard();
    window.addEventListener('storage', dashboard);
  }
  function dashboard() {
    const ready = read(keys.ready), basket = read(keys.basket), expenseState = read(keys.expenses), grow = read(keys.grow), clarity = read(keys.clarity);
    const items = list(basket.basket), crops = list(grow.crops), checks = list(clarity.history);
    const total = items.reduce((sum,item) => sum + number(item.qty) * number(item.price), 0);
    const missing = items.filter(item => number(item.price) <= 0).length;
    const done = Object.values(ready.tasks || {}).filter(value => value === true).length;
    $('#readyMetric').textContent = done;
    $('#readyNote').textContent = `${list(ready.contacts).length} local contacts saved`;
    $('#basketMetric').textContent = money(total);
    $('#basketNote').textContent = missing ? `${missing} items still need a price` : items.length ? `${items.length} items in your basket` : 'Start your shopping list';
    $('#growMetric').innerHTML = `${crops.length} <small>${crops.length === 1 ? 'crop' : 'crops'}</small>`;
    $('#growNote').textContent = list(grow.log).length ? `${grow.log.length} field observations recorded` : 'Your next harvest starts here';
    $('#clarityMetric').textContent = checks.length;
    $('#clarityNote').textContent = checks[0] ? `Last contrast: ${checks[0].ratio}` : 'Saved accessibility checks';
    const today = new Date();
    const month = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2,'0')}`;
    const monthlyExpenses = list(expenseState.transactions).filter(item => item.type === 'expense' && item.date?.startsWith(month));
    const spent = monthlyExpenses.reduce((sum,item) => sum + number(item.amount),0);
    const budget = number(expenseState.monthlyBudgets?.[month]);
    const remaining = budget - spent;
    const percentage = budget ? spent / budget * 100 : 0;
    $('#expenseSpent').textContent = money(spent);
    $('#expenseRemaining').textContent = budget ? money(remaining) : 'Not set';
    $('#expenseRemaining').classList.toggle('negative', budget > 0 && remaining < 0);
    $('#expenseSnapshotNote').textContent = monthlyExpenses.length ? `${monthlyExpenses.length} expense${monthlyExpenses.length === 1 ? '' : 's'} recorded this month.` : 'Set a budget and start tracking expenses.';
    $('#expenseProgress').style.width = `${Math.min(100, percentage)}%`;
    $('#expenseProgress').classList.toggle('over', percentage > 100);
    $('#expenseProgressLabel').textContent = budget ? `${Math.round(percentage)}% of ${money(budget)} used` : 'No monthly budget yet';
    const attention = [
      {icon:'shield-check',title:list(ready.contacts).length ? 'Keep your family plan up to date' : 'Who can your family call?',text:list(ready.contacts).length ? `${list(ready.contacts).length} contacts in your readiness plan` : 'Add your first trusted local contact',href:'ready.html#contacts',color:''},
      {icon:'shopping-basket',title:missing ? `${missing} basket items need a price` : 'Plan your next grocery trip',text:missing ? 'Complete your estimate before you shop' : `${items.length} items in your current basket`,href:'basket.html',color:'blue'},
      {icon:'scan-eye',title:checks.length ? 'Revisit your latest design check' : 'Make your next design more readable',text:checks.length ? `${checks[0].ratio} contrast in your last saved check` : 'Start with a text and background color',href:'clarity.html',color:'rose'},
    ];
    $('#attentionList').innerHTML = attention.map(item => `<a class="attention-row" href="./${item.href}"><span class="attention-icon ${item.color}"><i data-lucide="${item.icon}"></i></span><div><h3>${escape(item.title)}</h3><p>${escape(item.text)}</p></div><i data-lucide="chevron-right"></i></a>`).join('');
    const upcoming = crops.filter(crop => /^\d{4}-\d{2}-\d{2}$/.test(crop.harvest)).sort((a,b) => a.harvest.localeCompare(b.harvest)).slice(0,3);
    $('#harvestList').innerHTML = upcoming.length ? upcoming.map(crop => `<a class="harvest-row" href="./grow.html"><strong>${escape(crop.name)}</strong><span>${escape(crop.harvest)}</span></a>`).join('') : '<div class="harvest-empty"><i data-lucide="sprout"></i><div><strong>A fresh start for your garden.</strong><p>Add a crop to see your next harvest here.</p></div></div>';
    icons();
  }
  function setMenu(open) {
    document.body.classList.toggle('nav-open',open);
    $('#menuButton').setAttribute('aria-expanded',String(open));
    $('#navScrim').hidden = !open;
    if (open) $('#siteSidebar a').focus();
    else $('#menuButton').focus();
  }
  $('#menuButton').addEventListener('click', () => setMenu(!document.body.classList.contains('nav-open')));
  $('#navScrim').addEventListener('click', () => setMenu(false));
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && document.body.classList.contains('nav-open')) setMenu(false); });
  document.querySelectorAll('[data-close-dialog]').forEach(button => button.addEventListener('click', () => document.getElementById(button.dataset.closeDialog).close()));
  const searchEntries = [
    ['shield-check','Readiness plan','Household tasks, supplies and local risks','ready.html'],
    ['phone','Local contacts','Family contacts, meeting points and safe routes','ready.html#contacts'],
    ['package','Emergency supplies','Water, food, medicine and household stock','ready.html#supplies'],
    ['users','Neighbour support','Offers of help and community needs','ready.html#community'],
    ['shopping-basket','Weekly basket','Grocery list, priorities and budget','basket.html'],
    ['tags','Price book','Local shop prices and comparisons','basket.html#prices'],
    ['map','Shopping plan','Budget and buying route by shop','basket.html#plan'],
    ['printer','Basket card','Copy, CSV export and print','basket.html#share'],
    ['wallet-cards','Monthly expenses','Budget, income, spending and cash flow','expenses.html'],
    ['chart-no-axes-column-increasing','Spending categories','See where monthly money goes','expenses.html'],
    ['sprout','My farm','Crop tracker, harvest dates and field log','grow.html'],
    ['leaf','Crop health guide','Disease symptoms and pest information','grow.html#disease'],
    ['bug','Pest guide','Crop pests and prevention','grow.html#pests'],
    ['calendar-days','Planting calendar','Maha and Yala seasons','grow.html#calendar'],
    ['scan-eye','Clarity Lens','Color contrast, reading ease and touch targets','clarity.html'],
    ['hard-drive','Workspace & data','Preferences, backup and restore','data.html'],
  ];
  function search() {
    const query = $('#toolSearch').value.trim().toLowerCase();
    const matches = searchEntries.filter(item => item.slice(1,3).join(' ').toLowerCase().includes(query));
    $('#searchResults').innerHTML = matches.length ? matches.map(([icon,title,description,href]) => `<a class="search-result" href="./${href}"><i data-lucide="${icon}"></i><span><strong>${title}</strong><small>${description}</small></span></a>`).join('') : '<p class="muted">No matching tools.</p>';
    icons();
  }
  $('#searchOpen').addEventListener('click', () => { $('#searchDialog').showModal(); $('#toolSearch').value = ''; search(); $('#toolSearch').focus(); });
  $('#toolSearch').addEventListener('input',search);
  if (document.body.dataset.page === 'data') setupData();
  function download(value, filename) {
    const url = URL.createObjectURL(new Blob([JSON.stringify(value,null,2)],{type:'application/json'}));
    const link = document.createElement('a');
    link.href = url; link.download = filename;
    link.click(); setTimeout(() => URL.revokeObjectURL(url),1000);
  }
  function setupData() {
    $('#workspaceName').value = prefs.name || '';
    $('#workspaceLanguage').value = prefs.language || 'en';
    $('#preferencesForm').addEventListener('submit', event => {
      event.preventDefault();
      const value = {name:$('#workspaceName').value.trim(),language:$('#workspaceLanguage').value};
      try {
        localStorage.setItem(preferenceKey,JSON.stringify(value));
        for (const [id,key] of Object.entries(keys)) {
          if (['clarity','expenses'].includes(id) || !localStorage.getItem(key)) continue;
          localStorage.setItem(key,JSON.stringify({...read(key),language:value.language}));
        }
        toast('Workspace preferences saved.');
      } catch { toast('Could not save. Browser storage may be full.'); }
    });
    function inventory() {
      $('#dataInventory').innerHTML = Object.entries(keys).map(([id,key]) => `<div class="inventory-row"><span>${names[id]}</span><span>${localStorage.getItem(key) ? 'Saved on this device' : 'Not started yet'}</span></div>`).join('');
    }
    inventory();
    $('#backupButton').addEventListener('click', () => {
      const data = {};
      for (const key of [...Object.values(keys),preferenceKey]) if (localStorage.getItem(key)) data[key] = read(key);
      download({app:'lanka-one',version:1,createdAt:new Date().toISOString(),data},`lanka-one-${new Date().toISOString().slice(0,10)}.json`);
      toast('Workspace backup downloaded.');
    });
    let pending = null;
    $('#restoreButton').addEventListener('click', () => $('#backupFile').click());
    $('#backupFile').addEventListener('change', async event => {
      const file = event.target.files[0];
      if (!file) return;
      try {
        if (file.size > 5_000_000) throw new Error('Backup is too large.');
        const backup = JSON.parse(await file.text());
        validateBackup(backup);
        pending = backup.data;
        $('#restoreSummary').textContent = `${Object.keys(pending).length} saved records are ready to restore.`;
        $('#restoreDialog').showModal();
      } catch (error) { toast(error.message || 'This backup could not be read.'); }
      event.target.value = '';
    });
    $('#confirmRestore').addEventListener('click', () => {
      if (!pending) return;
      const previous = Object.fromEntries(Object.keys(pending).map(key => [key,localStorage.getItem(key)]));
      try {
        for (const [key,value] of Object.entries(pending)) localStorage.setItem(key,JSON.stringify(value));
        toast('All selected plans restored.');
        const restored = read(preferenceKey);
        $('#workspaceName').value = restored.name || '';
        $('#workspaceLanguage').value = restored.language || 'en';
        inventory();
      } catch {
        for (const [key,value] of Object.entries(previous)) { if (value === null) localStorage.removeItem(key); else localStorage.setItem(key,value); }
        toast('Restore failed. Your previous data was kept.');
      }
      pending = null; $('#restoreDialog').close();
    });
  }
  function validateBackup(backup) {
    const fail = () => { throw new Error('This is not a valid Lanka One backup.'); };
    const object = v => v && typeof v === 'object' && !Array.isArray(v);
    if (backup.app !== 'lanka-one' || backup.version !== 1 || !object(backup.data)) fail();
    const allowed = [...Object.values(keys),preferenceKey];
    function inspect(value, field = '', depth = 0) {
      if (depth > 8) fail();
      if (typeof value === 'string') {
        if (value.length > 20000) fail();
        if (field === 'id' && !/^[\w-]+$/.test(value)) fail();
        if (['foreground','background'].includes(field) && !/^#[\da-f]{6}$/i.test(value)) fail();
        if (field === 'language' && !['en','si','ta'].includes(value)) fail();
      } else if (typeof value === 'number') { if (!Number.isFinite(value) || Math.abs(value) > 1e9) fail(); }
      else if (Array.isArray(value)) { if (value.length > 10000) fail(); value.forEach(v => inspect(v,field,depth+1)); }
      else if (object(value)) { for (const [k,v] of Object.entries(value)) { if (['__proto__','constructor','prototype'].includes(k)) fail(); inspect(v,k,depth+1); } }
      else if (typeof value !== 'boolean' && value !== null) fail();
    }
    const arrays = { [keys.ready]:['risks','needs','contacts','offers','help'], [keys.basket]:['basket','priceBook'], [keys.expenses]:['transactions'], [keys.grow]:['crops','log'], [keys.clarity]:['history'] };
    const entries = {basket:['id','name','category','unit','shop','priority'],priceBook:['id','item','shop','unit','date'],transactions:['id','type','date','description','category','payment'],crops:['id','name','planted','harvest','notes'],log:['id','text','date'],contacts:['id','name','role','phone'],history:['text','foreground','background','ratio','date']};
    const numeric = (obj,key,min,max,integer=false) => {
      if (typeof obj[key] !== 'number' || !Number.isFinite(obj[key]) || obj[key] < min || obj[key] > max || (integer && !Number.isInteger(obj[key]))) fail();
    };
    const strings = (obj,fields) => fields.forEach(key => { if (typeof obj[key] !== 'string') fail(); });
    const date = value => { if (!/^\d{4}-\d{2}-\d{2}$/.test(value) || !Number.isFinite(Date.parse(value))) fail(); };
    const clarityFields = value => {
      strings(value,['text','foreground','background']);
      if (![value.foreground,value.background].every(color => /^#[\da-f]{6}$/i.test(color))) fail();
      numeric(value,'fontSize',10,72); numeric(value,'fontWeight',400,800);
      numeric(value,'targetWidth',20,320); numeric(value,'targetHeight',20,180);
      if (value.simulation !== undefined && !['normal','deuteranopia','protanopia','tritanopia','achromatopsia'].includes(value.simulation)) fail();
    };
    for (const [key,value] of Object.entries(backup.data)) {
      if (!allowed.includes(key) || !object(value)) fail();
      inspect(value);
      for (const field of arrays[key] || []) {
        if (!Array.isArray(value[field])) fail();
        if (entries[field]) value[field].forEach(item => { if (!object(item) || entries[field].some(k => typeof item[k] !== 'string')) fail(); });
        else if (value[field].some(item => typeof item !== 'string')) fail();
      }
      if (key === keys.basket) {
        strings(value,['area','district']); numeric(value,'budget',0,1e9); numeric(value,'people',1,40,true);
        value.basket.forEach(item => {
          numeric(item,'qty',0.001,1e9); numeric(item,'price',0,1e9);
          if (typeof item.bought !== 'boolean' || !['essential','normal','delay'].includes(item.priority)) fail();
        });
        value.priceBook.forEach(item => { numeric(item,'price',0,1e9); date(item.date); });
      }
      if (key === keys.ready) {
        strings(value,['area','district','meetingPoint','route']); numeric(value,'people',1,40,true); numeric(value,'days',1,21,true);
        if (!object(value.tasks) || !object(value.stock) || Object.values(value.tasks).some(done => typeof done !== 'boolean')) fail();
        for (const field of ['water','dryFood','medicine','lights','documents','cash']) numeric(value.stock,field,0,99,true);
      }
      if (key === keys.expenses) {
        if (!/^\d{4}-(0[1-9]|1[0-2])$/.test(value.selectedMonth) || !object(value.monthlyBudgets)) fail();
        for (const [month,budget] of Object.entries(value.monthlyBudgets)) {
          if (!/^\d{4}-(0[1-9]|1[0-2])$/.test(month) || typeof budget !== 'number' || !Number.isFinite(budget) || budget <= 0 || budget > 1e9) fail();
        }
        const categories = ['Food & groceries','Housing','Transport','Utilities','Health','Education','Family','Farming','Savings','Leisure','Other','Salary','Business','Farming income','Freelance','Pension','Gift','Other income'];
        const payments = ['Cash','Bank account','Card','Mobile wallet','Other'];
        value.transactions.forEach(item => {
          if (!['expense','income'].includes(item.type) || !categories.includes(item.category) || !payments.includes(item.payment) || typeof item.recurring !== 'boolean') fail();
          if (!item.description.trim() || item.description.length > 100) fail();
          numeric(item,'amount',0.01,1e9); date(item.date);
        });
      }
      if (key === keys.grow) {
        strings(value,['farmerName','district']); numeric(value,'farmSize',1,10000);
        if (!['maha','yala'].includes(value.season)) fail();
        value.crops.forEach(item => { numeric(item,'area',1,10000); date(item.planted); date(item.harvest); if (item.harvest < item.planted) fail(); });
        value.log.forEach(item => date(item.date));
      }
      if (key === keys.clarity) {
        clarityFields(value);
        value.history.forEach(item => { clarityFields(item); if (item.score !== null) numeric(item,'score',0,100); if (!/^\d+(\.\d+)?:1$/.test(item.ratio)) fail(); });
      }
      if (key === preferenceKey && (typeof value.name !== 'string' || !['en','si','ta'].includes(value.language))) fail();
    }
  }
  function connection() { $('#connectionLabel').textContent = navigator.onLine ? 'Local workspace' : 'Working offline'; }
  window.addEventListener('online',connection); window.addEventListener('offline',connection); connection();
  if ('serviceWorker' in navigator && location.protocol !== 'file:') {
    navigator.serviceWorker.register('./service-worker.js').then(() => navigator.serviceWorker.ready).then(() => { $('#offlineStatus').textContent = 'Available offline'; }).catch(() => { $('#offlineStatus').textContent = 'Online access only'; });
  } else $('#offlineStatus').textContent = 'Browser storage';
  icons();
})();
