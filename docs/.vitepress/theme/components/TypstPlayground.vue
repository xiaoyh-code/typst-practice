<script setup lang="ts">
import { ref, computed, watch, onMounted, onBeforeUnmount } from "vue";
import { withBase } from "vitepress";

/* ------------------------------------------------------------------ *
 *  typst.ts — pinned versions (loaded from jsDelivr at runtime only) *
 * ------------------------------------------------------------------ */
const TYPST_TS_VERSION = "0.7.0";
const CDN = "https://cdn.jsdelivr.net/npm";
// Use jsDelivr's +esm bundle endpoint: the raw dist/esm files contain bare
// module specifiers (e.g. '@myriaddreamin/typst.ts/contrib/global-renderer',
// 'typst', 'sync-request-curl') that browsers cannot resolve. +esm rewrites
// and bundles them into browser-loadable URLs.
const TYPST_ESM_URL = `${CDN}/@myriaddreamin/typst.ts@${TYPST_TS_VERSION}/+esm`;
const COMPILER_WASM_URL = `${CDN}/@myriaddreamin/typst-ts-web-compiler@${TYPST_TS_VERSION}/pkg/typst_ts_web_compiler_bg.wasm`;
const RENDERER_WASM_URL = `${CDN}/@myriaddreamin/typst-ts-renderer@${TYPST_TS_VERSION}/pkg/typst_ts_renderer_bg.wasm`;
// CJK font: typst.ts's default font assets are Latin-only, so Chinese text
// renders as tofu. Load Noto Sans TC as a single variable font (covers
// weights 100–900 in one ~10MB file) — Typst falls back to it for CJK glyphs.
const CJK_FONT_URLS = [
  "https://cdn.jsdelivr.net/gh/googlefonts/noto-cjk@main/Sans/Variable/OTF/Subset/NotoSansTC-VF.otf",
];

/* ------------------------------------------------------------------ *
 *  Practice flash cards (bilingual)                                   *
 * ------------------------------------------------------------------ */
interface FlashCard {
  topic: { zh: string; en: string };
  question: { zh: string; en: string };
  code: string;
}

const flashCards: FlashCard[] = [
  {
    topic: { zh: "快速入門", en: "Quick Start" },
    question: {
      zh: "建立一個有一級標題、粗體與斜體文字、以及無序清單的文件。",
      en: "Create a document with a level-1 heading, bold and italic text, and an unordered list.",
    },
    code: `#set text(size: 14pt)

= 我的第一個 Typst 文件

Hello, *Typst*! 這是一段 _斜體_ 文字，這是 *粗體*。

- 項目一
- 項目二
- 項目三
`,
  },
  {
    topic: { zh: "快速入門", en: "Quick Start" },
    question: {
      zh: "建立多層級標題（章、節），並加上一個編號清單。",
      en: "Create multi-level headings (chapter and section) plus a numbered list.",
    },
    code: `= 第一章
== 第一節

+ 第一步：安裝 Typst
+ 第二步：撰寫文件
+ 第三步：編譯預覽

== 第二節

完成！
`,
  },
  {
    topic: { zh: "頁面設置", en: "Page Setup" },
    question: {
      zh: "把頁面設為 A4，並自訂上下 2.5cm、左右 3cm 的邊界。",
      en: "Set the page to A4 with custom margins: 2.5cm top/bottom and 3cm left/right.",
    },
    code: `#set page(
  paper: "a4",
  margin: (top: 2.5cm, bottom: 2.5cm, left: 3cm, right: 3cm),
)
#set text(size: 12pt)

這個頁面使用 A4 紙張，邊界已自訂。

#lorem(60)
`,
  },
  {
    topic: { zh: "頁面設置", en: "Page Setup" },
    question: {
      zh: "為頁面加上靠右的頁首文字，以及「1 / 1」格式的置中頁碼。",
      en: "Add a right-aligned header and a centered page number in the form \"1 / 1\".",
    },
    code: `#set page(
  paper: "a4",
  header: align(right)[我的練習文件],
  footer: align(center)[#context counter(page).display("1 / 1", both: true)],
)

第一頁內容。

#pagebreak()

第二頁內容。
`,
  },
  {
    topic: { zh: "文字格式", en: "Text Formatting" },
    question: {
      zh: "做出一個品牌色（#239dad）的 18pt 粗體標題，以及斜體、底線、刪除線各一個。",
      en: "Make an 18pt bold heading in brand color #239dad, plus one italic, one underlined, and one struck-through text.",
    },
    code: `#set text(size: 14pt)

#text(fill: rgb("#239dad"), weight: "bold", size: 18pt)[品牌色標題]

#text(style: "italic")[斜體文字]、#underline[底線文字]、#strike[刪除線文字]
`,
  },
  {
    topic: { zh: "文字格式", en: "Text Formatting" },
    question: {
      zh: "把段落設為兩端對齊、行距 0.8em，並讓一行文字置中。",
      en: "Set paragraphs to justified with 0.8em leading, and center one line of text.",
    },
    code: `#set par(justify: true, leading: 0.8em)

#align(center)[== 置中的標題]

#lorem(50)
`,
  },
  {
    topic: { zh: "插入圖片", en: "Images" },
    question: {
      zh: "插入一張圖片（寬度 30%），並用 figure 加上圖說。",
      en: "Insert an image (30% width) and wrap it in a figure with a caption.",
    },
    code: `#figure(
  image("/assets/logo.svg", width: 30%),
  caption: [網站標誌 / Site Logo],
)
`,
  },
  {
    topic: { zh: "表格製作", en: "Tables" },
    question: {
      zh: "建立一個 3 欄的表格，第一列是粗體標題（姓名／科目／分數），加上兩列資料。",
      en: "Build a 3-column table with a bold header row (Name / Subject / Score) and two data rows.",
    },
    code: `#table(
  columns: 3,
  [*姓名*], [*科目*], [*分數*],
  [小明], [數學], [95],
  [小華], [物理], [88],
)
`,
  },
  {
    topic: { zh: "表格製作", en: "Tables" },
    question: {
      zh: "建立一個欄寬比例 1:2:1、標題列有底色、內容水平垂直置中的表格。",
      en: "Build a table with 1:2:1 column ratios, a shaded header row, and content centered horizontally and vertically.",
    },
    code: `#table(
  columns: (1fr, 2fr, 1fr),
  fill: (x, y) => if y == 0 { rgb("#239dad").lighten(70%) },
  align: center + horizon,
  table.header[*項目*][*說明*][*數量*],
  [A], [蘋果 Apple], [3],
  [B], [香蕉 Banana], [5],
  [C], [橘子 Orange], [2],
)
`,
  },
  {
    topic: { zh: "數學公式", en: "Math" },
    question: {
      zh: "寫出行內的質能方程式，以及置中區塊顯示的二次公式。",
      en: "Write the mass–energy equation inline, and the quadratic formula as a display block.",
    },
    code: `質能方程式：$E = m c^2$

二次公式（Quadratic Formula）：
$ x = (-b plus.minus sqrt(b^2 - 4 a c)) / (2 a) $
`,
  },
  {
    topic: { zh: "數學公式", en: "Math" },
    question: {
      zh: "排出一個定積分（含上下限）和一個帶求和上下限的級數公式。",
      en: "Typeset a definite integral (with bounds) and a summation with lower and upper limits.",
    },
    code: `$ f(x) = integral_0^1 x^2 dif x = 1 / 3 $

$ sum_(k = 1)^n k = (n (n + 1)) / 2 $
`,
  },
  {
    topic: { zh: "指令碼", en: "Scripting" },
    question: {
      zh: "定義一個平方函數，用 for 迴圈列出 1 到 5 的平方。",
      en: "Define a square function and use a for loop to list the squares of 1 to 5.",
    },
    code: `#let sq(x) = x * x

#for i in range(1, 6) [
  #i 的平方是 #sq(i) \\
]
`,
  },
];

/* ------------------------------------------------------------------ *
 *  Editor examples (mirror a subset of the flash cards)               *
 * ------------------------------------------------------------------ */
const examples = [
  {
    label: "Hello World（預設 / Default）",
    code: `#set text(size: 14pt)

= Hello, Typst!

歡迎來到 *Typst 練習場*！在左邊輸入代碼，右邊會即時顯示預覽。

Welcome! Type Typst code on the left and see the live preview on the right.

- 試著修改這段文字
- Try editing this text
`,
  },
  { label: "頁面設置 / Page Setup", code: flashCards[2].code },
  { label: "文字格式 / Text Formatting", code: flashCards[4].code },
  { label: "插入圖片 / Image", code: flashCards[6].code },
  { label: "表格 / Table", code: flashCards[8].code },
  { label: "數學公式 / Math", code: flashCards[9].code },
  { label: "指令碼 / Scripting", code: flashCards[11].code },
];

/* ------------------------------------------------------------------ *
 *  Playground state                                                   *
 * ------------------------------------------------------------------ */
type Status = "idle" | "loading-engine" | "compiling" | "success" | "error" | "engine-error";

interface Diagnostic {
  severity: string;
  message: string;
  line?: number;
  column?: number;
}

const code = ref(examples[0].code);
const selectedExample = ref(0);
const svgHtml = ref("");
const status = ref<Status>("idle");
const diagnostics = ref<Diagnostic[]>([]);
const rawError = ref("");
const showRawError = ref(false);

let $typst: any = null;
let engineReady = false;
let logoBytes: Uint8Array | null = null;
let debounceTimer: ReturnType<typeof setTimeout> | null = null;
let busy = false;
let queued: string | null = null;

function applyExample(i: number) {
  code.value = examples[i].code;
}

function parseDiagnostics(raw: string): Diagnostic[] {
  const out: Diagnostic[] = [];
  // typst.ts rejects with a Rust-debug-formatted list, e.g.
  // [SourceDiagnostic { severity: Error, span: Span(..), message: "unclosed delimiter", trace: [], hints: ["..."], .. }, ...]
  const sd = /SourceDiagnostic\s*\{[^}]*?severity:\s*(\w+)[^}]*?message:\s*"((?:[^"\\]|\\.)*)"[^}]*?hints:\s*\[([^\]]*)\]/gs;
  let m: RegExpExecArray | null;
  while ((m = sd.exec(raw)) !== null) {
    let message = m[2].replace(/\\"/g, '"').replace(/\\n/g, " ");
    const hints = (m[3].match(/"((?:[^"\\]|\\.)*)"/g) || []).map((h) =>
      h.slice(1, -1).replace(/\\"/g, '"'),
    );
    if (hints.length) message += "（提示 / Hint: " + hints.join("; ") + "）";
    out.push({ severity: m[1].toLowerCase(), message });
  }
  if (out.length > 0) return out;

  const lines = raw.split("\n");
  let pending: Diagnostic | null = null;
  for (const ln of lines) {
    const sev = ln.match(/^\s*(error|warning|hint):\s*(.*)$/i);
    if (sev) {
      pending = { severity: sev[1].toLowerCase(), message: sev[2] || ln.trim() };
      out.push(pending);
      continue;
    }
    const loc = ln.match(/(?:main\.typ|\/main\.typ):(\d+):(\d+)/);
    if (loc) {
      const line = parseInt(loc[1], 10) + 1; // typst spans are 0-based
      const column = parseInt(loc[2], 10) + 1;
      if (pending && pending.line === undefined) {
        pending.line = line;
        pending.column = column;
      } else if (!pending) {
        out.push({ severity: "error", message: "", line, column });
      }
      continue;
    }
  }
  if (out.length === 0 && raw.trim()) {
    out.push({ severity: "error", message: raw.trim().split("\n")[0] });
  }
  return out;
}

async function runCompile(source: string) {
  status.value = "compiling";
  try {
    if (logoBytes) {
      try {
        $typst.mapShadow("/assets/logo.svg", logoBytes);
      } catch {
        /* shadow mapping is best-effort */
      }
    }
    const svg: string = await $typst.svg({ mainContent: source });
    svgHtml.value = svg;
    diagnostics.value = [];
    rawError.value = "";
    status.value = "success";
  } catch (e: any) {
    const raw = String(e?.message ?? e ?? "Unknown error");
    rawError.value = raw;
    diagnostics.value = parseDiagnostics(raw);
    status.value = "error";
  }
}

async function scheduleCompile(source: string) {
  if (!engineReady) {
    queued = source;
    return;
  }
  if (busy) {
    queued = source;
    return;
  }
  busy = true;
  try {
    await runCompile(source);
    while (queued !== null) {
      const s = queued;
      queued = null;
      await runCompile(s);
    }
  } finally {
    busy = false;
  }
}

watch(code, (val) => {
  if (debounceTimer) clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => scheduleCompile(val), 400);
});

onMounted(async () => {
  status.value = "loading-engine";
  try {
    const mod = await import(/* @vite-ignore */ TYPST_ESM_URL);
    $typst = mod.$typst;
    try {
      $typst.setCompilerInitOptions({
        getModule: () => COMPILER_WASM_URL,
        // Load CJK font(s) into the compiler's font book before first build.
        beforeBuild: [mod.loadFonts(CJK_FONT_URLS)],
      });
      $typst.setRendererInitOptions({ getModule: () => RENDERER_WASM_URL });
    } catch {
      /* options already set (HMR / remount) — safe to ignore */
    }
    engineReady = true;
    // Warm up the engine with the current document.
    scheduleCompile(code.value);
    // Fetch the site logo so the image example/card works offline-of-typst.app.
    fetch(withBase("/logo.svg"))
      .then((r) => (r.ok ? r.arrayBuffer() : Promise.reject(new Error(String(r.status)))))
      .then((buf) => {
        logoBytes = new Uint8Array(buf);
      })
      .catch(() => {
        logoBytes = null;
      });
  } catch (e: any) {
    rawError.value = String(e?.message ?? e ?? "Failed to load the Typst engine.");
    diagnostics.value = [];
    status.value = "engine-error";
  }
});

onBeforeUnmount(() => {
  if (debounceTimer) clearTimeout(debounceTimer);
});

/* textarea: Tab inserts two spaces */
function onEditorKeydown(e: KeyboardEvent) {
  if (e.key === "Tab") {
    e.preventDefault();
    const el = e.target as HTMLTextAreaElement;
    const start = el.selectionStart;
    const end = el.selectionEnd;
    code.value = code.value.slice(0, start) + "  " + code.value.slice(end);
    requestAnimationFrame(() => {
      el.selectionStart = el.selectionEnd = start + 2;
    });
  }
}

const statusText = computed(() => {
  switch (status.value) {
    case "loading-engine":
      return "⏳ 正在載入 Typst 引擎及中文字型（首次約需 15–30 秒）… / Loading Typst engine & CJK fonts…";
    case "compiling":
      return "⏳ 編譯中… / Compiling…";
    case "success":
      return "✓ 編譯成功 / Compiled";
    case "error":
      return "✗ 編譯錯誤 / Compile error";
    case "engine-error":
      return "✗ 引擎載入失敗 / Engine failed to load";
    default:
      return "";
  }
});

/* ------------------------------------------------------------------ *
 *  Flash card state                                                   *
 * ------------------------------------------------------------------ */
const order = ref<number[]>(flashCards.map((_, i) => i));
const pos = ref(0);
const flipped = ref(false);

const currentCard = computed(() => flashCards[order.value[pos.value]]);

function flipCard() {
  flipped.value = !flipped.value;
}
function prevCard() {
  if (pos.value > 0) pos.value--;
  flipped.value = false;
}
function nextCard() {
  if (pos.value < order.value.length - 1) pos.value++;
  flipped.value = false;
}
function shuffleCards() {
  const arr = [...order.value];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  order.value = arr;
  pos.value = 0;
  flipped.value = false;
}
function loadCardToEditor() {
  code.value = currentCard.value.code;
  scheduleCompile(code.value);
  const editor = document.getElementById("typst-editor");
  if (editor) editor.scrollIntoView({ behavior: "smooth", block: "center" });
}
</script>

<template>
  <div class="typst-playground">
    <!-- ======================= Playground ======================= -->
    <section class="pg-section">
      <div class="pg-toolbar">
        <label class="pg-example-picker">
          <span>範例 / Examples：</span>
          <select v-model.number="selectedExample" @change="applyExample(selectedExample)">
            <option v-for="(ex, i) in examples" :key="i" :value="i">{{ ex.label }}</option>
          </select>
        </label>
        <span class="pg-status" :class="'st-' + status">{{ statusText }}</span>
      </div>

      <div class="pg-panes">
        <div class="pg-editor-pane">
          <div class="pg-pane-title">編輯器 / Editor</div>
          <textarea
            id="typst-editor"
            v-model="code"
            class="pg-editor"
            spellcheck="false"
            placeholder="在此輸入 Typst 代碼… / Type Typst code here…"
            @keydown="onEditorKeydown"
          ></textarea>
        </div>

        <div class="pg-preview-pane">
          <div class="pg-pane-title">預覽 / Preview</div>
          <div class="pg-preview">
            <div v-if="svgHtml" class="pg-paper" v-html="svgHtml"></div>
            <div v-else class="pg-preview-empty">
              <span v-if="status === 'loading-engine'">正在載入引擎…<br />Loading engine…</span>
              <span v-else-if="status === 'error'">修正錯誤後會自動重新編譯。<br />Preview appears once errors are fixed.</span>
              <span v-else>輸入代碼以查看預覽。<br />Type code to see the preview.</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Error panel -->
      <div v-if="status === 'error' || status === 'engine-error'" class="pg-error-panel">
        <div class="pg-error-title">
          ✗ 診斷訊息 / Diagnostics
          <span class="pg-error-count">{{ diagnostics.length }}</span>
        </div>
        <ul v-if="diagnostics.length" class="pg-diag-list">
          <li v-for="(d, i) in diagnostics" :key="i" class="pg-diag-item">
            <span class="pg-diag-sev" :class="'sev-' + d.severity">{{ d.severity }}</span>
            <span v-if="d.line !== undefined" class="pg-diag-loc">第 {{ d.line }} 行 / Ln {{ d.line }}</span>
            <span class="pg-diag-msg">{{ d.message || "（詳見下方原始訊息 / see raw output）" }}</span>
          </li>
        </ul>
        <button class="pg-raw-toggle" @click="showRawError = !showRawError">
          {{ showRawError ? "▾ 隱藏原始訊息 / Hide raw output" : "▸ 顯示原始訊息 / Show raw output" }}
        </button>
        <pre v-if="showRawError" class="pg-raw">{{ rawError }}</pre>
      </div>
    </section>

    <!-- ======================= Flash cards ======================= -->
    <section class="fc-section">
      <h2 class="fc-heading">練習抽認卡 / Practice Flash Cards</h2>
      <p class="fc-hint">
        看題目想一想，點卡片翻面看答案，再一鍵載入編輯器試試看！<br />
        Read the prompt, flip the card for the answer, then load it into the editor to try it out!
      </p>

      <div class="fc-progress-row">
        <div class="fc-progress-bar">
          <div class="fc-progress-fill" :style="{ width: ((pos + 1) / order.length) * 100 + '%' }"></div>
        </div>
        <span class="fc-progress-text">{{ pos + 1 }} / {{ order.length }}</span>
      </div>

      <div class="fc-card" :class="{ flipped }" @click="flipCard">
        <div class="fc-card-inner">
          <div class="fc-face fc-front">
            <span class="fc-topic">{{ currentCard.topic.zh }} / {{ currentCard.topic.en }}</span>
            <p class="fc-question zh">{{ currentCard.question.zh }}</p>
            <p class="fc-question en">{{ currentCard.question.en }}</p>
            <span class="fc-flip-hint">點擊翻面 / Click to flip</span>
          </div>
          <div class="fc-face fc-back" @click.stop>
            <span class="fc-topic">{{ currentCard.topic.zh }} / {{ currentCard.topic.en }} — 答案 / Answer</span>
            <pre class="fc-answer"><code>{{ currentCard.code }}</code></pre>
            <div class="fc-back-actions">
              <button class="fc-btn primary" @click="loadCardToEditor">⤵ 載入編輯器 / Load into Editor</button>
              <button class="fc-btn" @click="flipped = false">↩ 翻回題目 / Flip back</button>
            </div>
          </div>
        </div>
      </div>

      <div class="fc-controls">
        <button class="fc-btn" :disabled="pos === 0" @click="prevCard">← 上一張 / Prev</button>
        <button class="fc-btn" @click="flipCard">{{ flipped ? "看題目 / Question" : "翻面 / Flip" }}</button>
        <button class="fc-btn" @click="shuffleCards">🔀 洗牌 / Shuffle</button>
        <button class="fc-btn" :disabled="pos === order.length - 1" @click="nextCard">下一張 / Next →</button>
      </div>
    </section>
  </div>
</template>

<style scoped>
.typst-playground {
  --tp-brand: var(--vp-c-brand-1, #239dad);
  --tp-border: var(--vp-c-border, #e2e2e3);
  --tp-bg-soft: var(--vp-c-bg-soft, #f6f6f7);
  --tp-text: var(--vp-c-text-1, #213547);
  --tp-text-2: var(--vp-c-text-2, #476582);
  width: 100%;
  max-width: 1152px;
  margin: 0 auto;
}

/* ---------- toolbar ---------- */
.pg-toolbar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
}
.pg-example-picker {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: var(--tp-text-2);
}
.pg-example-picker select {
  padding: 0.35rem 0.6rem;
  border: 1px solid var(--tp-border);
  border-radius: 6px;
  background: var(--vp-c-bg, #fff);
  color: var(--tp-text);
  font-size: 0.9rem;
  cursor: pointer;
}
.pg-status {
  font-size: 0.85rem;
  font-weight: 600;
  padding: 0.3rem 0.8rem;
  border-radius: 999px;
  background: var(--tp-bg-soft);
  color: var(--tp-text-2);
}
.pg-status.st-success {
  color: #1a7f37;
  background: rgba(26, 127, 55, 0.1);
}
.pg-status.st-error,
.pg-status.st-engine-error {
  color: #cf222e;
  background: rgba(207, 34, 46, 0.1);
}
.pg-status.st-compiling,
.pg-status.st-loading-engine {
  color: var(--tp-brand);
  background: var(--vp-c-brand-soft, rgba(35, 157, 173, 0.14));
}

/* ---------- panes ---------- */
.pg-panes {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}
.pg-pane-title {
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--tp-brand);
  margin-bottom: 0.4rem;
}
.pg-editor {
  width: 100%;
  height: 480px;
  resize: vertical;
  padding: 0.9rem 1rem;
  border: 1px solid var(--tp-border);
  border-radius: 8px;
  background: var(--vp-c-bg, #fff);
  color: var(--tp-text);
  font-family: var(--vp-font-family-mono, monospace);
  font-size: 0.88rem;
  line-height: 1.6;
  tab-size: 2;
  outline: none;
  transition: border-color 0.2s;
}
.pg-editor:focus {
  border-color: var(--tp-brand);
  box-shadow: 0 0 0 3px var(--vp-c-brand-soft, rgba(35, 157, 173, 0.14));
}
.pg-preview {
  height: 480px;
  overflow: auto;
  border: 1px solid var(--tp-border);
  border-radius: 8px;
  background: var(--tp-bg-soft);
  padding: 1rem;
}
.pg-paper {
  background: #ffffff;
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.12);
  padding: 1rem;
  width: fit-content;
  margin: 0 auto;
}
.pg-paper :deep(svg) {
  display: block;
  max-width: 100%;
  height: auto;
}
.pg-preview-empty {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: var(--tp-text-2);
  font-size: 0.9rem;
  line-height: 1.8;
}

/* ---------- error panel ---------- */
.pg-error-panel {
  margin-top: 1rem;
  border: 1px solid rgba(207, 34, 46, 0.4);
  border-left: 4px solid #cf222e;
  border-radius: 8px;
  background: rgba(207, 34, 46, 0.06);
  padding: 0.9rem 1.1rem;
}
.pg-error-title {
  font-weight: 700;
  color: #cf222e;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.pg-error-count {
  background: #cf222e;
  color: #fff;
  border-radius: 999px;
  font-size: 0.72rem;
  padding: 0.05rem 0.5rem;
}
.pg-diag-list {
  list-style: none;
  margin: 0.6rem 0 0;
  padding: 0;
}
.pg-diag-item {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.5rem;
  padding: 0.35rem 0;
  border-top: 1px dashed rgba(207, 34, 46, 0.25);
  font-size: 0.88rem;
}
.pg-diag-sev {
  text-transform: uppercase;
  font-size: 0.68rem;
  font-weight: 700;
  padding: 0.1rem 0.45rem;
  border-radius: 4px;
  background: #cf222e;
  color: #fff;
}
.pg-diag-sev.sev-warning {
  background: #9a6700;
}
.pg-diag-sev.sev-hint {
  background: var(--tp-brand);
}
.pg-diag-loc {
  font-family: var(--vp-font-family-mono, monospace);
  font-size: 0.78rem;
  color: #cf222e;
  font-weight: 600;
}
.pg-diag-msg {
  color: var(--tp-text);
  word-break: break-word;
}
.pg-raw-toggle {
  margin-top: 0.6rem;
  background: none;
  border: none;
  color: var(--tp-text-2);
  font-size: 0.8rem;
  cursor: pointer;
  padding: 0;
}
.pg-raw-toggle:hover {
  color: var(--tp-brand);
}
.pg-raw {
  margin-top: 0.5rem;
  padding: 0.75rem;
  border-radius: 6px;
  background: var(--vp-c-bg, #fff);
  border: 1px solid var(--tp-border);
  font-family: var(--vp-font-family-mono, monospace);
  font-size: 0.75rem;
  line-height: 1.5;
  white-space: pre-wrap;
  word-break: break-word;
  max-height: 260px;
  overflow: auto;
  color: var(--tp-text);
}

/* ---------- flash cards ---------- */
.fc-section {
  margin-top: 2.5rem;
}
.fc-heading {
  margin: 0 0 0.35rem;
}
.fc-hint {
  color: var(--tp-text-2);
  font-size: 0.9rem;
  line-height: 1.7;
}
.fc-progress-row {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin: 1rem 0 0.9rem;
}
.fc-progress-bar {
  flex: 1;
  height: 8px;
  border-radius: 999px;
  background: var(--tp-bg-soft);
  border: 1px solid var(--tp-border);
  overflow: hidden;
}
.fc-progress-fill {
  height: 100%;
  background: var(--tp-brand);
  border-radius: 999px;
  transition: width 0.3s ease;
}
.fc-progress-text {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--tp-text-2);
  min-width: 3.5em;
  text-align: right;
}

.fc-card {
  perspective: 1200px;
  cursor: pointer;
  max-width: 720px;
  margin: 0 auto;
}
.fc-card-inner {
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.45s ease;
  min-height: 300px;
}
.fc-card.flipped .fc-card-inner {
  transform: rotateY(180deg);
}
.fc-face {
  position: absolute;
  inset: 0;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  border: 1px solid var(--tp-border);
  border-radius: 12px;
  background: var(--vp-c-bg, #fff);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
}
.fc-front {
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 0.6rem;
}
.fc-back {
  transform: rotateY(180deg);
  cursor: default;
}
.fc-topic {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--tp-brand);
  background: var(--vp-c-brand-soft, rgba(35, 157, 173, 0.14));
  padding: 0.2rem 0.7rem;
  border-radius: 999px;
}
.fc-question {
  margin: 0.4rem 0 0;
  line-height: 1.7;
}
.fc-question.zh {
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--tp-text);
}
.fc-question.en {
  font-size: 0.9rem;
  color: var(--tp-text-2);
}
.fc-flip-hint {
  margin-top: 0.8rem;
  font-size: 0.78rem;
  color: var(--tp-text-2);
  opacity: 0.75;
}
.fc-answer {
  flex: 1;
  margin: 0.9rem 0;
  padding: 0.9rem;
  border-radius: 8px;
  background: var(--tp-bg-soft);
  border: 1px solid var(--tp-border);
  overflow: auto;
  font-family: var(--vp-font-family-mono, monospace);
  font-size: 0.82rem;
  line-height: 1.55;
  color: var(--tp-text);
  white-space: pre;
}
.fc-back-actions {
  display: flex;
  gap: 0.6rem;
  flex-wrap: wrap;
}

.fc-controls {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-top: 1.1rem;
}
.fc-btn {
  padding: 0.45rem 1rem;
  border: 1px solid var(--tp-border);
  border-radius: 8px;
  background: var(--vp-c-bg, #fff);
  color: var(--tp-text);
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: border-color 0.2s, color 0.2s, background 0.2s;
}
.fc-btn:hover:not(:disabled) {
  border-color: var(--tp-brand);
  color: var(--tp-brand);
}
.fc-btn:disabled {
  opacity: 0.45;
  cursor: not-allowed;
}
.fc-btn.primary {
  background: var(--tp-brand);
  border-color: var(--tp-brand);
  color: #fff;
}
.fc-btn.primary:hover {
  filter: brightness(1.08);
  color: #fff;
}

/* ---------- responsive ---------- */
@media (max-width: 900px) {
  .pg-panes {
    grid-template-columns: 1fr;
  }
  .pg-editor,
  .pg-preview {
    height: 380px;
  }
}
</style>
