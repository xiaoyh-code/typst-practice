import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "zh-TW",
  title: "Typst 練習場",
  description: "Typst 排版練習網站 — 學習 Typst 語法、頁面設定、插入多媒體與表格等基礎知識",
  base: "/typst-practice/",
  head: [["link", { rel: "icon", href: "/favicon.svg" }]],

  themeConfig: {
    logo: { src: "/logo.svg", width: 24, height: 24 },
    nav: [
      { text: "首頁", link: "/" },
      { text: "教學指南", link: "/guide/" },
      { text: "線上練習", link: "/sandbox/" },
    ],

    sidebar: {
      "/guide/": [
        {
          text: "教學指南 / Tutorial",
          items: [
            { text: "快速入門 / Quick Start", link: "/guide/quick-start" },
            { text: "頁面設置 / Page Setup", link: "/guide/page-setup" },
            { text: "文字與格式 / Text & Formatting", link: "/guide/text-formatting" },
            { text: "插入多媒體 / Multimedia", link: "/guide/images" },
            { text: "表格製作 / Tables", link: "/guide/tables" },
            { text: "數學公式 / Math", link: "/guide/math-basics" },
            { text: "指令碼基礎 / Scripting Intro", link: "/guide/scripting-intro" },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/xiaoyh-code/typst-practice" },
    ],

    footer: {
      message: "基於 MIT 授權條款發布",
      copyright: "Powered by VitePress | Typst Practice",
    },

    search: {
      provider: "local",
    },

    outline: { level: [2, 3] },
    lastUpdated: { text: "最後更新" },
    docFooter: { prev: "上一頁", next: "下一頁" },
    returnToTopLabel: "回到頂部",
    sidebarMenuLabel: "選單",
    darkModeSwitchLabel: "深色模式",
    lightModeSwitchTitle: "切換至亮色模式",
    darkModeSwitchTitle: "切換至深色模式",
  },
});
