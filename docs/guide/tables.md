# 表格製作 / Tables

## 基本表格 / Basic Table

<div class="bilingual-block">
<div class="zh-block">
<span class="lang-label">中文</span>

使用 `#table()` 函數建立表格。表格按**行** (row) 來組織資料，每行是一個獨立的參數：

```typst
#table(
  columns: 3,             // 3 欄
  [姓名], [年齡], [城市],  // 第一行
  [小明], [20],  [台北],  // 第二行
  [小華], [22],  [台中],  // 第三行
  [小美], [19],  [高雄],  // 第四行
)
```

`columns` 指定欄位數量。表格中的每個參數（在 column 之後）都是一個儲存格。

</div>
<div class="en-block">
<span class="lang-label">English</span>

Use the `#table()` function to create a table. Tables are organized by **rows**, each row is a separate argument:

```typst
#table(
  columns: 3,             // 3 columns
  [Name], [Age], [City],  // First row
  [Ming], [20],  [Taipei],   // Second row
  [Hua],  [22],  [Taichung], // Third row
  [Mei],  [19],  [Kaohsiung], // Fourth row
)
```

`columns` specifies the number of columns. Each argument after `columns` is a cell.

</div>
</div>

## 表格標題 / Table Caption

<div class="bilingual-block">
<div class="zh-block">
<span class="lang-label">中文</span>

與圖片類似，使用 `#figure()` 包裝表格來添加標題：

```typst
#figure(
  table(
    columns: 3,
    [姓名], [年齡], [城市],
    [小明], [20], [台北],
    [小華], [22], [台中],
  ),
  caption: [學生資料表]
) <student-table>
```

</div>
<div class="en-block">
<span class="lang-label">English</span>

Similar to images, wrap the table in `#figure()` to add a caption:

```typst
#figure(
  table(
    columns: 3,
    [Name], [Age], [City],
    [Ming], [20], [Taipei],
    [Hua], [22], [Taichung],
  ),
  caption: [Student Data Table]
) <student-table>
```

</div>
</div>

## 設定欄寬 / Column Width

<div class="bilingual-block">
<div class="zh-block">
<span class="lang-label">中文</span>

你可以為每個欄位指定不同寬度：

```typst
#table(
  columns: (auto, 1fr, 1fr),  // 第一欄自動，後兩欄等分剩餘空間
  [項目], [數量], [單價],
  [蘋果], [5],   [30 元],
  [橘子], [3],   [25 元],
  [香蕉], [8],   [15 元],
)
```

常用欄寬設定：

| 語法 | 說明 |
|------|------|
| `auto` | 自動根據內容調整 |
| `1fr` | 佔據 1 份剩餘空間 |
| `2fr` | 佔據 2 份剩餘空間 |
| `3cm` | 固定 3cm 寬 |
| `20%` | 佔總寬度的 20% |

</div>
<div class="en-block">
<span class="lang-label">English</span>

You can specify different widths for each column:

```typst
#table(
  columns: (auto, 1fr, 1fr),  // First auto, last two split remaining space
  [Item], [Qty], [Price],
  [Apple], [5],   [$30],
  [Orange], [3],  [$25],
  [Banana], [8],  [$15],
)
```

Common column width settings:

| Syntax | Description |
|--------|-------------|
| `auto` | Auto-adjust based on content |
| `1fr` | Occupies 1 fraction of remaining space |
| `2fr` | Occupies 2 fractions of remaining space |
| `3cm` | Fixed 3cm width |
| `20%` | 20% of total width |

</div>
</div>

## 表格樣式 / Table Styling

<div class="bilingual-block">
<div class="zh-block">
<span class="lang-label">中文</span>

你可以使用各種參數設定表格外觀：

```typst
#table(
  columns: 3,
  inset: 8pt,              // 儲存格內邊距
  align: (center, left, right), // 每欄對齊方式
  stroke: 0.5pt,           // 格線粗細
  fill: (x, y) => if x == 0 { rgb("#eee") }, // 條件式填色
  [姓名], [年齡], [城市],
  [小明], [20], [台北],
  [小華], [22], [台中],
)
```

更多參數：

- `inset`：儲存格內部邊距 (padding)
- `align`：儲存格對齊方式
- `stroke`：格線樣式，`none` 可隱藏格線
- `fill`：儲存格背景色，支援條件式函數
- `gutter`：欄位間距

</div>
<div class="en-block">
<span class="lang-label">English</span>

You can use various parameters to style the table:

```typst
#table(
  columns: 3,
  inset: 8pt,              // Cell padding
  align: (center, left, right), // Per-column alignment
  stroke: 0.5pt,           // Line thickness
  fill: (x, y) => if x == 0 { rgb("#eee") }, // Conditional fill
  [Name], [Age], [City],
  [Ming], [20], [Taipei],
  [Hua], [22], [Taichung],
)
```

More parameters:

- `inset`: Cell padding
- `align`: Cell alignment
- `stroke`: Border style, `none` hides borders
- `fill`: Cell background, supports conditional functions
- `gutter`: Space between columns

</div>
</div>

## 合併儲存格 / Merging Cells

<div class="bilingual-block">
<div class="zh-block">
<span class="lang-label">中文</span>

使用 `colspan` 和 `rowspan` 來合併儲存格：

```typst
#table(
  columns: 4,
  // 第一行：第一個儲存格跨 2 欄
  table.cell(colspan: 2)[個人資料], [], [課程], [成績],
  table.cell(colspan: 2)[小明], [], [數學], [A],
  table.cell(colspan: 2)[], [], [英文], [B+],
)
```

注意：合併後的剩餘格子需要填入空 `[]` 來保持表格結構完整。

</div>
<div class="en-block">
<span class="lang-label">English</span>

Use `colspan` and `rowspan` to merge cells:

```typst
#table(
  columns: 4,
  // First row: first cell spans 2 columns
  table.cell(colspan: 2)[Personal Info], [], [Course], [Grade],
  table.cell(colspan: 2)[Ming], [], [Math], [A],
  table.cell(colspan: 2)[], [], [English], [B+],
)
```

Note: Remaining slots from merged cells need to be filled with empty `[]` to maintain table structure.

</div>
</div>

## 表頭與表身 / Header & Body Rows

<div class="bilingual-block">
<div class="zh-block">
<span class="lang-label">中文</span>

使用 `table.header()` 來標記表頭行：

```typst
#table(
  columns: 3,
  table.header([姓名], [年齡], [城市]),
  table.hline(),              // 水平分隔線
  [小明], [20], [台北],
  [小華], [22], [台中],
  [小美], [19], [高雄],
)
```

`table.header()` 中的行會在每頁重複顯示（跨頁表格時）。

`table.hline()` 和 `table.vline()` 可以手動添加水平或垂直分隔線。

</div>
<div class="en-block">
<span class="lang-label">English</span>

Use `table.header()` to mark header rows:

```typst
#table(
  columns: 3,
  table.header([Name], [Age], [City]),
  table.hline(),              // Horizontal line
  [Ming], [20], [Taipei],
  [Hua], [22], [Taichung],
  [Mei], [19], [Kaohsiung],
)
```

Rows in `table.header()` repeat on every page (for multi-page tables).

`table.hline()` and `table.vline()` can manually add horizontal or vertical lines.

</div>
</div>

---

## 練習 / Practice

<div class="practice-box">

1. 建立一個 4x3 的成績表格，包含欄位「姓名、科目、成績」
2. 為表格添加標題「學期成績表」
3. 使用 `fill` 將表頭行設為淺灰色背景
4. 嘗試將第一欄設定為 `auto`、後兩欄為 `1fr`
5. 練習使用 `colspan` 合併儲存格製作複雜表頭
6. 使用 `align` 讓成績欄位置中對齊

</div>

## 下一步 / Next Steps

學會表格後，下一章來學習數學公式：

- [數學公式 / Math](/guide/math-basics)
