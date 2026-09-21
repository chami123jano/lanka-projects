const STORAGE_KEY = "clarity-lens-state-v1";

const defaultState = {
  text: "Clear interfaces help more people finish the task. Test the words, colors, and touch targets before the design reaches users.",
  foreground: "#111827",
  background: "#fef3c7",
  fontSize: 20,
  fontWeight: 600,
  targetWidth: 156,
  targetHeight: 48,
  simulation: "normal",
  history: [],
};

let state = loadState();

const els = {
  sampleText: document.querySelector("#sampleText"),
  fgColor: document.querySelector("#fgColor"),
  fgHex: document.querySelector("#fgHex"),
  bgColor: document.querySelector("#bgColor"),
  bgHex: document.querySelector("#bgHex"),
  fontSize: document.querySelector("#fontSize"),
  fontWeight: document.querySelector("#fontWeight"),
  targetWidth: document.querySelector("#targetWidth"),
  targetHeight: document.querySelector("#targetHeight"),
  simMode: document.querySelector("#simMode"),
  previewCard: document.querySelector("#previewCard"),
  previewShell: document.querySelector(".preview-shell"),
  previewText: document.querySelector("#previewText"),
  previewButton: document.querySelector("#previewButton"),
  statusBadge: document.querySelector("#statusBadge"),
  ratioLabel: document.querySelector("#ratioLabel"),
  ratioBar: document.querySelector("#ratioBar"),
  scoreValue: document.querySelector("#scoreValue"),
  scoreLabel: document.querySelector("#scoreLabel"),
  aaLabel: document.querySelector("#aaLabel"),
  aaaLabel: document.querySelector("#aaaLabel"),
  readabilityLabel: document.querySelector("#readabilityLabel"),
  targetLabel: document.querySelector("#targetLabel"),
  checklist: document.querySelector("#checklist"),
  historyList: document.querySelector("#historyList"),
};

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!saved) return structuredClone(defaultState);
    return {
      ...structuredClone(defaultState),
      ...saved,
      history: Array.isArray(saved.history) ? saved.history : [],
    };
  } catch {
    return structuredClone(defaultState);
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function init() {
  syncInputs();
  bindEvents();
  render();

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./service-worker.js").catch(() => {});
  }
}

function syncInputs() {
  els.sampleText.value = state.text;
  els.fgColor.value = state.foreground;
  els.fgHex.value = state.foreground;
  els.bgColor.value = state.background;
  els.bgHex.value = state.background;
  els.fontSize.value = state.fontSize;
  els.fontWeight.value = state.fontWeight;
  els.targetWidth.value = state.targetWidth;
  els.targetHeight.value = state.targetHeight;
  els.simMode.value = state.simulation;
}

function bindEvents() {
  [
    ["sampleText", "text", stringValue],
    ["fontSize", "fontSize", numberValue],
    ["fontWeight", "fontWeight", numberValue],
    ["targetWidth", "targetWidth", numberValue],
    ["targetHeight", "targetHeight", numberValue],
  ].forEach(([element, key, parser]) => {
    els[element].addEventListener("input", (event) => {
      state[key] = parser(event.target.value);
      renderAndSave();
    });
  });

  bindColorPair("fgColor", "fgHex", "foreground");
  bindColorPair("bgColor", "bgHex", "background");

  els.simMode.addEventListener("change", (event) => {
    state.simulation = event.target.value;
    renderAndSave();
  });

  document.querySelector("#swapButton").addEventListener("click", () => {
    [state.foreground, state.background] = [state.background, state.foreground];
    syncInputs();
    renderAndSave();
  });

  document.querySelector("#autoFixButton").addEventListener("click", () => {
    const blackRatio = contrastRatio("#111827", state.background);
    const whiteRatio = contrastRatio("#ffffff", state.background);
    state.foreground = blackRatio >= whiteRatio ? "#111827" : "#ffffff";
    syncInputs();
    renderAndSave();
  });

  document.querySelector("#resetButton").addEventListener("click", () => {
    state = structuredClone(defaultState);
    syncInputs();
    renderAndSave();
  });

  document.querySelector("#saveButton").addEventListener("click", saveCheck);
  document.querySelector("#clearHistoryButton").addEventListener("click", () => {
    state.history = [];
    renderAndSave();
  });
  document.querySelector("#copyButton").addEventListener("click", copyReport);
}

function bindColorPair(colorId, hexId, key) {
  els[colorId].addEventListener("input", (event) => {
    state[key] = event.target.value;
    els[hexId].value = state[key];
    renderAndSave();
  });

  els[hexId].addEventListener("input", (event) => {
    const normalized = normalizeHex(event.target.value);
    if (!normalized) return;
    state[key] = normalized;
    els[colorId].value = normalized;
    renderAndSave();
  });
}

function stringValue(value) {
  return value;
}

function numberValue(value) {
  const parsed = Number.parseInt(value, 10);
  return Number.isFinite(parsed) ? parsed : 0;
}

function renderAndSave() {
  render();
  saveState();
}

function render() {
  const analysis = analyze();

  els.previewCard.style.color = state.foreground;
  els.previewCard.style.background = state.background;
  els.previewCard.style.fontSize = `${state.fontSize}px`;
  els.previewCard.style.fontWeight = String(state.fontWeight);
  els.previewText.textContent = state.text;
  els.previewButton.style.width = `${state.targetWidth}px`;
  els.previewButton.style.height = `${state.targetHeight}px`;

  const simClasses = ["sim-deuteranopia", "sim-protanopia", "sim-tritanopia", "sim-achromatopsia"];
  els.previewShell.classList.remove(...simClasses);
  if (state.simulation !== "normal") {
    els.previewShell.classList.add(`sim-${state.simulation}`);
  }

  els.ratioLabel.textContent = `${analysis.ratio.toFixed(2)}:1`;
  els.ratioBar.style.width = `${Math.min((analysis.ratio / 21) * 100, 100)}%`;
  els.ratioBar.style.background = analysis.aaPass ? "var(--green)" : analysis.largeAaPass ? "var(--amber)" : "var(--rose)";

  els.statusBadge.textContent = analysis.statusLabel;
  els.statusBadge.className = `status-badge ${analysis.statusTone}`;
  els.scoreValue.textContent = analysis.score;
  els.scoreLabel.textContent = analysis.scoreLabel;
  els.aaLabel.textContent = analysis.aaPass ? "Pass" : analysis.largeAaPass ? "Large" : "Fail";
  els.aaaLabel.textContent = analysis.aaaPass ? "Pass" : analysis.largeAaaPass ? "Large" : "Fail";
  els.readabilityLabel.textContent = analysis.readingEase;
  els.targetLabel.textContent = analysis.targetPass ? "Pass" : "Fail";

  renderChecklist(analysis);
  renderHistory();
}

function analyze() {
  const ratio = contrastRatio(state.foreground, state.background);
  const largeText = state.fontSize >= 24 || (state.fontSize >= 19 && state.fontWeight >= 700);
  const aaPass = ratio >= 4.5;
  const aaaPass = ratio >= 7;
  const largeAaPass = largeText && ratio >= 3;
  const largeAaaPass = largeText && ratio >= 4.5;
  const targetPass = state.targetWidth >= 44 && state.targetHeight >= 44;
  const readability = readingStats(state.text);
  const readingEase = Math.max(0, Math.min(100, Math.round(readability.ease)));
  const sentenceOk = readability.avgSentenceLength <= 20;
  const longWordOk = readability.longWordRate <= 18;
  const score = Math.round(
    [
      aaPass ? 25 : largeAaPass ? 16 : ratio >= 3 ? 10 : 0,
      aaaPass ? 15 : largeAaaPass ? 10 : 0,
      targetPass ? 20 : 0,
      readingEase >= 60 ? 20 : readingEase >= 45 ? 12 : 5,
      sentenceOk ? 10 : 4,
      longWordOk ? 10 : 4,
    ].reduce((sum, value) => sum + value, 0),
  );

  const statusTone = score >= 82 ? "pass" : score >= 58 ? "warn" : "fail";
  const statusLabel = score >= 82 ? "Strong" : score >= 58 ? "Review" : "Needs work";

  return {
    ratio,
    largeText,
    aaPass,
    aaaPass,
    largeAaPass,
    largeAaaPass,
    targetPass,
    readingEase,
    readability,
    sentenceOk,
    longWordOk,
    score,
    scoreLabel: statusLabel,
    statusLabel,
    statusTone,
  };
}

function renderChecklist(analysis) {
  const items = [
    {
      title: "Normal text contrast",
      text: analysis.aaPass ? "Meets AA for regular text." : "Aim for 4.5:1 or higher.",
      tone: analysis.aaPass ? "pass" : analysis.largeAaPass ? "warn" : "fail",
    },
    {
      title: "Large text contrast",
      text: analysis.largeAaPass || analysis.aaPass ? "Large text is supported." : "Large text needs at least 3:1.",
      tone: analysis.largeAaPass || analysis.aaPass ? "pass" : "fail",
    },
    {
      title: "Touch target",
      text: analysis.targetPass ? "Target size is at least 44 by 44 px." : "Increase the button size to at least 44 by 44 px.",
      tone: analysis.targetPass ? "pass" : "fail",
    },
    {
      title: "Sentence length",
      text: `${analysis.readability.avgSentenceLength} words per sentence on average.`,
      tone: analysis.sentenceOk ? "pass" : "warn",
    },
    {
      title: "Word complexity",
      text: `${analysis.readability.longWordRate}% of words are long.`,
      tone: analysis.longWordOk ? "pass" : "warn",
    },
  ];

  els.checklist.innerHTML = items
    .map(
      (item) => `
        <article class="check-item ${item.tone}">
          <span class="check-dot">${item.tone === "pass" ? "OK" : "!"}</span>
          <div>
            <h3>${item.title}</h3>
            <p>${item.text}</p>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderHistory() {
  if (!state.history.length) {
    els.historyList.innerHTML = `<p class="muted">No saved checks yet.</p>`;
    return;
  }

  els.historyList.innerHTML = state.history
    .map(
      (item, index) => `
        <article class="history-item">
          <div>
            <strong>${item.score}/100 · ${item.ratio}</strong>
            <p>${escapeHtml(item.foreground)} on ${escapeHtml(item.background)} · ${escapeHtml(item.date)}</p>
          </div>
          <button class="mini-button" type="button" data-load-history="${index}">Load</button>
        </article>
      `,
    )
    .join("");

  els.historyList.querySelectorAll("[data-load-history]").forEach((button) => {
    button.addEventListener("click", () => {
      const item = state.history[Number(button.dataset.loadHistory)];
      if (!item) return;
      state = {
        ...state,
        text: item.text,
        foreground: item.foreground,
        background: item.background,
        fontSize: item.fontSize,
        fontWeight: item.fontWeight,
        targetWidth: item.targetWidth,
        targetHeight: item.targetHeight,
      };
      syncInputs();
      renderAndSave();
    });
  });
}

function saveCheck() {
  const analysis = analyze();
  state.history = [
    {
      text: state.text,
      foreground: state.foreground,
      background: state.background,
      fontSize: state.fontSize,
      fontWeight: state.fontWeight,
      targetWidth: state.targetWidth,
      targetHeight: state.targetHeight,
      ratio: `${analysis.ratio.toFixed(2)}:1`,
      score: analysis.score,
      date: new Intl.DateTimeFormat(undefined, {
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }).format(new Date()),
    },
    ...state.history,
  ].slice(0, 6);
  renderAndSave();
}

async function copyReport() {
  const report = reportText();
  try {
    await navigator.clipboard.writeText(report);
  } catch {
    const textarea = document.createElement("textarea");
    textarea.value = report;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
  }
}

function reportText() {
  const analysis = analyze();
  return [
    "Clarity Lens Report",
    `Score: ${analysis.score}/100`,
    `Contrast: ${analysis.ratio.toFixed(2)}:1`,
    `WCAG AA: ${analysis.aaPass ? "Pass" : analysis.largeAaPass ? "Large text only" : "Fail"}`,
    `WCAG AAA: ${analysis.aaaPass ? "Pass" : analysis.largeAaaPass ? "Large text only" : "Fail"}`,
    `Reading ease: ${analysis.readingEase}`,
    `Touch target: ${state.targetWidth}x${state.targetHeight}px`,
    `Text color: ${state.foreground}`,
    `Background: ${state.background}`,
  ].join("\n");
}

function contrastRatio(foreground, background) {
  const fg = relativeLuminance(hexToRgb(foreground));
  const bg = relativeLuminance(hexToRgb(background));
  const light = Math.max(fg, bg);
  const dark = Math.min(fg, bg);
  return (light + 0.05) / (dark + 0.05);
}

function hexToRgb(hex) {
  const normalized = normalizeHex(hex) || "#000000";
  const raw = normalized.slice(1);
  return {
    r: Number.parseInt(raw.slice(0, 2), 16),
    g: Number.parseInt(raw.slice(2, 4), 16),
    b: Number.parseInt(raw.slice(4, 6), 16),
  };
}

function normalizeHex(value) {
  const trimmed = String(value).trim();
  if (/^#[0-9a-fA-F]{6}$/.test(trimmed)) return trimmed.toLowerCase();
  if (/^#[0-9a-fA-F]{3}$/.test(trimmed)) {
    return `#${trimmed
      .slice(1)
      .split("")
      .map((char) => char + char)
      .join("")}`.toLowerCase();
  }
  return null;
}

function relativeLuminance({ r, g, b }) {
  const [red, green, blue] = [r, g, b].map((channel) => {
    const value = channel / 255;
    return value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * red + 0.7152 * green + 0.0722 * blue;
}

function readingStats(text) {
  const words = text.match(/[A-Za-z0-9']+/g) || [];
  const sentences = text.split(/[.!?]+/).filter((sentence) => sentence.trim().length > 0);
  const syllables = words.reduce((sum, word) => sum + countSyllables(word), 0);
  const longWords = words.filter((word) => word.length >= 9).length;
  const wordCount = Math.max(words.length, 1);
  const sentenceCount = Math.max(sentences.length, 1);
  const ease = 206.835 - 1.015 * (wordCount / sentenceCount) - 84.6 * (syllables / wordCount);

  return {
    words: words.length,
    sentences: sentences.length,
    ease,
    avgSentenceLength: Math.round(wordCount / sentenceCount),
    longWordRate: Math.round((longWords / wordCount) * 100),
  };
}

function countSyllables(word) {
  const clean = word.toLowerCase().replace(/[^a-z]/g, "");
  if (!clean) return 1;
  const groups = clean.match(/[aeiouy]+/g);
  let count = groups ? groups.length : 1;
  if (clean.endsWith("e") && count > 1) count -= 1;
  return Math.max(count, 1);
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
