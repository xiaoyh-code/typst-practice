# 指令碼基礎 / Scripting Intro

## 變數與賦值 / Variables & Assignment

<div class="bilingual-block">
<div class="zh-block">
<span class="lang-label">中文</span>

使用 `#let` 來定義變數：

```typst
#let name = "Typst"
#let year = 2024
#let pi = 3.14159

我的名字是 #name。
今年是 #year 年。
π 約等於 #pi。
```

變數可以在標記模式中使用 `#變數名` 來插入。

</div>
<div class="en-block">
<span class="lang-label">English</span>

Use `#let` to define variables:

```typst
#let name = "Typst"
#let year = 2024
#let pi = 3.14159

My name is #name.
This year is #year.
π is approximately #pi.
```

Variables can be inserted in markup mode using `#variable-name`.

</div>
</div>

## 陣列與字典 / Arrays & Dictionaries

<div class="bilingual-block">
<div class="zh-block">
<span class="lang-label">中文</span>

```typst
// 陣列 (Array)
#let fruits = ("蘋果", "香蕉", "橘子")

// 字典 (Dictionary)
#let person = (
  name: "小明",
  age: 20,
  city: "台北",
)

#person.name 今年 #person.age 歲，住在 #person.city。
```

</div>
<div class="en-block">
<span class="lang-label">English</span>

```typst
// Array
#let fruits = ("Apple", "Banana", "Orange")

// Dictionary
#let person = (
  name: "Ming",
  age: 20,
  city: "Taipei",
)

#person.name is #person.age years old, lives in #person.city.
```

</div>
</div>

## 條件判斷 / Conditionals

<div class="bilingual-block">
<div class="zh-block">
<span class="lang-label">中文</span>

```typst
#let score = 85

#if score >= 90 [
  成績優秀！
] else if score >= 60 [
  成績及格。
] else [
  成績不及格。
]

// 也可以用在標記中
分數為 #score，結果為
#{
  if score >= 60 { "通過" }
  else { "未通過" }
}。
```

注意：條件判斷的結果必須是內容或可以被顯示的類型。

</div>
<div class="en-block">
<span class="lang-label">English</span>

```typst
#let score = 85

#if score >= 90 [
  Excellent!
] else if score >= 60 [
  Pass.
] else [
  Fail.
]

// Can also be used inline in markup
The score is #score, result:
#{
  if score >= 60 { "Pass" }
  else { "Fail" }
}.
```

Note: The result of a conditional must be content or a displayable type.

</div>
</div>

## 迴圈 / Loops

<div class="bilingual-block">
<div class="zh-block">
<span class="lang-label">中文</span>

`for` 迴圈遍歷陣列中的每個元素：

```typst
#let students = ("小明", "小華", "小美")

#for student in students [
  - #student
]

// while 迴圈
#let count = 0
#while count < 5 {
  count = count + 1
}
總共計數 #count 次。
```

`for` 也可以用 `enumerate` 獲取索引：

```typst
#for (i, name) in students.enumerate() [
  #(i + 1). #name
]
```

</div>
<div class="en-block">
<span class="lang-label">English</span>

`for` loops iterate over each element in an array:

```typst
#let students = ("Ming", "Hua", "Mei")

#for student in students [
  - #student
]

// while loop
#let count = 0
#while count < 5 {
  count = count + 1
}
Counted #count times total.
```

`for` can also get indices with `enumerate`:

```typst
#for (i, name) in students.enumerate() [
  #(i + 1). #name
]
```

</div>
</div>

## 函數 / Functions

<div class="bilingual-block">
<div class="zh-block">
<span class="lang-label">中文</span>

使用 `#let` 定義函數：

```typst
// 簡單函數
#let add(x, y) = x + y

#add(3, 5) = #add(3, 5)

// 返回內容的函數
#let greet(name) = [
  你好，#name！
]

#greet("小明")

// 帶有內容參數的函數
#let highlighted(body, color: yellow) = {
  text(fill: color, body)
}

#highlighted(color: blue)[這是藍色強調文字]
```

函數可以有命名參數（帶預設值），呼叫時使用 `參數名: 值`。

</div>
<div class="en-block">
<span class="lang-label">English</span>

Use `#let` to define functions:

```typst
// Simple function
#let add(x, y) = x + y

#add(3, 5) = #add(3, 5)

// Function returning content
#let greet(name) = [
  Hello, #name!
]

#greet("Ming")

// Function with content parameter
#let highlighted(body, color: yellow) = {
  text(fill: color, body)
}

#highlighted(color: blue)[This is blue highlighted text]
```

Functions can have named parameters (with defaults), called as `param-name: value`.

</div>
</div>

## set 與 show 規則 / Set & Show Rules

<div class="bilingual-block">
<div class="zh-block">
<span class="lang-label">中文</span>

- **set 規則**：設定元素參數的預設值
- **show 規則**：重新定義元素如何顯示

```typst
// set 規則：改變所有標題的樣式
#set heading(numbering: "I.")
#set text(font: "Noto Sans TC", size: 12pt)

// show 規則：將所有粗體文字變成紅色
#show strong: set text(fill: red)

這是 *粗體紅字* 的示範。
```

show 規則非常強大，你可以完全改變一個元素的呈現方式。

</div>
<div class="en-block">
<span class="lang-label">English</span>

- **set rules**: Set default values for element parameters
- **show rules**: Redefine how an element is displayed

```typst
// set rule: change style of all headings
#set heading(numbering: "I.")
#set text(font: "Noto Sans TC", size: 12pt)

// show rule: make all bold text red
#show strong: set text(fill: red)

This is *bold red text* demo.
```

Show rules are very powerful — you can completely change how an element renders.

</div>
</div>

## 實際案例：生成表格 / Real Example: Generating a Table

<div class="bilingual-block">
<div class="zh-block">
<span class="lang-label">中文</span>

結合迴圈與函數，從資料生成表格：

```typst
#let data = (
  (name: "小明", math: 90, english: 85),
  (name: "小華", math: 78, english: 92),
  (name: "小美", math: 95, english: 88),
)

#let make-row(student) = (
  student.name,
  str(student.math),
  str(student.english),
)

#table(
  columns: 3,
  table.header([姓名], [數學], [英文]),
  ..data.map(make-row).flatten(),
)
```

這裡使用 `.map()` 將資料轉換為列，再使用 `.flatten()` 展開。

</div>
<div class="en-block">
<span class="lang-label">English</span>

Combine loops and functions to generate a table from data:

```typst
#let data = (
  (name: "Ming", math: 90, english: 85),
  (name: "Hua", math: 78, english: 92),
  (name: "Mei", math: 95, english: 88),
)

#let make-row(student) = (
  student.name,
  str(student.math),
  str(student.english),
)

#table(
  columns: 3,
  table.header([Name], [Math], [English]),
  ..data.map(make-row).flatten(),
)
```

Here `.map()` transforms data to rows, and `.flatten()` expands them.

</div>
</div>

---

## 練習 / Practice

<div class="practice-box">

1. 定義一個變數 `school` 並設為你的學校名稱，然後在文件中引用它
2. 建立一個成績陣列，使用 `for` 迴圈遍歷並顯示每個成績
3. 撰寫一個函數 `grade_text(score)`，根據分數返回「優」、「良」、「可」或「差」
4. 使用 show 規則將所有 `*粗體*` 文字改為藍色
5. 試著從一個資料陣列動態生成表格

</div>

---

恭喜你完成了所有基礎教程！現在你已經掌握了 Typst 的核心語法。前往 [Typst 線上編輯器](https://typst.app/play/) 自由實驗吧！
