# 教學圖片目錄 / Guide Images

這個目錄用來存放各教學章節的示範截圖與教學圖片。
This directory holds screenshots and demo images for the tutorial chapters.

## 命名規則 / Naming Convention

```
<章節檔名>-<兩位數序號>.<副檔名>
<chapter-slug>-<two-digit-number>.<ext>
```

例如 / Examples：

| 章節 / Chapter | 檔名範例 / Example filenames |
| --- | --- |
| quick-start | `quick-start-01.png`, `quick-start-02.png` |
| page-setup | `page-setup-01.png`, `page-setup-02.png` |
| text-formatting | `text-formatting-01.png`, `text-formatting-02.png` |
| images | `images-01.png`, `images-02.png` |
| tables | `tables-01.png`, `tables-02.png` |
| math-basics | `math-basics-01.png`, `math-basics-02.png` |
| scripting-intro | `scripting-01.png`, `scripting-02.png` |

## 使用方式 / Usage

圖片放進此目錄後，對應章節中的 `<FigureImage>` 佔位框會自動顯示圖片（無需修改任何程式碼）。支援 PNG / JPG / SVG / WebP，建議寬度 1200px 以內、單張 500KB 以內。

Once an image with the expected filename is placed here, the matching `<FigureImage>` placeholder in the chapter will render it automatically — no code changes needed. PNG / JPG / SVG / WebP are supported; recommended width ≤ 1200px and ≤ 500KB per file.

網站上的引用路徑為 `/images/guide/<檔名>`（base 路徑 `/typst-practice/` 會由 `FigureImage` 組件自動處理）。
The public URL path is `/images/guide/<filename>` (the `/typst-practice/` base is handled automatically by the `FigureImage` component).
