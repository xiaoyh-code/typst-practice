# Typst 練習場 / Typst Practice

一個用 [VitePress](https://vitepress.dev/) 製作的雙語（繁體中文 / English）教學網站，帶你由零開始學習 [Typst](https://typst.app/) 排版語言。

A bilingual (Traditional Chinese / English) tutorial website built with VitePress for learning the Typst typesetting language from scratch.

**🌐 線上網站 / Live Site**: [https://xiaoyh-code.github.io/typst-practice/](https://xiaoyh-code.github.io/typst-practice/)

---

## 📖 如何使用本網站 / How to Use This Website

### 1. 跟住教學指南學習 / Follow the Tutorial Guide

打開網站後，點擊「教學指南」，建議按以下順序逐章學習：

1. **快速入門 / Quick Start** — 認識 Typst 是什麼、基本語法結構
2. **頁面設置 / Page Setup** — 紙張大小、邊界、頁首頁尾
3. **文字與格式 / Text & Formatting** — 字體、粗斜體、對齊、行距
4. **插入多媒體 / Multimedia** — 插入圖片、調整大小、加上標題與引用
5. **表格製作 / Tables** — 建立表格、合併儲存格、樣式設定
6. **數學公式 / Math** — 行內與獨立公式、矩陣、對齊
7. **指令碼基礎 / Scripting Intro** — 變數、函數、迴圈與條件判斷

每章結尾都有**練習題**，做完先好去下一章！

### 2. 用線上沙盒即時練習 / Practice in the Online Sandbox

點擊「線上練習」進入沙盒（Sandbox）：

- 左邊寫 Typst 代碼，右邊**即時預覽**編譯結果
- 內建**練習抽認卡**，每章一題，可以一鍵載入範例代碼
- 完全在瀏覽器內運行，**不需安裝任何軟體**

### 3. 配合 Typst 官方編輯器 / Use with the Official Typst Editor

想保存專案或使用更多功能（套件、圖片上傳、自訂字型、雲端專案），可到 [Typst 官方線上編輯器](https://typst.app/play/) 免費註冊使用。

---

## 🖼️ 給老師：加入教學圖片 / For Teachers: Adding Guide Images

每個章節都預留了圖片位（虛線佔位框）。加入截圖方法：

1. 將截圖命名為 `章節名-序號.png`（例如 `quick-start-01.png`）
2. 放到 `docs/public/images/guide/` 目錄
3. Commit 並 push — 網站會自動顯示，無需修改任何程式碼

詳細命名規則請見 [`docs/public/images/guide/README.md`](docs/public/images/guide/README.md)。

---

## 🛠️ 本地開發 / Local Development

需要 [Node.js](https://nodejs.org/) 22+ 和 [pnpm](https://pnpm.io/)。

```bash
# 安裝依賴 / Install dependencies
pnpm install

# 啟動開發伺服器（熱更新）/ Start dev server with hot reload
pnpm dev

# 建構靜態網站 / Build static site
pnpm build

# 預覽建構結果 / Preview the production build
pnpm preview
```

---

## 🚀 部署 / Deployment

本專案使用 GitHub Actions 自動部署到 GitHub Pages：

- Push 到 `main` 分支即觸發 `.github/workflows/deploy.yml`
- 建構完成後自動發布到 <https://xiaoyh-code.github.io/typst-practice/>

---

## 📄 授權 / License

本專案基於 [MIT 授權條款](LICENSE)發布。
