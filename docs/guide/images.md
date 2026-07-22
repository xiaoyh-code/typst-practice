# 插入圖片 / Images

## 基本圖片插入 / Basic Image Insertion

<div class="bilingual-block">
<div class="zh-block">
<span class="lang-label">中文</span>

使用 `#image()` 函數插入圖片：

```typst
#image("photo.jpg")
```

這會以原始尺寸插入圖片。Typst 支援常見格式：JPEG、PNG、GIF、SVG。

**重要**：圖片檔案需要和 `.typ` 文件放在同一個目錄中，或使用相對路徑/絕對路徑。

</div>
<div class="en-block">
<span class="lang-label">English</span>

Use the `#image()` function to insert an image:

```typst
#image("photo.jpg")
```

This inserts the image at its original size. Typst supports common formats: JPEG, PNG, GIF, SVG.

**Important**: The image file needs to be in the same directory as the `.typ` file, or use a relative/absolute path.

</div>
</div>

## 設定圖片大小 / Setting Image Size

<div class="bilingual-block">
<div class="zh-block">
<span class="lang-label">中文</span>

使用 `width` 和 `height` 參數控制圖片大小：

```typst
// 設定寬度，高度自動縮放
#image("photo.jpg", width: 80%)

// 設定高度，寬度自動縮放
#image("photo.jpg", height: 5cm)

// 同時設定寬高（可能拉伸變形）
#image("photo.jpg", width: 10cm, height: 6cm)
```

`80%` 表示佔頁面文字區域寬度的 80%。你也可以使用絕對單位如 `cm`、`mm`、`pt`。

</div>
<div class="en-block">
<span class="lang-label">English</span>

Use `width` and `height` parameters to control image size:

```typst
// Set width, height auto-scales
#image("photo.jpg", width: 80%)

// Set height, width auto-scales
#image("photo.jpg", height: 5cm)

// Set both (may stretch/distort)
#image("photo.jpg", width: 10cm, height: 6cm)
```

`80%` means 80% of the page text area width. You can also use absolute units like `cm`, `mm`, `pt`.

</div>
</div>

## 圖片對齊 / Image Alignment

<div class="bilingual-block">
<div class="zh-block">
<span class="lang-label">中文</span>

```typst
// 置中對齊
#align(center)[
  #image("photo.jpg", width: 60%)
]

// 靠右對齊
#align(right)[
  #image("photo.jpg", width: 5cm)
]
```

</div>
<div class="en-block">
<span class="lang-label">English</span>

```typst
// Center alignment
#align(center)[
  #image("photo.jpg", width: 60%)
]

// Right alignment
#align(right)[
  #image("photo.jpg", width: 5cm)
]
```

</div>
</div>

## 使用 figure 建立圖片標題 / Using Figure for Captions

<FigureImage src="images/guide/images-01.png" caption-zh="建議截圖：使用 figure 加上圖說與自動編號的效果" caption-en="Suggested: a figure with caption and automatic numbering" alt="Figure with caption" />

<div class="bilingual-block">
<div class="zh-block">
<span class="lang-label">中文</span>

`#figure()` 可以為圖片添加標題和自動編號：

```typst
#figure(
  image("diagram.svg", width: 80%),
  caption: [
    系統架構圖
  ],
)

如 @diagram 所示，系統包含三個主要模組。
```

`#figure` 會自動為圖片編號，你可以使用 `@標籤名` 來引用圖片。

要給圖片加上標籤：

```typst
#figure(
  image("diagram.svg", width: 80%),
  caption: [系統架構圖],
) <diagram>
```

</div>
<div class="en-block">
<span class="lang-label">English</span>

`#figure()` can add a caption and automatic numbering to an image:

```typst
#figure(
  image("diagram.svg", width: 80%),
  caption: [
    System Architecture Diagram
  ],
)

As shown in @diagram, the system has three main modules.
```

`#figure` auto-numbers images, and you can use `@label-name` to reference them.

To give an image a label:

```typst
#figure(
  image("diagram.svg", width: 80%),
  caption: [System Architecture Diagram],
) <diagram>
```

</div>
</div>

## 圖片旋轉與裁剪 / Rotation and Fitting

<div class="bilingual-block">
<div class="zh-block">
<span class="lang-label">中文</span>

```typst
// 旋轉圖片（角度以度為單位）
#image("photo.jpg", width: 5cm, rotation: 45deg)

// fit 參數控制圖片如何適應設定的大小
// "cover":  填滿區域，多餘部分裁切
// "contain": 完整顯示，保持比例
// "stretch": 拉伸以填滿
#image("photo.jpg", width: 8cm, height: 5cm, fit: "cover")
```

</div>
<div class="en-block">
<span class="lang-label">English</span>

```typst
// Rotate image (angle in degrees)
#image("photo.jpg", width: 5cm, rotation: 45deg)

// fit parameter controls how the image fits the set size
// "cover":   Fill the area, crop excess
// "contain": Show fully, maintain aspect ratio
// "stretch": Stretch to fill
#image("photo.jpg", width: 8cm, height: 5cm, fit: "cover")
```

</div>
</div>

## 多圖排列 / Multiple Image Layout

<div class="bilingual-block">
<div class="zh-block">
<span class="lang-label">中文</span>

使用 `grid` 或 `#figure` 搭配 `columns` 來排列多張圖片：

```typst
#figure(
  grid(
    columns: 2,
    rows: 1,
    gutter: 1em,
    image("photo1.jpg", width: 100%),
    image("photo2.jpg", width: 100%),
  ),
  caption: [兩張對比的圖片],
)
```

</div>
<div class="en-block">
<span class="lang-label">English</span>

Use `grid` or `#figure` with `columns` to arrange multiple images:

```typst
#figure(
  grid(
    columns: 2,
    rows: 1,
    gutter: 1em,
    image("photo1.jpg", width: 100%),
    image("photo2.jpg", width: 100%),
  ),
  caption: [Two comparison images],
)
```

</div>
</div>

<FigureImage src="images/guide/images-02.png" caption-zh="建議截圖：使用 grid 排列多張圖片的效果" caption-en="Suggested: multiple images arranged with grid" alt="Multiple image layout" />

---

## 練習 / Practice

<div class="practice-box">

1. 插入一張圖片並設定寬度為頁面寬度的 60%
2. 為圖片加上標題「練習圖片」
3. 嘗試使用 `fit: "cover"` 和 `fit: "contain"`，觀察差異
4. 建立一個 2x2 的圖片網格
5. 將一張圖片旋轉 90 度並置中顯示

</div>

## 下一步 / Next Steps

學會圖片插入後，下一章來學習表格：

- [表格製作 / Tables](./tables.html)
