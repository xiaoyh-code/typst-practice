<template>
  <div>
    <div v-if="loading" class="sb-loading">
      載入 Typst 編譯器中...<br />Loading Typst compiler...
    </div>

    <div class="sb-header">
      <span class="sb-label">Typst 編輯器 / Editor</span>
      <span class="sb-status">{{ statusText }}</span>
      <span class="sb-label">預覽 / Preview</span>
    </div>

    <div v-show="!loading" class="sb-container">
      <textarea
        ref="inputRef"
        class="sb-input"
        spellcheck="false"
        :value="code"
        @input="onInput"
      ></textarea>
      <div ref="outputRef" class="sb-output">
        <div v-if="!compiled" class="sb-placeholder">
          在左側輸入 Typst 代碼，即時預覽將顯示在此<br />Type Typst code on the left to see live preview here
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from "vue";

const code = ref(`= Hello, Typst!

This is the *interactive sandbox*.
這是 _互動沙盒_ 。

== Try it / 試試看

- Type text here / 在此輸入文字
- Use *bold* and _italic_ / 使用 *粗體* 和 _斜體_
- Math: $a^2 + b^2 = c^2$

Here is a simple table:

#figure(
  caption: [Student Data / 學生資料],
  table(
    columns: 3,
    table.header([Name], [Age], [City]),
    [Ming], [20], [Taipei],
    [Hua], [22], [Taichung],
    [Mei], [19], [Kaohsiung],
  ),
)

Edit the code to see changes! / 修改代碼查看變化！`);

const loading = ref(true);
const compiled = ref(false);
const statusText = ref("");
const inputRef = ref(null);
const outputRef = ref(null);
let compileTimer = null;
let checkInterval = null;

function compile() {
  if (typeof $typst === "undefined") return;
  const val = code.value;
  if (!val.trim()) {
    if (outputRef.value) {
      outputRef.value.innerHTML =
        '<div class="sb-placeholder">在左側輸入 Typst 代碼，即時預覽將顯示在此<br/>Type Typst code on the left to see live preview here</div>';
    }
    statusText.value = "";
    return;
  }
  statusText.value = "編譯中... Compiling...";
  $typst
    .svg({ mainContent: val })
    .then((svg) => {
      if (outputRef.value) {
        outputRef.value.innerHTML = svg;
      }
      compiled.value = true;
      statusText.value = "編譯完成 / Compiled";
      setTimeout(() => {
        statusText.value = "";
      }, 2000);
    })
    .catch((err) => {
      if (outputRef.value) {
        outputRef.value.innerHTML =
          '<div class="sb-error"><strong>錯誤 / Error:</strong><pre>' +
          String(err)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;") +
          "</pre></div>";
      }
      statusText.value = "編譯錯誤 / Compilation Error";
    });
}

function onInput(e) {
  code.value = e.target.value;
  clearTimeout(compileTimer);
  compileTimer = setTimeout(compile, 400);
}

function initTypst() {
  if (typeof $typst !== "undefined") {
    loading.value = false;
    nextTick(compile);
    return;
  }
  const script = document.createElement("script");
  script.type = "module";
  script.src =
    "https://cdn.jsdelivr.net/npm/@myriaddreamin/typst-all-in-one.ts@0.6.0/dist/esm/index.js";
  script.id = "typst-sandbox";
  script.onload = () => {
    checkInterval = setInterval(() => {
      if (typeof $typst !== "undefined") {
        clearInterval(checkInterval);
        loading.value = false;
        nextTick(compile);
      }
    }, 200);
    setTimeout(() => clearInterval(checkInterval), 15000);
  };
  document.head.appendChild(script);
}

onMounted(initTypst);

onUnmounted(() => {
  clearInterval(checkInterval);
  clearTimeout(compileTimer);
});
</script>

<style scoped>
.sb-loading {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  color: var(--vp-c-text-3);
  font-size: 0.9rem;
  text-align: center;
  line-height: 1.8;
}

.sb-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.sb-label {
  font-weight: 600;
}

.sb-status {
  font-size: 0.8rem;
  color: var(--vp-c-brand-1);
}

.sb-container {
  display: flex;
  gap: 1px;
  height: 650px;
  border: 1px solid var(--vp-c-border);
  border-radius: 8px;
  overflow: hidden;
  background: var(--vp-c-border);
}

.sb-input {
  flex: 0 0 50%;
  padding: 1rem;
  border: none;
  outline: none;
  resize: none;
  font-family: "JetBrains Mono", "Fira Code", "Cascadia Code", monospace;
  font-size: 0.85rem;
  line-height: 1.55;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  tab-size: 2;
  box-sizing: border-box;
}

.sb-input:focus {
  background: var(--vp-c-bg-soft);
}

.sb-output {
  flex: 0 0 50%;
  padding: 1rem;
  overflow: auto;
  background: white;
  box-sizing: border-box;
}

:global(.dark) .sb-output,
:global(.dark .sb-output) {
  background: #1a1a2e;
}

.sb-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: var(--vp-c-text-3);
  font-size: 0.9rem;
  text-align: center;
  line-height: 1.8;
}

.sb-error {
  color: #e53e3e;
  padding: 1rem;
  font-size: 0.9rem;
}

.sb-error pre {
  margin-top: 0.5rem;
  white-space: pre-wrap;
  font-size: 0.8rem;
  color: var(--vp-c-text-2);
}

@media (max-width: 768px) {
  .sb-container {
    flex-direction: column;
    height: auto;
  }
  .sb-input {
    flex: 0 0 350px;
  }
  .sb-output {
    flex: 0 0 500px;
  }
}
</style>
