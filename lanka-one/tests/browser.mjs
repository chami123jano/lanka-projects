import { chromium } from 'playwright';
import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';
const origin = process.env.TEST_URL || 'http://localhost:4180';
await mkdir('test-results',{recursive:true});
const serverResponse = await fetch(`${origin}/expenses.html`);
assert.equal(serverResponse.status,200);
assert.equal(serverResponse.headers.get('x-frame-options'),'DENY');
assert.match(serverResponse.headers.get('content-security-policy') || '',/frame-ancestors 'none'/);
assert.equal((await fetch(`${origin}/index.html`,{method:'POST'})).status,405);
const browser = await chromium.launch({channel:'chrome',headless:true});
const context = await browser.newContext({viewport:{width:1440,height:1000},permissions:['clipboard-read','clipboard-write']});
const page = await context.newPage();
const errors=[];
page.on('pageerror',error => errors.push(error.message));
async function visit(name='index',hash='') { await page.goto(`${origin}/${name}.html${hash}`); await page.waitForFunction(() => !!window.lucide); }
async function value(selector,text) { await page.locator(selector).fill(text); }
try {
  await visit();
  assert.equal(await page.locator('.tool-card').count(),4);
  await page.locator('#searchOpen').click();
  await value('#toolSearch','contact');
  await page.locator('.search-result').click();
  await page.waitForURL('**/ready.html#contacts');
  await value('#contactName','Test neighbour'); await value('#contactRole','Family'); await value('#contactPhone','0712345678');
  await page.locator('#contactForm button').click();
  assert.match(await page.locator('#contactList').innerText(),/Test neighbour/);
  await value('#meetingPointInput','Community hall');
  await page.locator('[data-tab="plan"]').click();
  await page.locator('[data-task-key]').first().check();
  await page.reload();
  assert.equal(await page.locator('[data-task-key]').first().isChecked(),true);
  await page.locator('[data-tab="supplies"]').click();
  await page.locator('[data-stock-key="water"] [data-action="plus"]').click();
  assert.equal(await page.locator('[data-stock-key="water"] output').innerText(),'1');
  await page.locator('[data-tab="community"]').click();
  await page.locator('#addOfferButton').click(); await value('#aidText','Share water'); await page.locator('#aidForm [type=submit]').click();
  assert.match(await page.locator('#offerList').innerText(),/Share water/);
  await page.emulateMedia({media:'print'});
  assert.equal(await page.locator('#printCard').isVisible(),true);
  assert.equal(await page.locator('.site-sidebar').isVisible(),false);
  await page.emulateMedia({media:'screen'});
  await visit('basket');
  assert.match(await page.locator('#budgetMessage').innerText(),/incomplete/);
  await page.getByRole('button',{name:'Edit Rice',exact:true}).click();
  await value('#priceInput','230.50'); await value('#shopInput','Corner shop');
  await page.locator('#basketForm [type=submit]').click();
  assert.match(await page.locator('.basket-item').first().innerText(),/1,153|1,152.5/);
  assert.equal(await page.locator('.basket-item').count(),6);
  await page.locator('[data-tab="prices"]').click();
  await value('#priceItemInput','Rice'); await value('#priceShopInput','Market'); await value('#priceBookValueInput','220');
  await page.locator('#priceForm [type=submit]').click();
  assert.match(await page.locator('#bestPriceList').innerText(),/220/);
  await page.locator('[data-tab="share"]').click();
  const csvPromise=page.waitForEvent('download'); await page.locator('#exportButton').click();
  const csv=await csvPromise; assert.match(csv.suggestedFilename(),/\.csv$/);
  await visit('expenses');
  await value('#expenseMonth','2026-09');
  await page.locator('#expenseMonth').dispatchEvent('change');
  await value('#monthlyBudget','50000');
  await page.locator('#monthlyBudget').dispatchEvent('change');
  await page.locator('#newTransaction').click();
  await value('#transactionDate','2026-09-03'); await value('#transactionDescription','Household rent'); await value('#transactionAmount','20000');
  await page.locator('#transactionCategory').selectOption('Housing'); await page.locator('#transactionPayment').selectOption('Bank account'); await page.locator('#transactionRecurring').check();
  await page.locator('#transactionForm [type=submit]').click();
  assert.match(await page.locator('#spentMetric').innerText(),/20,000/);
  assert.match(await page.locator('#remainingMetric').innerText(),/30,000/);
  await page.locator('#newTransaction').click(); await page.locator('#transactionType').selectOption('income');
  await value('#transactionDate','2026-09-01'); await value('#transactionDescription','Monthly salary'); await value('#transactionAmount','80000');
  await page.locator('#transactionCategory').selectOption('Salary'); await page.locator('#transactionPayment').selectOption('Bank account');
  await page.locator('#transactionForm [type=submit]').click();
  assert.match(await page.locator('#incomeMetric').innerText(),/80,000/);
  await page.getByRole('button',{name:'Edit Household rent'}).click(); await value('#transactionAmount','22000');
  await page.locator('#transactionForm [type=submit]').click();
  assert.match(await page.locator('#spentMetric').innerText(),/22,000/);
  assert.match(await page.locator('#remainingMetric').innerText(),/28,000/);
  await page.locator('#transactionTypeFilter').selectOption('expense'); assert.equal(await page.locator('.transaction-row').count(),1);
  await page.locator('#transactionTypeFilter').selectOption('all'); assert.equal(await page.locator('.transaction-row').count(),2);
  const expenseCsvPromise=page.waitForEvent('download'); await page.locator('#exportExpenses').click();
  const expenseCsv=await expenseCsvPromise; assert.match(expenseCsv.suggestedFilename(),/expenses-2026-09\.csv$/);
  await visit('grow');
  await page.locator('#addCropButton').click(); await value('#cropNameInput','Tomato'); await value('#cropAreaInput','5');
  await value('#plantedDateInput','2026-09-01'); await value('#harvestDateInput','2026-11-20'); await value('#cropNotesInput','Garden bed');
  await page.locator('#cropForm [type=submit]').click();
  assert.match(await page.locator('#cropList').innerText(),/Tomato/);
  await value('#logNoteInput','New leaves this morning.'); await page.locator('#logForm [type=submit]').click();
  assert.match(await page.locator('#logList').innerText(),/New leaves/);
  await page.locator('[data-tab="disease"]').click(); await page.locator('#diseaseCropFilter').selectOption('Tomato');
  assert.equal(await page.locator('.disease-card').count(),2);
  assert.equal(await page.locator('.disease-card .detail-block').count(),4);
  await page.locator('[data-tab="pests"]').click(); await page.locator('#pestCropFilter').selectOption('Rice');
  assert.equal(await page.locator('.pest-card').count(),2);
  await visit('clarity');
  await value('#fgHex','#000000'); await value('#bgHex','#ffffff');
  assert.equal(await page.locator('#ratioLabel').innerText(),'21.00:1');
  await value('#targetWidth','24'); await value('#targetHeight','24');
  const target=await page.locator('#previewButton').boundingBox(); assert.equal(target.width,24); assert.equal(target.height,24);
  assert.equal(await page.locator('#targetLabel').innerText(),'Fail');
  await page.locator('#simMode').selectOption('deuteranopia');
  await page.locator('#saveButton').click();
  await page.locator('#simMode').selectOption('normal');
  await page.locator('[data-load-history="0"]').click();
  assert.equal(await page.locator('#simMode').inputValue(),'deuteranopia');
  await value('#sampleText',''); assert.equal(await page.locator('#readabilityLabel').innerText(),'N/A');
  await page.locator('#resetButton').click();
  assert.equal(await page.locator('.history-item').count(),1);
  await visit();
  assert.equal(await page.locator('#readyMetric').innerText(),'1');
  assert.match(await page.locator('#basketMetric').innerText(),/1,152.5/);
  assert.match(await page.locator('#growMetric').innerText(),/1 crop/);
  assert.match(await page.locator('#harvestList').innerText(),/Tomato/);
  assert.equal(await page.locator('#clarityMetric').innerText(),'1');
  assert.match(await page.locator('#expenseSpent').innerText(),/22,000/);
  assert.match(await page.locator('#expenseRemaining').innerText(),/28,000/);
  await visit('data');
  assert.equal(await page.locator('.inventory-row').count(),5);
  await value('#workspaceName','Kamal'); await page.locator('#workspaceLanguage').selectOption('si');
  await page.locator('#preferencesForm [type=submit]').click();
  await visit('grow'); assert.equal(await page.locator('#languageSelect').inputValue(),'si');
  await visit('data');
  const backupPromise=page.waitForEvent('download'); await page.locator('#backupButton').click();
  const backup=await backupPromise; const backupPath=await backup.path();
  await value('#workspaceName','Changed'); await page.locator('#preferencesForm [type=submit]').click();
  await page.locator('#backupFile').setInputFiles(backupPath);
  await page.locator('#confirmRestore').click();
  assert.equal(await page.locator('#workspaceName').inputValue(),'Kamal');
  await visit('expenses'); assert.equal(await page.locator('.transaction-row').count(),2);
  await visit('data');
  await page.locator('#backupFile').setInputFiles({name:'bad.json',mimeType:'application/json',buffer:Buffer.from('{"app":"lanka-one","version":1,"data":{"lanka-basket-state-v1":{"basket":"bad"}}}')});
  assert.equal(await page.locator('#restoreDialog').isVisible(),false);
  await page.locator('#workspaceLanguage').selectOption('en'); await page.locator('#preferencesForm [type=submit]').click();
  await visit(); await page.screenshot({path:'test-results/overview-with-data.png',fullPage:true});

  // Exercise every view at desktop and narrow mobile widths, including translated views.
  for (const viewport of [{width:1440,height:1000},{width:390,height:844}]) {
    await page.setViewportSize(viewport);
    for (const name of ['index','ready','basket','expenses','grow','clarity','data']) {
      await visit(name);
      await page.screenshot({path:`test-results/${name}-${viewport.width}.png`,fullPage:true});
      const languages=['ready','basket','grow'].includes(name) ? ['en','si','ta'] : ['en'];
      for (const language of languages) {
        if (await page.locator('#languageSelect').count()) await page.locator('#languageSelect').selectOption(language);
        const tabs=await page.locator('.tab').count();
        for (let i=0;i<Math.max(tabs,1);i++) {
          if(tabs) await page.locator('.tab').nth(i).click();
          const overflow=await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1);
          assert.equal(overflow,false,`Horizontal overflow: ${name} ${viewport.width} ${language} tab ${i}`);
        }
      }
    }
  }
  await page.locator('#menuButton').click(); assert.equal(await page.locator('#menuButton').getAttribute('aria-expanded'),'true');
  await page.locator('.primary-nav [data-nav="basket"]').click(); await page.waitForURL('**/basket.html');
  await page.waitForFunction(() => navigator.serviceWorker.controller !== null);
  await page.evaluate(() => navigator.serviceWorker.ready);
  await context.setOffline(true);
  for(const name of ['index','ready','basket','expenses','grow','clarity','data']) {
    await visit(name);
    assert.equal(await page.locator('#pageTitle').count(),1);
  }
  assert.deepEqual(errors,[]);
  await writeFile('test-results/report.json',JSON.stringify({passed:true,workflows:['static server methods and security headers','ready tasks, contacts, supplies, aid, print','basket edit, local prices, CSV','monthly budget, expense and income editing, filters, insights and CSV','grow crops, log, disease and pest filters','clarity contrast, target dimensions, simulation history','cross-tool dashboard','preferences, validated backup and restore','all tabs in 3 languages on desktop and mobile','offline navigation through all 7 pages'],errors},null,2));
  console.log('PASS: workflows, persistence, backup/restore, translated responsive views and offline navigation.');
} finally { await browser.close(); }
