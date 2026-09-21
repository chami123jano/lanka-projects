(() => {
  const page = document.body.dataset.page;
  const $ = selector => document.querySelector(selector);
  const icon = name => `<i data-lucide="${name}"></i>`;
  const notify = message => window.lankaToast?.(message);
  const refreshIcons = () => window.lucide?.createIcons();
  function decorateButtons() {
    const tools = {resetTasksButton:['rotate-ccw','Reset tasks'],resetStockButton:['rotate-ccw','Reset stock'],resetBasketButton:['rotate-ccw','Reset basket'],copyButton:['copy','Copy report'],swapButton:['arrow-left-right','Swap colors'],resetButton:['rotate-ccw','Reset preview'],clearHistoryButton:['trash-2','Clear saved checks'],addOfferButton:['plus','Add an offer of help'],addNeedButton:['plus','Add a support need']};
    for (const [id,[name,label]] of Object.entries(tools)) {
      const button=$('#'+id);
      if (!button) continue;
      button.removeAttribute('data-i18n'); button.innerHTML=icon(name); button.title=label; button.setAttribute('aria-label',label); button.className='square-button';
    }
    refreshIcons();
  }
  let preferences = {};
  try { preferences = JSON.parse(localStorage.getItem('lanka-one-preferences-v1')) || {}; } catch {}
  const originalSave = saveState;
  saveState = function () {
    try { originalSave(); }
    catch { notify('Could not save. Browser storage may be full.'); }
  };
  // Preserve the original modules' state formats while sharing navigation and preferences.
  if (page !== 'clarity' && preferences.language && !localStorage.getItem(STORAGE_KEY)) {
    state.language = preferences.language;
    $('#languageSelect').value = state.language;
    $('#languageSelect').dispatchEvent(new Event('change'));
  }
  document.documentElement.lang = page === 'clarity' ? 'en' : state.language;
  document.addEventListener('input', event => {
    const input = event.target;
    if (!(input instanceof HTMLInputElement) || input.type !== 'number' || input.value === '') return;
    const value = Number(input.value);
    if (!Number.isFinite(value)) return;
    if (input.min !== '' && value < Number(input.min)) input.value = input.min;
    if (input.max !== '' && value > Number(input.max)) input.value = input.max;
  }, true);

  if (page !== 'clarity') {
    const originalTabs = renderTabs;
    renderTabs = function () {
      originalTabs();
      document.querySelectorAll('.tab').forEach(tab => {
        tab.setAttribute('aria-pressed',String(tab.classList.contains('active')));
      });
    };
    function route() {
      const name = location.hash.slice(1);
      if ([...document.querySelectorAll('.tab')].some(tab => tab.dataset.tab === name)) {
        activeTab = name;
        renderTabs();
      }
      $('#searchDialog')?.close();
    }
    document.querySelectorAll('.tab').forEach(tab => tab.addEventListener('click', () => history.replaceState(null,'',`#${tab.dataset.tab}`)));
    window.addEventListener('hashchange',route);
    route();
  }

  if (page === 'basket') {
    money = value => new Intl.NumberFormat('en-LK',{style:'currency',currency:'LKR',minimumFractionDigits:0,maximumFractionDigits:2}).format(value || 0);
    const originalBasket = renderBasket;
    const originalBudget = renderBudget;
    let editing = null;
    renderBasket = function () {
      originalBasket();
      document.querySelectorAll('.basket-item').forEach((row,index) => {
        const item = state.basket[index];
        if (!(item.price > 0)) row.querySelector('.price-total').textContent = 'No price yet';
        const remove = row.querySelector('[data-delete-item]');
        remove.innerHTML = icon('trash-2');
        remove.setAttribute('aria-label',`Delete ${item.name}`);
        const actions = document.createElement('div'); actions.className = 'row-actions';
        remove.replaceWith(actions); actions.append(remove);
        const edit = document.createElement('button');
        edit.className = 'mini-button'; edit.type = 'button'; edit.title = `Edit ${item.name}`; edit.setAttribute('aria-label',edit.title); edit.innerHTML = icon('pencil');
        edit.addEventListener('click', () => {
          editing = item.id;
          els.itemNameInput.value = item.name; els.categoryInput.value = item.category;
          els.quantityInput.value = item.qty; els.unitInput.value = item.unit;
          els.priceInput.value = item.price || ''; els.shopInput.value = item.shop;
          els.priorityInput.value = item.priority;
          els.basketForm.querySelector('[type=submit]').textContent = 'Save changes';
          $('#cancelEdit').hidden = false;
          els.itemNameInput.focus();
          els.basketForm.scrollIntoView({behavior:'smooth',block:'center'});
        });
        actions.prepend(edit);
      });
      refreshIcons();
    };
    renderBudget = function () {
      originalBudget();
      const missing = state.basket.filter(item => !(item.price > 0)).length;
      if (missing) els.budgetMessage.textContent = `${missing} items need a price. This total is incomplete.`;
      if (state.budget <= 0) {
        els.budgetUsedLabel.textContent = 'No budget';
        els.budgetMessage.textContent = 'Set a budget to compare your basket total.';
      }
    };
    const cancel = document.createElement('button');
    cancel.type = 'button'; cancel.id = 'cancelEdit'; cancel.className = 'ghost-button'; cancel.textContent = 'Cancel edit'; cancel.hidden = true;
    els.basketForm.append(cancel);
    function finishEdit() {
      editing = null; cancel.hidden = true; els.basketForm.reset(); els.quantityInput.value = 1;
      els.basketForm.querySelector('[type=submit]').textContent = t('addItem');
    }
    cancel.addEventListener('click',finishEdit);
    els.basketForm.addEventListener('submit',event => {
      if (!editing) return;
      event.preventDefault(); event.stopImmediatePropagation();
      const item = state.basket.find(row => row.id === editing);
      if (!item || !els.itemNameInput.value.trim()) return;
      Object.assign(item,{name:els.itemNameInput.value.trim(),category:els.categoryInput.value,qty:Number(els.quantityInput.value),unit:els.unitInput.value,price:Number(els.priceInput.value),shop:els.shopInput.value.trim(),priority:els.priorityInput.value});
      if (item.price > 0) savePriceFromItem(item);
      finishEdit(); renderAll(); saveState(); notify('Basket item updated.');
    },true);
    const originalPrices = renderPriceEntries;
    renderPriceEntries = function () {
      originalPrices();
      document.querySelectorAll('.price-entry').forEach((row,index) => {
        const price = document.createElement('strong');
        price.textContent = money(state.priceBook[index].price);
        row.querySelector('div').append(price);
      });
    };
    const oldCsv = csvCell;
    csvCell = value => oldCsv(typeof value === 'string' && /^[\s]*[=+@-]/.test(value) ? "'" + value : value);
  }

  if (page === 'ready') {
    $('#addOfferButton').setAttribute('aria-label','Add an offer of help');
    $('#addNeedButton').setAttribute('aria-label','Add a support need');
    const dialog = document.createElement('dialog');
    dialog.innerHTML = '<form id="aidForm"><div class="dialog-heading"><h2 id="aidTitle">Neighbour support</h2><button class="square-button" type="button" id="closeAid" aria-label="Close">'+icon('x')+'</button></div><label class="field"><span id="aidLabel"></span><input id="aidText" maxlength="300" required></label><div class="button-row"><button class="primary-button" type="submit">Add to plan</button></div></form>';
    document.body.append(dialog);
    let aidType;
    addAidItem = type => { aidType = type; $('#aidLabel').textContent = t(type === 'offers' ? 'customPromptOffer':'customPromptNeed'); $('#aidText').value=''; dialog.showModal(); $('#aidText').focus(); };
    $('#closeAid').addEventListener('click',() => dialog.close());
    $('#aidForm').addEventListener('submit',event => { event.preventDefault(); const value = $('#aidText').value.trim(); if (!value) return; state[aidType].push(value); renderAll(); saveState(); dialog.close(); });
  }

  if (page === 'grow') {
    const originalFilters = renderFilterOptions;
    renderFilterOptions = function () {
      const crop = els.diseaseCropFilter.value, pest = els.pestCropFilter.value;
      originalFilters();
      if ([...els.diseaseCropFilter.options].some(option=>option.value===crop)) els.diseaseCropFilter.value=crop;
      if ([...els.pestCropFilter.options].some(option=>option.value===pest)) els.pestCropFilter.value=pest;
    };
    const originalDiseases = renderDiseases, originalPests = renderPests;
    function treatmentReferences(selector) {
      document.querySelectorAll(selector).forEach(card => {
        const blocks = card.querySelectorAll('.detail-block');
        // Treatment choices require crop-specific, current local advice.
        blocks[2]?.remove(); blocks[3]?.remove();
        const link = document.createElement('a');
        link.className='inline-link'; link.href='https://doa.gov.lk/'; link.target='_blank'; link.rel='noreferrer';
        link.textContent='Treatment guidance: Department of Agriculture';
        card.append(link);
      });
    }
    renderDiseases = function () {
      originalDiseases();
      const symptomNames={yellowing:'symptomYellow',wilting:'symptomWilt',spots:'symptomSpots',rot:'symptomRot',blight:'symptomBlight',stunted:'symptomStunted'};
      document.querySelectorAll('.symptom-tag').forEach(tag => {
        for (const [key,value] of Object.entries(symptomNames)) if (tag.textContent === 'symptom'+key[0].toUpperCase()+key.slice(1)) tag.textContent = t(value);
      });
      treatmentReferences('.disease-card');
    };
    renderPests = function () { originalPests(); treatmentReferences('.pest-card'); };
    [els.diseaseCropFilter,els.diseaseSymptomFilter].forEach(input => input.addEventListener('change',event => { event.stopImmediatePropagation(); renderDiseases(); },true));
    els.pestCropFilter.addEventListener('change',event => { event.stopImmediatePropagation(); renderPests(); },true);
    function validateDates() { els.harvestDateInput.min = els.plantedDateInput.value; }
    els.plantedDateInput.addEventListener('input',validateDates);
    $('#addCropButton').addEventListener('click',validateDates);
  }

  if (page === 'clarity') {
    const originalAnalyze = analyze;
    analyze = function () {
      const result = originalAnalyze();
      if (!(state.text.trim() && /[a-z]/i.test(state.text))) {
        result.readingEase = null; result.score = null;
        result.statusLabel = 'Add English text'; result.scoreLabel = 'Not scored'; result.statusTone = 'warn';
      }
      return result;
    };
    const originalRender = render;
    render = function () {
      originalRender();
      const result = analyze();
      if (result.score === null) { els.scoreValue.textContent='--'; els.readabilityLabel.textContent='N/A'; }
      els.targetLabel.parentElement.querySelector('p').textContent = '44px target';
      els.aaLabel.parentElement.querySelector('p').textContent = 'Text contrast AA';
      els.aaaLabel.parentElement.querySelector('p').textContent = 'Text contrast AAA';
      const input = state.fontSize >= 24 || (state.fontSize >= 56/3 && state.fontWeight >= 700);
      els.aaLabel.textContent = result.ratio >= (input ? 3 : 4.5) ? 'Pass' : 'Fail';
      els.aaaLabel.textContent = result.ratio >= (input ? 4.5 : 7) ? 'Pass' : 'Fail';
      document.querySelector('.check-item:nth-child(2) p').textContent = result.ratio >= 3 ? 'Meets the large-text ratio of 3:1.' : 'Below the large-text ratio of 3:1.';
      document.querySelector('.check-item:nth-child(2)').className = 'check-item ' + (result.ratio >= 3 ? 'pass':'fail');
      document.querySelectorAll('.check-item:nth-child(n+4)').forEach(el=>el.hidden=result.score === null);
    };
    const originalCheck = saveCheck;
    // Existing click handlers use the original function reference; capture for extra state.
    $('#saveButton').addEventListener('click',event => {
      event.stopImmediatePropagation();
      if (analyze().score === null) { notify('Add English sample text before saving a scored check.'); return; }
      originalCheck();
      state.history[0].simulation=state.simulation;
      saveState(); notify('Design check saved.');
    },true);
    document.addEventListener('click',event => {
      const button=event.target.closest('[data-load-history]');
      if (button) { const item=state.history[Number(button.dataset.loadHistory)]; state.simulation=item.simulation || 'normal'; }
    },true);
    $('#copyButton').addEventListener('click', async event => {
      event.stopImmediatePropagation();
      const a=analyze();
      const text=`Clarity Lens\nText contrast: ${a.ratio.toFixed(2)}:1\nAA: ${els.aaLabel.textContent}\nAAA: ${els.aaaLabel.textContent}\n44px target check: ${a.targetPass?'Pass':'Fail'}\nReading ease (English estimate): ${a.readingEase ?? 'N/A'}\nThese checks do not establish whole-page WCAG conformance.`;
      try { await navigator.clipboard.writeText(text); notify('Report copied.'); }
      catch { notify('Clipboard unavailable. Check browser permissions.'); }
    },true);
    $('#resetButton').addEventListener('click',event => {
      event.stopImmediatePropagation(); const saved=state.history; state=structuredClone(defaultState); state.history=saved; syncInputs(); renderAndSave();
    },true);
  }
  if (page === 'clarity') render(); else renderAll();
  if (!localStorage.getItem(STORAGE_KEY)) saveState();
  decorateButtons();
})();
