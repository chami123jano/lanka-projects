import { readFile, writeFile, mkdir, copyFile, readdir } from 'node:fs/promises';
import { resolve, join } from 'node:path';
import { parseHTML } from 'linkedom';
import { parse } from 'acorn';

const root = resolve(import.meta.dirname, '..');
const site = join(root, 'site');
await mkdir(join(site, 'modules'), { recursive: true });
const pages = [
  ['ready', 'lanka-ready', 'Lanka Ready', 'Household preparedness', 'shield-check'],
  ['basket', 'lanka-basket', 'Lanka Basket', 'Groceries & local prices', 'shopping-basket'],
  ['grow', 'lanka-grow', 'Lanka Grow', 'Crops & field notes', 'sprout'],
  ['clarity', 'clarity-lens', 'Clarity Lens', 'Contrast & readability', 'scan-eye'],
];
const template = await readFile(join(root, 'templates/layout.html'), 'utf8');

function layout(page, title, subtitle, content, actions = '') {
  const { document } = parseHTML(template);
  document.title = `${title} | Lanka One`;
  document.body.dataset.page = page;
  document.querySelector('#pageTitle').textContent = title;
  document.querySelector('#pageSubtitle').textContent = subtitle;
  document.querySelector('#breadcrumb').textContent = title;
  document.querySelector('#pageContent').innerHTML = content;
  document.querySelector('#pageActions').innerHTML = actions;
  document.querySelector(`[data-nav="${page}"]`)?.setAttribute('aria-current', 'page');
  return document;
}

for (const [page, folder, title, subtitle] of pages) {
  const original = await readFile(join(root, 'source', folder, 'index.html'), 'utf8');
  const { document: old } = parseHTML(original);
  const main = old.querySelector('main');
  const workspace = old.createElement('section');
  workspace.className = `tool-workspace ${main.className}`;
  workspace.innerHTML = main.innerHTML;
  const actions = old.querySelector('header .top-actions, header .header-actions')?.innerHTML || '';
  const filters = old.querySelector('.svg-filters')?.outerHTML || '';
  const doc = layout(page, title, subtitle, filters + workspace.outerHTML, actions);
  doc.querySelector('#printButton')?.setAttribute('aria-label', 'Print plan');
  if (doc.querySelector('#printButton')) doc.querySelector('#printButton').innerHTML = '<i data-lucide="printer"></i>';
  for (const input of doc.querySelectorAll('input[type="number"]')) input.setAttribute('inputmode', 'decimal');
  if (page === 'basket') {
    doc.querySelector('#quantityInput').setAttribute('step', 'any');
    for (const id of ['priceInput', 'priceBookValueInput']) {
      doc.querySelector(`#${id}`).setAttribute('step', '0.01');
      doc.querySelector(`#${id}`).closest('label').querySelector('span').removeAttribute('data-i18n');
      doc.querySelector(`#${id}`).closest('label').querySelector('span').textContent = 'LKR / unit';
    }
  }
  if (page === 'clarity') {
    doc.querySelector('#previewButton').textContent = 'Aa';
    doc.querySelector('#previewButton').setAttribute('aria-label', 'Sample target');
    doc.querySelector('#fgHex').setAttribute('aria-label', 'Text hexadecimal color');
    doc.querySelector('#bgHex').setAttribute('aria-label', 'Background hexadecimal color');
    doc.querySelector('#scoreCard').insertAdjacentHTML('afterend', '<p class="method-note">Design checks only. Reading ease is an English-language estimate. <a href="https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html" target="_blank" rel="noreferrer">Contrast criteria</a> · <a href="https://www.w3.org/WAI/WCAG22/Understanding/target-size-enhanced.html" target="_blank" rel="noreferrer">44px target criteria</a></p>');
  }
  const script = doc.createElement('script');
  script.src = `./modules/${page}.js`;
  doc.body.appendChild(script);
  const bridge = doc.createElement('script');
  bridge.src = './bridge.js';
  doc.body.appendChild(bridge);
  let code = await readFile(join(root, 'source', folder, 'app.js'), 'utf8');
  // Keep complete tool logic; one shared worker now owns offline caching.
  const ast = parse(code, { ecmaVersion: 'latest' });
  const edits = [];
  function walk(node) {
    if (!node || typeof node !== 'object') return;
    if (node.type === 'IfStatement' && code.slice(node.start, node.end).includes('navigator.serviceWorker.register')) {
      edits.push([node.start, node.end]);
      return;
    }
    for (const value of Object.values(node)) {
      if (Array.isArray(value)) value.forEach(walk);
      else if (value && typeof value === 'object') walk(value);
    }
  }
  walk(ast);
  for (const [start, end] of edits.sort((a, b) => b[0] - a[0])) code = code.slice(0, start) + code.slice(end);
  code = code.replace(/[ \t]+(?=\r?$)/gm, '');
  await writeFile(join(site, 'modules', `${page}.js`), code);
  await writeFile(join(site, `${page}.html`), '<!doctype html>\n' + doc.documentElement.outerHTML);
}
for (const [page, title, subtitle, module] of [
  ['index', 'Your everyday, connected.', 'A little planning. A better day.'],
  ['expenses', 'Monthly expenses', 'Plan a budget and understand where your money goes', 'expenses'],
  ['data', 'Your workspace', 'Preferences, backups & saved plans'],
]) {
  const content = await readFile(join(root, 'templates', `${page}.html`), 'utf8');
  const doc = layout(page, title, subtitle, content);
  if (module) {
    const script = doc.createElement('script');
    script.src = `./modules/${module}.js`;
    doc.body.appendChild(script);
    await copyFile(join(root, 'source', module, 'app.js'), join(site, 'modules', `${module}.js`));
  }
  await writeFile(join(site, `${page}.html`), '<!doctype html>\n' + doc.documentElement.outerHTML);
}
await copyFile(join(root, 'node_modules/lucide/dist/umd/lucide.min.js'), join(site, 'assets/lucide.min.js'));
await copyFile(join(root, 'node_modules/lucide/LICENSE'), join(site, 'assets/lucide-LICENSE.txt'));
await copyFile(join(root, 'node_modules/@fontsource/dm-sans/LICENSE'), join(site, 'assets/dm-sans-LICENSE.txt'));
for (const weight of [400, 500, 600, 700]) {
  await copyFile(join(root, `node_modules/@fontsource/dm-sans/files/dm-sans-latin-${weight}-normal.woff2`), join(site, `assets/dm-sans-${weight}.woff2`));
}
const assets = [];
async function inventory(dir, prefix = '.') {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) await inventory(join(dir, entry.name), `${prefix}/${entry.name}`);
    else if (entry.name !== 'service-worker.js') assets.push(`${prefix}/${entry.name}`);
  }
}
await inventory(site);
const worker = await readFile(join(root, 'templates/service-worker.js'), 'utf8');
await writeFile(join(site, 'service-worker.js'), worker.replace('/* ASSETS */ []', JSON.stringify(assets)));
console.log(`Built 7 connected pages and ${assets.length} offline assets in site/.`);
