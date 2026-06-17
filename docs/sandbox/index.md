---
title: 互動沙盒 / Interactive Sandbox
layout: page
---

# 互動沙盒 / Interactive Sandbox

<div class="bilingual-block">
<div class="zh-block">
<span class="lang-label">中文</span>

這是一個**瀏覽器內 Typst 即時編譯器**！無需安裝任何軟體，直接在左側輸入 Typst 程式碼，右側將即時顯示 SVG 向量輸出。

**支援的功能**：完整 Typst 語法（文字、標題、列表、表格、數學公式）、即時預覽。

**注意**：沙盒無法載入外部圖片或自訂字型。如需完整功能，請使用 [Typst 線上編輯器](https://typst.app/play/)。

</div>
<div class="en-block">
<span class="lang-label">English</span>

This is an **in-browser Typst live compiler**! Type Typst code on the left and see the SVG output on the right in real time, no installation needed.

**Supported**: Full Typst syntax (text, headings, lists, tables, math), real-time preview.

**Note**: The sandbox cannot load external images or custom fonts. For full functionality, use the [Typst Online Editor](https://typst.app/play/).

</div>
</div>

---

<div class="sandbox-frame-wrapper">
  <iframe src="./sandbox-standalone.html" class="sandbox-frame" title="Typst Interactive Sandbox"></iframe>
</div>

---

## 沙盒使用技巧 / Sandbox Tips

<div class="bilingual-block">
<div class="zh-block">
<span class="lang-label">中文</span>

- 編輯器支援基本文字編輯和自動換行
- 輸入代碼後 **0.4 秒** 自動編譯預覽
- 可以從教學頁面複製範例代碼到沙盒中實驗
- 如果 iframe 載入失敗，可以直接在瀏覽器打開獨立的 ./sandbox-standalone.html 頁面

</div>
<div class="en-block">
<span class="lang-label">English</span>

- Editor supports basic text editing and word wrap
- Code auto-compiles and previews after a **0.4 second** delay
- Copy example code from tutorial pages to experiment in the sandbox
- If the iframe fails to load, open the standalone ./sandbox-standalone.html page directly

</div>
</div>

<style scoped>
.sandbox-frame-wrapper {
  width: 100%;
  height: 700px;
  border: 1px solid var(--vp-c-border);
  border-radius: 8px;
  overflow: hidden;
}

.sandbox-frame {
  width: 100%;
  height: 100%;
  border: none;
}

@media (max-width: 768px) {
  .sandbox-frame-wrapper {
    height: 800px;
  }
}
</style>
