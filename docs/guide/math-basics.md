# 數學公式 / Math

## 行內公式與獨立公式 / Inline & Display Math

<FigureImage src="images/guide/math-basics-01.png" caption-zh="建議截圖：行內公式與獨立公式在文件中的實際效果" caption-en="Suggested: inline and display math rendered in a document" alt="Inline and display math" />

<div class="bilingual-block">
<div class="zh-block">
<span class="lang-label">中文</span>

Typst 中的數學公式使用 `$` 符號包圍：

```typst
// 行內公式 (inline)
二次方程式 $a x^2 + b x + c = 0$ 的解法如下。

// 獨立公式 (display)
$ a x^2 + b x + c = 0 $

// 或多加空格變成獨立樣式
$ a x^2 + b x + c = 0 $
```

在行內公式中，上下標會較小以適應行高。獨立公式中則為完整大小。

</div>
<div class="en-block">
<span class="lang-label">English</span>

In Typst, math formulas are enclosed in `$` symbols:

```typst
// Inline math
The quadratic equation $a x^2 + b x + c = 0$ is solved as follows.

// Display math
$ a x^2 + b x + c = 0 $

// Or with extra spaces for display style
$ a x^2 + b x + c = 0 $
```

In inline math, subscripts/superscripts are smaller to fit line height. In display math, they are full size.

</div>
</div>

## 上下標 / Superscripts and Subscripts

<div class="bilingual-block">
<div class="zh-block">
<span class="lang-label">中文</span>

```typst
// 上標：使用 ^
$ x^2 + y^2 = z^2 $

// 下標：使用 _
$ a_1 + a_2 + ... + a_n $

// 同時上下標
$ x_i^2 $

// 多字元上下標需要用括號
$ a_{ij} = b^{2n} $
```

</div>
<div class="en-block">
<span class="lang-label">English</span>

```typst
// Superscript: use ^
$ x^2 + y^2 = z^2 $

// Subscript: use _
$ a_1 + a_2 + ... + a_n $

// Both simultaneously
$ x_i^2 $

// Multi-character scripts need braces
$ a_{ij} = b^{2n} $
```

</div>
</div>

## 分數與根號 / Fractions and Roots

<div class="bilingual-block">
<div class="zh-block">
<span class="lang-label">中文</span>

```typst
// 分數
$ 1/2 + 1/3 = 5/6 $

// 根號
$ sqrt(2) approx 1.414 $

// 高次方根
$ root(3, 8) = 2 $

// 階層
$ (a + b)^(n+1) $
```

Typst 的分數非常直觀 —— 直接使用 `/` 即可！

</div>
<div class="en-block">
<span class="lang-label">English</span>

```typst
// Fraction
$ 1/2 + 1/3 = 5/6 $

// Square root
$ sqrt(2) approx 1.414 $

// nth root
$ root(3, 8) = 2 $

// Power
$ (a + b)^(n+1) $
```

Typst fractions are very intuitive — just use `/`!

</div>
</div>

## 常用符號與函數 / Common Symbols & Functions

<div class="bilingual-block">
<div class="zh-block">
<span class="lang-label">中文</span>

```typst
// 希臘字母 (希臘字母)
$ alpha + beta = gamma $
$ pi approx 3.14159 $
$ theta, phi, psi, omega $

// 運算符號
$ plus.minus, times, div, dot, cross $

// 函數（使用小寫）
$ sin(x), cos(x), tan(x) $
$ log(x), ln(x), exp(x) $
$ lim_(x -> oo) f(x) $
$ sum_(i=1)^n i = (n(n+1))/2 $
$ integral_0^oo f(x) dif x $
```

注意：`oo` 代表無限大符號 `∞`。

</div>
<div class="en-block">
<span class="lang-label">English</span>

```typst
// Greek letters
$ alpha + beta = gamma $
$ pi approx 3.14159 $
$ theta, phi, psi, omega $

// Operators
$ plus.minus, times, div, dot, cross $

// Functions (lowercase)
$ sin(x), cos(x), tan(x) $
$ log(x), ln(x), exp(x) $
$ lim_(x -> oo) f(x) $
$ sum_(i=1)^n i = (n(n+1))/2 $
$ integral_0^oo f(x) dif x $
```

Note: `oo` represents the infinity symbol `∞`.

</div>
</div>

## 對齊多行公式 / Multi-line Aligned Equations

<div class="bilingual-block">
<div class="zh-block">
<span class="lang-label">中文</span>

使用 `\` 換行和 `&` 對齊點：

```typst
$ (a + b)^2 &= a^2 + 2ab + b^2 \
  (a - b)^2 &= a^2 - 2ab + b^2 \
  (a + b)(a - b) &= a^2 - b^2 $
```

每個 `&` 是對齊錨點，Typst 會將同一行的 `&` 對齊。

</div>
<div class="en-block">
<span class="lang-label">English</span>

Use `\` for line breaks and `&` for alignment points:

```typst
$ (a + b)^2 &= a^2 + 2ab + b^2 \
  (a - b)^2 &= a^2 - 2ab + b^2 \
  (a + b)(a - b) &= a^2 - b^2 $
```

Each `&` is an alignment anchor — Typst aligns `&` in the same column.

</div>
</div>

## 矩陣 / Matrices

<div class="bilingual-block">
<div class="zh-block">
<span class="lang-label">中文</span>

使用 `mat()` 函數建立矩陣：

```typst
$ mat(
  1, 2, 3;
  4, 5, 6;
  7, 8, 9;
) $

// 帶括號的矩陣
$ mat(
  delim: "[",
  1, 2;
  3, 4;
) $

// 行列式
$ mat(
  delim: "|",
  a, b;
  c, d;
) $
```

分號 `;` 表示換行，逗號 `,` 表示分欄。

</div>
<div class="en-block">
<span class="lang-label">English</span>

Use the `mat()` function to create matrices:

```typst
$ mat(
  1, 2, 3;
  4, 5, 6;
  7, 8, 9;
) $

// Matrix with brackets
$ mat(
  delim: "[",
  1, 2;
  3, 4;
) $

// Determinant
$ mat(
  delim: "|",
  a, b;
  c, d;
) $
```

Semicolons `;` mark new rows, commas `,` mark new columns.

</div>
</div>

## 裝飾與強調 / Accents & Emphasis

<div class="bilingual-block">
<div class="zh-block">
<span class="lang-label">中文</span>

```typst
// 向量和帽子
$ arrow(a), arrow(b) $  // 向量
$ hat(x), tilde(x) $    // 帽子/波浪

// 上標線、下標線
$ overline(ABC) $
$ underline(XYZ) $

// 框
$ boxed(E = m c^2) $
```

</div>
<div class="en-block">
<span class="lang-label">English</span>

```typst
// Vectors and hats
$ arrow(a), arrow(b) $  // Vector
$ hat(x), tilde(x) $    // Hat/tilde

// Overline and underline
$ overline(ABC) $
$ underline(XYZ) $

// Box
$ boxed(E = m c^2) $
```

</div>
</div>

<FigureImage src="images/guide/math-basics-02.png" caption-zh="建議截圖：矩陣與多行對齊公式的排版效果" caption-en="Suggested: matrices and multi-line aligned equations" alt="Matrix and aligned equations" />

---

## 練習 / Practice

<div class="practice-box">

1. 寫出二次方程式的解公式：$x = (-b plus.minus sqrt(b^2 - 4ac)) / (2a)$
2. 練習使用 sum 和 product 符號
3. 建立一個 3x3 的矩陣和一個行列式
4. 使用 `&` 對齊多行公式
5. 寫出一個包含積分符號的公式

</div>

## 下一步 / Next Steps

學會數學公式後，下一章來學習指令碼基礎：

- [指令碼基礎 / Scripting Intro](./scripting-intro.html)
