const STORAGE_KEY = "lanka-basket-state-v1";

const translations = {
  en: {
    appName: "Lanka Basket",
    kicker: "Offline price notebook",
    language: "Language",
    print: "Print",
    profileKicker: "Household setup",
    profileTitle: "Weekly basket target",
    area: "Area or town",
    district: "District",
    people: "People",
    budget: "Budget LKR",
    budgetUsed: "Budget used",
    quickStats: "Quick stats",
    tabBasket: "Basket",
    tabPrices: "Price book",
    tabPlan: "Plan",
    tabShare: "Share",
    basketKicker: "Shopping list",
    basketTitle: "This week's basket",
    resetBasket: "Reset basket",
    itemName: "Item",
    category: "Category",
    quantity: "Qty",
    unit: "Unit",
    price: "Price",
    shop: "Shop",
    priority: "Priority",
    priorityEssential: "Essential",
    priorityNormal: "Normal",
    priorityDelay: "Can delay",
    addItem: "Add item",
    pricesKicker: "Local comparison",
    pricesTitle: "Price book",
    savePrice: "Save price",
    bestPrices: "Best prices saved",
    recentPrices: "Recent entries",
    planKicker: "Decision support",
    planTitle: "Stretch the basket",
    routeKicker: "Grouped by shop",
    routeTitle: "Buying route",
    markAll: "Mark all bought",
    shareKicker: "For home or community",
    shareTitle: "Printable basket card",
    copySummary: "Copy summary",
    downloadCsv: "Download CSV",
    cardKicker: "Weekly list",
    cardTitle: "Household basket card",
    noArea: "your area",
    noShop: "Unlisted shop",
    noItems: "Add items to build this week's basket.",
    noPrices: "Save prices from your local shops to compare them later.",
    copied: "Summary copied.",
    saved: "Saved on this device.",
    budgetOk: "Inside budget. Keep comparing prices before buying.",
    budgetTight: "Close to the limit. Check delayed items and shop choices.",
    budgetOver: "Over budget. Move delayable items or compare cheaper shops.",
    statTotal: "Basket total",
    statRemaining: "Remaining",
    statBought: "Bought",
    statEssentials: "Essentials",
    insightBudget: "Budget",
    insightNutrition: "Balance",
    insightCompare: "Compare",
    nutritionGood: "Staples, protein, and vegetables are all represented.",
    nutritionProtein: "Add or compare one affordable protein item.",
    nutritionVeg: "Add or compare at least one vegetable or fruit item.",
    nutritionStaple: "Add a staple item such as rice, flour, or bread.",
    compareReady: "{count} saved shop prices can guide this basket.",
    compareEmpty: "Add shop prices when you visit markets, co-ops, or groceries.",
    insightBestShop: "Best Shop",
    bestShopNone: "Add prices from at least two shops to find which saves most.",
    bestShopResult: "{shop} covers {count} items at {total}",
    delete: "Delete",
    bought: "Bought",
    notBought: "Not bought",
  },
  si: {
    appName: "Lanka Basket",
    kicker: "අන්තර්ජාලය නැතිව වැඩ කරන මිල සටහන් පොත",
    language: "භාෂාව",
    print: "මුද්‍රණය",
    profileKicker: "නිවසේ සැකසුම",
    profileTitle: "සතියේ බඩු ඉලක්කය",
    area: "ප්‍රදේශය හෝ නගරය",
    district: "දිස්ත්‍රික්කය",
    people: "පුද්ගලයන්",
    budget: "අයවැය LKR",
    budgetUsed: "අයවැය භාවිතය",
    quickStats: "ඉක්මන් තොරතුරු",
    tabBasket: "බඩු ලැයිස්තුව",
    tabPrices: "මිල පොත",
    tabPlan: "සැලැස්ම",
    tabShare: "බෙදාගන්න",
    basketKicker: "මිලදී ගැනීමේ ලැයිස්තුව",
    basketTitle: "මෙම සතියේ බඩු",
    resetBasket: "ලැයිස්තුව නැවත",
    itemName: "භාණ්ඩය",
    category: "වර්ගය",
    quantity: "ප්‍රමාණය",
    unit: "ඒකකය",
    price: "මිල",
    shop: "කඩය",
    priority: "ප්‍රමුඛතාව",
    priorityEssential: "අත්‍යවශ්‍ය",
    priorityNormal: "සාමාන්‍ය",
    priorityDelay: "පසුව ගත හැක",
    addItem: "එකතු කරන්න",
    pricesKicker: "දේශීය සැසඳීම",
    pricesTitle: "මිල පොත",
    savePrice: "මිල සුරකින්න",
    bestPrices: "සුරැකි හොඳම මිල",
    recentPrices: "නවතම සටහන්",
    planKicker: "තීරණ සහාය",
    planTitle: "බඩු ලැයිස්තුව දිගු කරන්න",
    routeKicker: "කඩ අනුව",
    routeTitle: "මිලදී ගැනීමේ මාර්ගය",
    markAll: "සියල්ල ගත්තා ලෙස",
    shareKicker: "නිවසට හෝ ප්‍රජාවට",
    shareTitle: "මුද්‍රණය කළ හැකි කාඩ්පත",
    copySummary: "සාරාංශය පිටපත්",
    downloadCsv: "CSV බාගන්න",
    cardKicker: "සතියේ ලැයිස්තුව",
    cardTitle: "නිවසේ බඩු කාඩ්පත",
    noArea: "ඔබේ ප්‍රදේශය",
    noShop: "කඩයක් නැත",
    noItems: "මෙම සතියේ බඩු ලැයිස්තුව සෑදීමට භාණ්ඩ එකතු කරන්න.",
    noPrices: "පසුව සැසඳීමට ඔබේ දේශීය කඩවල මිල සුරකින්න.",
    copied: "සාරාංශය පිටපත් විය.",
    saved: "මෙම උපාංගයේ සුරැකිණි.",
    budgetOk: "අයවැය තුළ ඇත. මිලදී ගැනීමට පෙර මිල සැසඳීම දිගටම කරන්න.",
    budgetTight: "සීමාවට ආසන්නයි. පසුව ගත හැකි භාණ්ඩ සහ කඩ තේරීම් පරීක්ෂා කරන්න.",
    budgetOver: "අයවැය ඉක්මවා ඇත. පසුව ගත හැකි භාණ්ඩ හෝ අඩු මිල කඩ සසඳන්න.",
    statTotal: "මුළු වියදම",
    statRemaining: "ඉතිරි",
    statBought: "ගෙන ඇත",
    statEssentials: "අත්‍යවශ්‍ය",
    insightBudget: "අයවැය",
    insightNutrition: "සමතුලිතතාව",
    insightCompare: "සැසඳීම",
    nutritionGood: "මූලික ආහාර, ප්‍රෝටීන් සහ එළවළු සියල්ල ඇත.",
    nutritionProtein: "අඩු මිල ප්‍රෝටීන් භාණ්ඩයක් එකතු කරන්න හෝ සසඳන්න.",
    nutritionVeg: "එළවළු හෝ පලතුරු භාණ්ඩයක් වත් එකතු කරන්න හෝ සසඳන්න.",
    nutritionStaple: "බත්, පිටි හෝ පාන් වැනි මූලික ආහාරයක් එකතු කරන්න.",
    compareReady: "සුරැකි කඩ මිල {count}ක් මෙම ලැයිස්තුවට සහාය වේ.",
    compareEmpty: "වෙළඳපොළ, සමුපකාර හෝ grocery වෙත යන විට මිල එකතු කරන්න.",
    insightBestShop: "හොඳම කඩය",
    bestShopNone: "වඩාත් ඉතිරි වන කඩය සොයා ගැනීමට කඩ දෙකකට වත් මිල එකතු කරන්න.",
    bestShopResult: "{shop} කඩය, භාණ්ඩ {count}ක් සඳහා {total}",
    delete: "ඉවත් කරන්න",
    bought: "ගෙන ඇත",
    notBought: "ගෙන නැත",
  },
  ta: {
    appName: "Lanka Basket",
    kicker: "இணையம் இல்லா விலை குறிப்பேடு",
    language: "மொழி",
    print: "அச்சிடு",
    profileKicker: "வீட்டு அமைப்பு",
    profileTitle: "வாராந்திர கூடை இலக்கு",
    area: "பகுதி அல்லது நகரம்",
    district: "மாவட்டம்",
    people: "மக்கள்",
    budget: "பட்ஜெட் LKR",
    budgetUsed: "பட்ஜெட் பயன்பாடு",
    quickStats: "விரைவு தகவல்",
    tabBasket: "கூடை",
    tabPrices: "விலை புத்தகம்",
    tabPlan: "திட்டம்",
    tabShare: "பகிர்",
    basketKicker: "வாங்கும் பட்டியல்",
    basketTitle: "இந்த வார கூடை",
    resetBasket: "கூடை மீட்டமை",
    itemName: "பொருள்",
    category: "வகை",
    quantity: "அளவு",
    unit: "அலகு",
    price: "விலை",
    shop: "கடை",
    priority: "முன்னுரிமை",
    priorityEssential: "அவசியம்",
    priorityNormal: "சாதாரணம்",
    priorityDelay: "பின்னர் வாங்கலாம்",
    addItem: "சேர்",
    pricesKicker: "உள்ளூர் ஒப்பீடு",
    pricesTitle: "விலை புத்தகம்",
    savePrice: "விலை சேமி",
    bestPrices: "சேமித்த சிறந்த விலைகள்",
    recentPrices: "சமீபத்திய பதிவுகள்",
    planKicker: "தீர்மான உதவி",
    planTitle: "கூடை நீட்டிப்பு",
    routeKicker: "கடை வாரியாக",
    routeTitle: "வாங்கும் பாதை",
    markAll: "அனைத்தும் வாங்கியது",
    shareKicker: "வீடு அல்லது சமூகத்திற்கு",
    shareTitle: "அச்சிடக்கூடிய கூடை அட்டை",
    copySummary: "சுருக்கம் நகலெடு",
    downloadCsv: "CSV பதிவிறக்கு",
    cardKicker: "வார பட்டியல்",
    cardTitle: "வீட்டு கூடை அட்டை",
    noArea: "உங்கள் பகுதி",
    noShop: "கடை சேர்க்கப்படவில்லை",
    noItems: "இந்த வார கூடை உருவாக்க பொருட்களைச் சேர்க்கவும்.",
    noPrices: "பின்னர் ஒப்பிட உள்ளூர் கடை விலைகளைச் சேமிக்கவும்.",
    copied: "சுருக்கம் நகலெடுக்கப்பட்டது.",
    saved: "இந்த சாதனத்தில் சேமிக்கப்பட்டது.",
    budgetOk: "பட்ஜெட்டுக்குள் உள்ளது. வாங்குவதற்கு முன் விலைகளை ஒப்பிடுங்கள்.",
    budgetTight: "வரம்பிற்கு அருகில் உள்ளது. பின்னர் வாங்கக்கூடிய பொருட்கள் மற்றும் கடை தேர்வுகளைச் சரிபார்க்கவும்.",
    budgetOver: "பட்ஜெட்டை மீறியது. பின்னர் வாங்கக்கூடிய பொருட்களை மாற்றவும் அல்லது மலிவான கடைகளை ஒப்பிடவும்.",
    statTotal: "மொத்த செலவு",
    statRemaining: "மீதம்",
    statBought: "வாங்கியது",
    statEssentials: "அவசியம்",
    insightBudget: "பட்ஜெட்",
    insightNutrition: "சமநிலை",
    insightCompare: "ஒப்பீடு",
    nutritionGood: "அடிப்படை உணவு, புரதம், காய்கறி அனைத்தும் உள்ளன.",
    nutritionProtein: "ஒரு மலிவு புரதப் பொருளைச் சேர்க்கவும் அல்லது ஒப்பிடவும்.",
    nutritionVeg: "காய்கறி அல்லது பழப் பொருளை ஒன்று சேர்க்கவும் அல்லது ஒப்பிடவும்.",
    nutritionStaple: "அரிசி, மாவு அல்லது ரொட்டி போன்ற அடிப்படை உணவைச் சேர்க்கவும்.",
    compareReady: "சேமித்த {count} கடை விலைகள் இந்த கூடைக்கு உதவும்.",
    compareEmpty: "சந்தை, கூட்டுறவு, grocery செல்லும் போது விலைகளைச் சேர்க்கவும்.",
    insightBestShop: "சிறந்த கடை",
    bestShopNone: "மிகவும் சேமிக்கும் கடையை கண்டுபிடிக்க குறைந்தது இரண்டு கடைகளுக்கு விலை சேர்க்கவும்.",
    bestShopResult: "{shop} கடை {count} பொருட்களை {total}க்கு வழங்கும்",
    delete: "நீக்கு",
    bought: "வாங்கியது",
    notBought: "வாங்கவில்லை",
  },
};

const districts = [
  "Ampara",
  "Anuradhapura",
  "Badulla",
  "Batticaloa",
  "Colombo",
  "Galle",
  "Gampaha",
  "Hambantota",
  "Jaffna",
  "Kalutara",
  "Kandy",
  "Kegalle",
  "Kilinochchi",
  "Kurunegala",
  "Mannar",
  "Matale",
  "Matara",
  "Monaragala",
  "Mullaitivu",
  "Nuwara Eliya",
  "Polonnaruwa",
  "Puttalam",
  "Ratnapura",
  "Trincomalee",
  "Vavuniya",
];

const categoryLabels = {
  staple: { en: "Staple", si: "මූලික ආහාර", ta: "அடிப்படை உணவு" },
  protein: { en: "Protein", si: "ප්‍රෝටීන්", ta: "புரதம்" },
  vegetables: { en: "Vegetables", si: "එළවළු", ta: "காய்கறி" },
  fruit: { en: "Fruit", si: "පලතුරු", ta: "பழம்" },
  household: { en: "Household", si: "නිවසේ භාණ්ඩ", ta: "வீட்டு பொருட்கள்" },
  medicine: { en: "Health", si: "සෞඛ්‍ය", ta: "சுகாதாரம்" },
  other: { en: "Other", si: "වෙනත්", ta: "மற்றவை" },
};

const defaultItems = [
  { name: "Rice", category: "staple", unit: "kg", qty: 5, price: 0, shop: "", priority: "essential" },
  { name: "Dhal", category: "protein", unit: "kg", qty: 1, price: 0, shop: "", priority: "essential" },
  { name: "Eggs", category: "protein", unit: "unit", qty: 10, price: 0, shop: "", priority: "normal" },
  { name: "Coconut", category: "staple", unit: "unit", qty: 4, price: 0, shop: "", priority: "normal" },
  { name: "Leafy greens", category: "vegetables", unit: "pack", qty: 2, price: 0, shop: "", priority: "essential" },
  { name: "Soap", category: "household", unit: "unit", qty: 2, price: 0, shop: "", priority: "normal" },
].map((item) => ({ ...item, id: crypto.randomUUID(), bought: false }));

const initialState = {
  language: "en",
  area: "",
  district: "Colombo",
  people: 4,
  budget: 8000,
  basket: defaultItems,
  priceBook: [],
};

let state = loadState();
let activeTab = "basket";

const els = {
  languageSelect: document.querySelector("#languageSelect"),
  areaInput: document.querySelector("#areaInput"),
  districtSelect: document.querySelector("#districtSelect"),
  peopleInput: document.querySelector("#peopleInput"),
  budgetInput: document.querySelector("#budgetInput"),
  budgetUsedLabel: document.querySelector("#budgetUsedLabel"),
  budgetBar: document.querySelector("#budgetBar"),
  budgetMessage: document.querySelector("#budgetMessage"),
  quickStats: document.querySelector("#quickStats"),
  categoryInput: document.querySelector("#categoryInput"),
  itemSuggestions: document.querySelector("#itemSuggestions"),
  basketForm: document.querySelector("#basketForm"),
  itemNameInput: document.querySelector("#itemNameInput"),
  quantityInput: document.querySelector("#quantityInput"),
  unitInput: document.querySelector("#unitInput"),
  priceInput: document.querySelector("#priceInput"),
  shopInput: document.querySelector("#shopInput"),
  priorityInput: document.querySelector("#priorityInput"),
  basketList: document.querySelector("#basketList"),
  priceForm: document.querySelector("#priceForm"),
  priceItemInput: document.querySelector("#priceItemInput"),
  priceShopInput: document.querySelector("#priceShopInput"),
  priceUnitInput: document.querySelector("#priceUnitInput"),
  priceBookValueInput: document.querySelector("#priceBookValueInput"),
  bestPriceList: document.querySelector("#bestPriceList"),
  priceEntryList: document.querySelector("#priceEntryList"),
  insightGrid: document.querySelector("#insightGrid"),
  routeList: document.querySelector("#routeList"),
  copyStatus: document.querySelector("#copyStatus"),
  printDate: document.querySelector("#printDate"),
  printSummary: document.querySelector("#printSummary"),
};

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!saved) return structuredClone(initialState);
    return {
      ...structuredClone(initialState),
      ...saved,
      basket: Array.isArray(saved.basket) ? saved.basket : structuredClone(defaultItems),
      priceBook: Array.isArray(saved.priceBook) ? saved.priceBook : [],
    };
  } catch {
    return structuredClone(initialState);
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function todayIso() {
  return new Date().toISOString().slice(0, 10);
}

function t(key) {
  return translations[state.language]?.[key] || translations.en[key] || key;
}

function localText(value) {
  return value?.[state.language] || value?.en || "";
}

function money(value) {
  return new Intl.NumberFormat("en-LK", {
    style: "currency",
    currency: "LKR",
    maximumFractionDigits: 0,
  }).format(Math.round(value || 0));
}

function template(text, params = {}) {
  return Object.entries(params).reduce(
    (result, [key, value]) => result.replace(`{${key}}`, value),
    text,
  );
}

function init() {
  populateStaticOptions();
  bindEvents();
  syncInputs();
  renderAll();

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./service-worker.js").catch(() => {});
  }
}

function populateStaticOptions() {
  els.districtSelect.innerHTML = districts.map((district) => `<option value="${district}">${district}</option>`).join("");
  renderCategoryOptions();
}

function renderCategoryOptions() {
  els.categoryInput.innerHTML = Object.entries(categoryLabels)
    .map(([key, label]) => `<option value="${key}">${localText(label)}</option>`)
    .join("");
}

function bindEvents() {
  els.languageSelect.addEventListener("change", (event) => {
    state.language = event.target.value;
    document.documentElement.lang = state.language;
    translateStaticText();
    renderCategoryOptions();
    renderAll();
    saveState();
  });

  [
    ["areaInput", "area", stringValue],
    ["districtSelect", "district", stringValue],
    ["peopleInput", "people", numberValue],
    ["budgetInput", "budget", numberValue],
  ].forEach(([element, key, parser]) => {
    els[element].addEventListener("input", (event) => {
      state[key] = parser(event.target.value);
      renderAll();
      saveState();
    });
  });

  document.querySelectorAll(".tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      activeTab = tab.dataset.tab;
      renderTabs();
    });
  });

  document.querySelector("#printButton").addEventListener("click", () => window.print());
  document.querySelector("#resetBasketButton").addEventListener("click", () => {
    state.basket = structuredClone(defaultItems).map((item) => ({ ...item, id: crypto.randomUUID() }));
    renderAll();
    saveState();
  });

  document.querySelector("#markAllButton").addEventListener("click", () => {
    state.basket = state.basket.map((item) => ({ ...item, bought: true }));
    renderAll();
    saveState();
  });

  els.basketForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const item = {
      id: crypto.randomUUID(),
      name: els.itemNameInput.value.trim(),
      category: els.categoryInput.value,
      qty: numberValue(els.quantityInput.value),
      unit: els.unitInput.value,
      price: numberValue(els.priceInput.value),
      shop: els.shopInput.value.trim(),
      priority: els.priorityInput.value,
      bought: false,
    };
    if (!item.name) return;
    state.basket.push(item);
    if (item.price > 0) savePriceFromItem(item);
    els.basketForm.reset();
    els.quantityInput.value = "1";
    els.unitInput.value = "kg";
    renderAll();
    saveState();
  });

  els.priceForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const entry = {
      id: crypto.randomUUID(),
      item: els.priceItemInput.value.trim(),
      shop: els.priceShopInput.value.trim(),
      unit: els.priceUnitInput.value,
      price: numberValue(els.priceBookValueInput.value),
      date: todayIso(),
    };
    if (!entry.item || !entry.shop) return;
    state.priceBook.unshift(entry);
    els.priceForm.reset();
    renderAll();
    saveState();
  });

  document.querySelector("#copySummaryButton").addEventListener("click", copySummary);
  document.querySelector("#exportButton").addEventListener("click", downloadCsv);
}

function stringValue(value) {
  return value.trimStart();
}

function numberValue(value) {
  const parsed = Number.parseFloat(value);
  return Number.isFinite(parsed) ? parsed : 0;
}

function syncInputs() {
  els.languageSelect.value = state.language;
  document.documentElement.lang = state.language;
  els.areaInput.value = state.area;
  els.districtSelect.value = state.district;
  els.peopleInput.value = state.people;
  els.budgetInput.value = state.budget;
  els.quantityInput.value = "1";
  translateStaticText();
}

function translateStaticText() {
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });
}

function renderAll() {
  renderTabs();
  renderSuggestions();
  renderBudget();
  renderBasket();
  renderPrices();
  renderInsights();
  renderRoute();
  renderPrintCard();
}

function renderTabs() {
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.tab === activeTab);
  });
  document.querySelectorAll(".tab-view").forEach((panel) => {
    panel.classList.toggle("active", panel.dataset.panel === activeTab);
  });
}

function basketTotal() {
  return state.basket.reduce((sum, item) => sum + item.qty * item.price, 0);
}

function renderBudget() {
  const total = basketTotal();
  const budget = Math.max(state.budget, 0);
  const used = budget > 0 ? Math.round((total / budget) * 100) : 0;
  const remaining = budget - total;
  const bought = state.basket.filter((item) => item.bought).length;
  const essentials = state.basket
    .filter((item) => item.priority === "essential")
    .reduce((sum, item) => sum + item.qty * item.price, 0);

  els.budgetUsedLabel.textContent = `${used}%`;
  els.budgetBar.style.width = `${Math.min(used, 100)}%`;
  els.budgetBar.style.background = used > 100 ? "var(--red)" : used > 85 ? "var(--amber)" : "var(--green)";
  els.budgetMessage.textContent = used > 100 ? t("budgetOver") : used > 85 ? t("budgetTight") : t("budgetOk");

  els.quickStats.innerHTML = [
    [t("statTotal"), money(total)],
    [t("statRemaining"), money(remaining)],
    [t("statBought"), `${bought}/${state.basket.length}`],
    [t("statEssentials"), money(essentials)],
  ]
    .map(([label, value]) => `<div><dt>${label}</dt><dd>${value}</dd></div>`)
    .join("");
}

function renderSuggestions() {
  const names = new Set([
    ...state.basket.map((item) => item.name),
    ...state.priceBook.map((entry) => entry.item),
    "Rice",
    "Dhal",
    "Eggs",
    "Coconut",
    "Milk powder",
    "Bread",
    "Green gram",
    "Sprats",
    "Leafy greens",
    "Pumpkin",
    "Banana",
    "Soap",
  ]);
  els.itemSuggestions.innerHTML = [...names]
    .filter(Boolean)
    .sort((a, b) => a.localeCompare(b))
    .map((name) => `<option value="${escapeHtml(name)}"></option>`)
    .join("");
}

function renderBasket() {
  if (!state.basket.length) {
    els.basketList.innerHTML = `<p class="muted">${t("noItems")}</p>`;
    return;
  }

  els.basketList.innerHTML = state.basket
    .map((item) => {
      const total = item.qty * item.price;
      return `
        <article class="basket-item">
          <input type="checkbox" data-bought="${item.id}" ${item.bought ? "checked" : ""} title="${t("bought")}" />
          <div>
            <h3>${escapeHtml(item.name)}</h3>
            <p>${item.qty} ${escapeHtml(item.unit)} · ${escapeHtml(item.shop || t("noShop"))}</p>
          </div>
          <span class="pill ${item.priority}">${priorityLabel(item.priority)}</span>
          <strong class="price-total">${money(total)}</strong>
          <button class="mini-button danger-button" type="button" data-delete-item="${item.id}" title="${t("delete")}">×</button>
        </article>
      `;
    })
    .join("");

  els.basketList.querySelectorAll("[data-bought]").forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      const item = state.basket.find((candidate) => candidate.id === checkbox.dataset.bought);
      if (item) item.bought = checkbox.checked;
      renderAll();
      saveState();
    });
  });

  els.basketList.querySelectorAll("[data-delete-item]").forEach((button) => {
    button.addEventListener("click", () => {
      state.basket = state.basket.filter((item) => item.id !== button.dataset.deleteItem);
      renderAll();
      saveState();
    });
  });
}

function priorityLabel(priority) {
  const key = {
    essential: "priorityEssential",
    normal: "priorityNormal",
    delay: "priorityDelay",
  }[priority];
  return t(key || "priorityNormal");
}

function savePriceFromItem(item) {
  state.priceBook.unshift({
    id: crypto.randomUUID(),
    item: item.name,
    shop: item.shop || t("noShop"),
    unit: item.unit,
    price: item.price,
    date: todayIso(),
  });
}

function renderPrices() {
  renderBestPrices();
  renderPriceEntries();
}

function renderBestPrices() {
  const best = new Map();
  state.priceBook.forEach((entry) => {
    const key = `${entry.item.toLowerCase()}__${entry.unit}`;
    const current = best.get(key);
    if (!current || entry.price < current.price) best.set(key, entry);
  });

  if (!best.size) {
    els.bestPriceList.innerHTML = `<p class="muted">${t("noPrices")}</p>`;
    return;
  }

  els.bestPriceList.innerHTML = [...best.values()]
    .slice(0, 12)
    .map(
      (entry) => `
        <article class="best-price">
          <div>
            <h3>${escapeHtml(entry.item)}</h3>
            <p>${escapeHtml(entry.shop)} · ${escapeHtml(entry.unit)}</p>
          </div>
          <strong>${money(entry.price)}</strong>
        </article>
      `,
    )
    .join("");
}

function renderPriceEntries() {
  if (!state.priceBook.length) {
    els.priceEntryList.innerHTML = `<p class="muted">${t("noPrices")}</p>`;
    return;
  }

  els.priceEntryList.innerHTML = state.priceBook
    .slice(0, 12)
    .map(
      (entry) => `
        <article class="price-entry">
          <div>
            <h3>${escapeHtml(entry.item)}</h3>
            <p>${escapeHtml(entry.shop)} · ${escapeHtml(entry.date)} · ${escapeHtml(entry.unit)}</p>
          </div>
          <button class="mini-button danger-button" type="button" data-delete-price="${entry.id}" title="${t(
            "delete",
          )}">×</button>
        </article>
      `,
    )
    .join("");

  els.priceEntryList.querySelectorAll("[data-delete-price]").forEach((button) => {
    button.addEventListener("click", () => {
      state.priceBook = state.priceBook.filter((entry) => entry.id !== button.dataset.deletePrice);
      renderAll();
      saveState();
    });
  });
}

function bestShopAnalysis() {
  if (!state.basket.length || !state.priceBook.length) return null;

  const shopStats = new Map();

  state.basket.forEach((basketItem) => {
    const byShop = new Map();
    state.priceBook
      .filter((e) => e.item.toLowerCase() === basketItem.name.toLowerCase() && e.unit === basketItem.unit)
      .forEach((e) => {
        if (!byShop.has(e.shop) || e.price < byShop.get(e.shop)) byShop.set(e.shop, e.price);
      });

    byShop.forEach((price, shop) => {
      if (!shopStats.has(shop)) shopStats.set(shop, { total: 0, count: 0 });
      const stats = shopStats.get(shop);
      stats.total += basketItem.qty * price;
      stats.count += 1;
    });
  });

  if (shopStats.size < 2) return null;

  const [bestShop, stats] = [...shopStats.entries()].sort(([, a], [, b]) =>
    b.count !== a.count ? b.count - a.count : a.total - b.total,
  )[0];

  return { shop: bestShop, count: stats.count, total: stats.total };
}

function renderInsights() {
  const total = basketTotal();
  const remaining = state.budget - total;
  const categories = new Set(state.basket.map((item) => item.category));
  const nutritionText = !categories.has("staple")
    ? t("nutritionStaple")
    : !categories.has("protein")
      ? t("nutritionProtein")
      : !categories.has("vegetables") && !categories.has("fruit")
        ? t("nutritionVeg")
        : t("nutritionGood");
  const compareText = state.priceBook.length
    ? template(t("compareReady"), { count: state.priceBook.length })
    : t("compareEmpty");

  const best = bestShopAnalysis();
  const bestShopText = best
    ? template(t("bestShopResult"), { shop: best.shop, count: best.count, total: money(best.total) })
    : t("bestShopNone");

  const cards = [
    {
      title: t("insightBudget"),
      value: money(remaining),
      text: remaining >= 0 ? t("budgetOk") : t("budgetOver"),
    },
    {
      title: t("insightNutrition"),
      value: `${categories.size}/7`,
      text: nutritionText,
    },
    {
      title: t("insightCompare"),
      value: state.priceBook.length,
      text: compareText,
    },
    {
      title: t("insightBestShop"),
      value: best ? escapeHtml(best.shop) : "—",
      text: bestShopText,
    },
  ];

  els.insightGrid.innerHTML = cards
    .map(
      (card) => `
        <article class="insight">
          <p class="eyebrow">${card.title}</p>
          <strong>${card.value}</strong>
          <p>${escapeHtml(card.text)}</p>
        </article>
      `,
    )
    .join("");
}

function renderRoute() {
  if (!state.basket.length) {
    els.routeList.innerHTML = `<p class="muted">${t("noItems")}</p>`;
    return;
  }

  const groups = state.basket.reduce((map, item) => {
    const shop = item.shop || t("noShop");
    if (!map.has(shop)) map.set(shop, []);
    map.get(shop).push(item);
    return map;
  }, new Map());

  els.routeList.innerHTML = [...groups.entries()]
    .map(([shop, items]) => {
      const total = items.reduce((sum, item) => sum + item.qty * item.price, 0);
      const list = items
        .map(
          (item) =>
            `<li>${escapeHtml(item.name)} · ${item.qty} ${escapeHtml(item.unit)} · ${money(
              item.qty * item.price,
            )}</li>`,
        )
        .join("");
      return `
        <article class="route-shop">
          <div class="inline-heading">
            <h3>${escapeHtml(shop)}</h3>
            <strong>${money(total)}</strong>
          </div>
          <ul>${list}</ul>
        </article>
      `;
    })
    .join("");
}

function renderPrintCard() {
  const area = state.area || t("noArea");
  const total = basketTotal();
  const items = state.basket
    .map(
      (item) =>
        `<li>${escapeHtml(item.name)}: ${item.qty} ${escapeHtml(item.unit)} · ${money(
          item.qty * item.price,
        )} · ${item.bought ? t("bought") : t("notBought")}</li>`,
    )
    .join("");

  els.printDate.textContent = new Intl.DateTimeFormat(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(new Date());

  els.printSummary.innerHTML = `
    <p><strong>${escapeHtml(area)}, ${escapeHtml(state.district)}</strong></p>
    <p>${t("people")}: ${state.people} · ${t("budget")}: ${money(state.budget)} · ${t(
      "statTotal",
    )}: ${money(total)}</p>
    <ul>${items || `<li>${t("noItems")}</li>`}</ul>
  `;
}

function summaryText() {
  const area = state.area || t("noArea");
  const lines = [
    `${t("appName")} - ${area}, ${state.district}`,
    `${t("people")}: ${state.people}`,
    `${t("budget")}: ${money(state.budget)}`,
    `${t("statTotal")}: ${money(basketTotal())}`,
    "",
    ...state.basket.map(
      (item) =>
        `${item.bought ? "[x]" : "[ ]"} ${item.name} - ${item.qty} ${item.unit} - ${money(
          item.qty * item.price,
        )} - ${item.shop || t("noShop")}`,
    ),
  ];
  return lines.join("\n");
}

async function copySummary() {
  const text = summaryText();
  try {
    await navigator.clipboard.writeText(text);
    els.copyStatus.textContent = t("copied");
  } catch {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    els.copyStatus.textContent = t("copied");
  }
}

function downloadCsv() {
  const header = ["item", "category", "quantity", "unit", "price", "shop", "priority", "bought"];
  const rows = state.basket.map((item) =>
    [
      item.name,
      item.category,
      item.qty,
      item.unit,
      item.price,
      item.shop,
      item.priority,
      item.bought ? "yes" : "no",
    ]
      .map(csvCell)
      .join(","),
  );
  const csv = [header.join(","), ...rows].join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `lanka-basket-${todayIso()}.csv`;
  link.click();
  URL.revokeObjectURL(url);
}

function csvCell(value) {
  return `"${String(value ?? "").replaceAll('"', '""')}"`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

init();
