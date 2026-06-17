# 頁面設置 / Page Setup

## 設定頁面大小 / Setting Page Size

<div class="bilingual-block">
<div class="zh-block">
<span class="lang-label">中文</span>

使用 `#set page()` 來設定頁面的基本屬性。常用的參數包括：

- `paper`：紙張尺寸，如 `"a4"`, `"us-letter"`, `"a5"` 等
- `width` / `height`：自訂頁面寬度和高度
- `margin`：頁面邊距（上下左右統一設定）
- `columns`：多欄佈局

```typst
#set page(
  paper: "a4",
  margin: (top: 2.5cm, bottom: 2cm, left: 2cm, right: 2cm),
)

這是 A4 紙張大小的文件。
```

</div>
<div class="en-block">
<span class="lang-label">English</span>

Use `#set page()` to configure basic page properties. Common parameters include:

- `paper`: Paper size, such as `"a4"`, `"us-letter"`, `"a5"`, etc.
- `width` / `height`: Custom page width and height
- `margin`: Page margins (uniform or per-side)
- `columns`: Multi-column layout

```typst
#set page(
  paper: "a4",
  margin: (top: 2.5cm, bottom: 2cm, left: 2cm, right: 2cm),
)

This is an A4 sized document.
```

</div>
</div>

## 自訂頁面尺寸 / Custom Page Size

<div class="bilingual-block">
<div class="zh-block">
<span class="lang-label">中文</span>

你可以用 `width` 和 `height` 來設定任意尺寸：

```typst
// 正方形頁面
#set page(width: 15cm, height: 15cm)

// 或使用 auto 讓頁面根據內容自動調整高度
#set page(width: 10cm, height: auto)
```

使用 `auto` 高度特別適合製作只有少量內容的文件，如海報或卡片。

</div>
<div class="en-block">
<span class="lang-label">English</span>

You can use `width` and `height` to set any size:

```typst
// Square page
#set page(width: 15cm, height: 15cm)

// Or use auto to let the page height adapt to content
#set page(width: 10cm, height: auto)
```

Using `auto` height is especially useful for documents with little content, like posters or cards.

</div>
</div>

## 邊距設定 / Margin Settings

<div class="bilingual-block">
<div class="zh-block">
<span class="lang-label">中文</span>

邊距有四種設定方式：

```typst
// 方式 1：統一設定
#set page(margin: 2cm)

// 方式 2：水平與垂直分開
#set page(margin: (x: 3cm, y: 2cm))

// 方式 3：四周分別設定
#set page(margin: (top: 3cm, bottom: 2cm, left: 2.5cm, right: 2.5cm))

// 方式 4：結合使用
#set page(margin: (left: 3cm, rest: 2cm))
```

`rest` 會將剩餘未指定的邊全部設定為該值。

</div>
<div class="en-block">
<span class="lang-label">English</span>

There are four ways to configure margins:

```typst
// Method 1: Uniform
#set page(margin: 2cm)

// Method 2: Horizontal and vertical
#set page(margin: (x: 3cm, y: 2cm))

// Method 3: Per-side
#set page(margin: (top: 3cm, bottom: 2cm, left: 2.5cm, right: 2.5cm))

// Method 4: Using rest
#set page(margin: (left: 3cm, rest: 2cm))
```

`rest` sets all unspecified sides to the given value.

</div>
</div>

## 頁碼與頁首頁尾 / Page Numbers, Headers & Footers

<div class="bilingual-block">
<div class="zh-block">
<span class="lang-label">中文</span>

你可以設定頁碼的顯示方式：

```typst
#set page(
  numbering: "1",       // 頁碼格式：1, I, i, a, A
  number-align: center,  // 頁碼對齊方式
)

// 或完全自訂頁首頁尾
#set page(
  header: align(right)[我的文件標題],
  footer: align(center)[第 #counter(page).display() 頁],
)
```

</div>
<div class="en-block">
<span class="lang-label">English</span>

You can configure how page numbers are displayed:

```typst
#set page(
  numbering: "1",       // Number format: 1, I, i, a, A
  number-align: center,  // Page number alignment
)

// Or fully customize headers/footers
#set page(
  header: align(right)[My Document Title],
  footer: align(center)[Page #counter(page).display()],
)
```

</div>
</div>

## 頁面方向 / Page Orientation

<div class="bilingual-block">
<div class="zh-block">
<span class="lang-label">中文</span>

設定橫向頁面：

```typst
#set page(flipped: true, paper: "a4")
```

或手動交換寬高：

```typst
#set page(width: 29.7cm, height: 21cm)   // A4 橫向
```

</div>
<div class="en-block">
<span class="lang-label">English</span>

Set landscape orientation:

```typst
#set page(flipped: true, paper: "a4")
```

Or manually swap width and height:

```typst
#set page(width: 29.7cm, height: 21cm)   // A4 landscape
```

</div>
</div>

## 背景與填色 / Background and Fill

<div class="bilingual-block">
<div class="zh-block">
<span class="lang-label">中文</span>

你還可以設定頁面背景顏色：

```typst
#set page(fill: rgb("#f5f5f5"))
```

搭配 `foreground` 可以為所有頁面添加統一元素（如浮水印）。

</div>
<div class="en-block">
<span class="lang-label">English</span>

You can also set a page background color:

```typst
#set page(fill: rgb("#f5f5f5"))
```

Use `foreground` to add uniform elements to all pages (like watermarks).

</div>
</div>

---

## 練習 / Practice

<div class="practice-box">

1. 建立一份 A4 文件，邊距設為 2.5cm
2. 將頁面改為 A5 大小，觀察變化
3. 練習設定橫向頁面 (`flipped: true`)
4. 在頁首加入文件標題，頁尾加入頁碼
5. 嘗試使用 `auto` 高度，觀察頁面如何隨內容變化

</div>

## 下一步 / Next Steps

學會頁面設置後，下一章來學習文字格式控制：

- [文字與格式 / Text & Formatting](/guide/text-formatting)
