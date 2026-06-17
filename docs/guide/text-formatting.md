# 文字與格式 / Text & Formatting

## 字型選擇 / Font Selection

<div class="bilingual-block">
<div class="zh-block">
<span class="lang-label">中文</span>

使用 `#set text(font: ...)` 來設定全文字型：

```typst
#set text(font: "Noto Serif TC")

這是使用 Noto Serif TC 字型的文字。
```

你也可以為特定段落或範圍設定字型：

```typst
#set text(font: "Noto Sans TC")

這段使用 Noto Sans TC。

#text(font: "Noto Serif TC")[
  這段使用 Noto Serif TC。
]
```

Typst 支援系統中已安裝的字型，也可以使用 `--font-path` 指定字型目錄。

</div>
<div class="en-block">
<span class="lang-label">English</span>

Use `#set text(font: ...)` to set the document-wide font:

```typst
#set text(font: "Noto Serif TC")

This text uses the Noto Serif TC font.
```

You can also set fonts for specific paragraphs or ranges:

```typst
#set text(font: "Noto Sans TC")

This uses Noto Sans TC.

#text(font: "Noto Serif TC")[
  This uses Noto Serif TC.
]
```

Typst supports fonts installed on your system and can use `--font-path` to specify font directories.

</div>
</div>

## 顏色 / Colors

<div class="bilingual-block">
<div class="zh-block">
<span class="lang-label">中文</span>

Typst 支援多種顏色表示方式：

```typst
#text(fill: red)[紅色文字]
#text(fill: blue)[藍色文字]
#text(fill: rgb("#FF6B35"))[自訂 RGB 顏色]
#text(fill: rgb(100, 200, 50))[RGB 數值顏色]
```

預設的顏色名稱包括：`red`, `blue`, `green`, `yellow`, `orange`, `purple`, `black`, `white`, `gray`, `navy`, `teal`, `aqua`, `lime`, `maroon`, `olive`, `silver` 等。

</div>
<div class="en-block">
<span class="lang-label">English</span>

Typst supports multiple color representations:

```typst
#text(fill: red)[Red text]
#text(fill: blue)[Blue text]
#text(fill: rgb("#FF6B35"))[Custom RGB color]
#text(fill: rgb(100, 200, 50))[RGB numeric color]
```

Built-in color names include: `red`, `blue`, `green`, `yellow`, `orange`, `purple`, `black`, `white`, `gray`, `navy`, `teal`, `aqua`, `lime`, `maroon`, `olive`, `silver`, etc.

</div>
</div>

## 文字大小 / Text Size

<div class="bilingual-block">
<div class="zh-block">
<span class="lang-label">中文</span>

使用 `size` 參數設定文字大小：

```typst
#set text(size: 12pt)   // 設定預設大小

// 或個別設定
#text(size: 8pt)[小字]
#text(size: 14pt)[中字]
#text(size: 24pt)[大字]

// 相對大小
#text(size: 1.5em)[放大 1.5 倍]
```

常用單位：`pt` (點)、`em` (相對於當前字型大小)、`cm`、`mm`、`in`。

</div>
<div class="en-block">
<span class="lang-label">English</span>

Use the `size` parameter to set text size:

```typst
#set text(size: 12pt)   // Set default size

// Or individually
#text(size: 8pt)[Small text]
#text(size: 14pt)[Medium text]
#text(size: 24pt)[Large text]

// Relative size
#text(size: 1.5em)[1.5x larger]
```

Common units: `pt` (points), `em` (relative to current font size), `cm`, `mm`, `in`.

</div>
</div>

## 字型樣式與粗細 / Font Style & Weight

<div class="bilingual-block">
<div class="zh-block">
<span class="lang-label">中文</span>

```typst
#set text(style: "italic")    // 斜體
#set text(style: "normal")    // 正常

// 字型粗細
#text(weight: "light")[細體]
#text(weight: "regular")[正常]
#text(weight: "medium")[中等]
#text(weight: "bold")[粗體]
#text(weight: "black")[特粗]
```

也可以使用數字值如 `weight: 700` 對應到 `bold`。

</div>
<div class="en-block">
<span class="lang-label">English</span>

```typst
#set text(style: "italic")    // Italic
#set text(style: "normal")    // Normal

// Font weight
#text(weight: "light")[Light]
#text(weight: "regular")[Regular]
#text(weight: "medium")[Medium]
#text(weight: "bold")[Bold]
#text(weight: "black")[Black]
```

You can also use numeric values like `weight: 700` which corresponds to `bold`.

</div>
</div>

## 對齊方式 / Alignment

<div class="bilingual-block">
<div class="zh-block">
<span class="lang-label">中文</span>

```typst
#align(left)[靠左對齊的文字]
#align(center)[置中對齊的文字]
#align(right)[靠右對齊的文字]
```

或使用 set 規則設定預設對齊：

```typst
#set align(center)
```

</div>
<div class="en-block">
<span class="lang-label">English</span>

```typst
#align(left)[Left-aligned text]
#align(center)[Center-aligned text]
#align(right)[Right-aligned text]
```

Or use a set rule for default alignment:

```typst
#set align(center)
```

</div>
</div>

## 段落間距 / Paragraph Spacing

<div class="bilingual-block">
<div class="zh-block">
<span class="lang-label">中文</span>

```typst
#set par(
  leading: 0.8em,   // 行距
  first-line-indent: 2em,  // 首行縮排
  spacing: 1.2em,   // 段落間距
)
```

- `leading`：行與行之間的距離
- `first-line-indent`：段落第一行的縮排量
- `spacing`：段落之間的距離

</div>
<div class="en-block">
<span class="lang-label">English</span>

```typst
#set par(
  leading: 0.8em,   // Line spacing
  first-line-indent: 2em,  // First-line indent
  spacing: 1.2em,   // Paragraph spacing
)
```

- `leading`: Distance between lines
- `first-line-indent`: Indentation of the first line
- `spacing`: Distance between paragraphs

</div>
</div>

## 標題樣式 / Heading Styling

<div class="bilingual-block">
<div class="zh-block">
<span class="lang-label">中文</span>

你可以使用 `#set heading()` 來統一定義所有標題的樣式：

```typst
#set heading(numbering: "1.")
#set text(font: "Noto Sans TC")

= 第一章
這是帶有編號的標題。

== 第一節
這是第二層標題，自動編號為 1.1
```

</div>
<div class="en-block">
<span class="lang-label">English</span>

You can use `#set heading()` to define the style of all headings uniformly:

```typst
#set heading(numbering: "1.")
#set text(font: "Noto Sans TC")

= Chapter 1
This heading has automatic numbering.

== Section 1
This second-level heading is auto-numbered as 1.1
```

</div>
</div>

---

## 練習 / Practice

<div class="practice-box">

1. 設定文件的預設字型為 `"Noto Serif TC"`，大小 12pt
2. 將標題顏色設為藍色
3. 建立一段文字，其中包含紅色、綠色和藍色三種顏色的單詞
4. 練習使用 `weight` 建立不同粗細的文字
5. 將一段文字同時設定為：斜體、粗體、置中對齊

</div>

## 下一步 / Next Steps

現在你已經掌握文字格式，下一章來學習如何插入圖片：

- [插入圖片 / Images](./images.html)
