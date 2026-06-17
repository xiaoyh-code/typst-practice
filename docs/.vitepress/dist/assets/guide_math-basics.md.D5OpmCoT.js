import{_ as a,o as i,c as n,a4 as l}from"./chunks/framework.DyvFOq6U.js";const r=JSON.parse('{"title":"數學公式 / Math","description":"","frontmatter":{},"headers":[],"relativePath":"guide/math-basics.md","filePath":"guide/math-basics.md","lastUpdated":null}'),p={name:"guide/math-basics.md"};function e(t,s,h,c,k,d){return i(),n("div",null,[...s[0]||(s[0]=[l(`<h1 id="數學公式-math" tabindex="-1">數學公式 / Math <a class="header-anchor" href="#數學公式-math" aria-label="Permalink to &quot;數學公式 / Math&quot;">​</a></h1><h2 id="行內公式與獨立公式-inline-display-math" tabindex="-1">行內公式與獨立公式 / Inline &amp; Display Math <a class="header-anchor" href="#行內公式與獨立公式-inline-display-math" aria-label="Permalink to &quot;行內公式與獨立公式 / Inline &amp; Display Math&quot;">​</a></h2><div class="bilingual-block"><div class="zh-block"><span class="lang-label">中文</span><p>Typst 中的數學公式使用 <code>$</code> 符號包圍：</p><div class="language-typst vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typst</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 行內公式 (inline)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">二次方程式 </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">$a x^2 + b x + c = 0$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 的解法如下。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 獨立公式 (display)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">$ a x^2 + b x + c = 0 $</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 或多加空格變成獨立樣式</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">$ a x^2 + b x + c = 0 $</span></span></code></pre></div><p>在行內公式中，上下標會較小以適應行高。獨立公式中則為完整大小。</p></div><div class="en-block"><span class="lang-label">English</span><p>In Typst, math formulas are enclosed in <code>$</code> symbols:</p><div class="language-typst vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typst</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Inline math</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">The quadratic equation </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">$a x^2 + b x + c = 0$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> is solved as follows.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Display math</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">$ a x^2 + b x + c = 0 $</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Or with extra spaces for display style</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">$ a x^2 + b x + c = 0 $</span></span></code></pre></div><p>In inline math, subscripts/superscripts are smaller to fit line height. In display math, they are full size.</p></div></div><h2 id="上下標-superscripts-and-subscripts" tabindex="-1">上下標 / Superscripts and Subscripts <a class="header-anchor" href="#上下標-superscripts-and-subscripts" aria-label="Permalink to &quot;上下標 / Superscripts and Subscripts&quot;">​</a></h2><div class="bilingual-block"><div class="zh-block"><span class="lang-label">中文</span><div class="language-typst vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typst</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 上標：使用 ^</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">$ x^2 + y^2 = z^2 $</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 下標：使用 _</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">$ a_1 + a_2 + ... + a_n $</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 同時上下標</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">$ x_i^2 $</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 多字元上下標需要用括號</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">$ a_{ij} = b^{2n} $</span></span></code></pre></div></div><div class="en-block"><span class="lang-label">English</span><div class="language-typst vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typst</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Superscript: use ^</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">$ x^2 + y^2 = z^2 $</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Subscript: use _</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">$ a_1 + a_2 + ... + a_n $</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Both simultaneously</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">$ x_i^2 $</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Multi-character scripts need braces</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">$ a_{ij} = b^{2n} $</span></span></code></pre></div></div></div><h2 id="分數與根號-fractions-and-roots" tabindex="-1">分數與根號 / Fractions and Roots <a class="header-anchor" href="#分數與根號-fractions-and-roots" aria-label="Permalink to &quot;分數與根號 / Fractions and Roots&quot;">​</a></h2><div class="bilingual-block"><div class="zh-block"><span class="lang-label">中文</span><div class="language-typst vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typst</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 分數</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">$ 1/2 + 1/3 = 5/6 $</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 根號</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">$ sqrt(2) approx 1.414 $</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 高次方根</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">$ root(3, 8) = 2 $</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 階層</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">$ (a + b)^(n+1) $</span></span></code></pre></div><p>Typst 的分數非常直觀 —— 直接使用 <code>/</code> 即可！</p></div><div class="en-block"><span class="lang-label">English</span><div class="language-typst vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typst</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Fraction</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">$ 1/2 + 1/3 = 5/6 $</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Square root</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">$ sqrt(2) approx 1.414 $</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// nth root</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">$ root(3, 8) = 2 $</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Power</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">$ (a + b)^(n+1) $</span></span></code></pre></div><p>Typst fractions are very intuitive — just use <code>/</code>!</p></div></div><h2 id="常用符號與函數-common-symbols-functions" tabindex="-1">常用符號與函數 / Common Symbols &amp; Functions <a class="header-anchor" href="#常用符號與函數-common-symbols-functions" aria-label="Permalink to &quot;常用符號與函數 / Common Symbols &amp; Functions&quot;">​</a></h2><div class="bilingual-block"><div class="zh-block"><span class="lang-label">中文</span><div class="language-typst vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typst</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 希臘字母 (希臘字母)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">$ alpha + beta = gamma $</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">$ pi approx 3.14159 $</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">$ theta, phi, psi, omega $</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 運算符號</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">$ plus.minus, times, div, dot, cross $</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 函數（使用小寫）</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">$ sin(x), cos(x), tan(x) $</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">$ log(x), ln(x), exp(x) $</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">$ lim_(x -&gt; oo) f(x) $</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">$ sum_(i=1)^n i = (n(n+1))/2 $</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">$ integral_0^oo f(x) dif x $</span></span></code></pre></div><p>注意：<code>oo</code> 代表無限大符號 <code>∞</code>。</p></div><div class="en-block"><span class="lang-label">English</span><div class="language-typst vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typst</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Greek letters</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">$ alpha + beta = gamma $</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">$ pi approx 3.14159 $</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">$ theta, phi, psi, omega $</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Operators</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">$ plus.minus, times, div, dot, cross $</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Functions (lowercase)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">$ sin(x), cos(x), tan(x) $</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">$ log(x), ln(x), exp(x) $</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">$ lim_(x -&gt; oo) f(x) $</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">$ sum_(i=1)^n i = (n(n+1))/2 $</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">$ integral_0^oo f(x) dif x $</span></span></code></pre></div><p>Note: <code>oo</code> represents the infinity symbol <code>∞</code>.</p></div></div><h2 id="對齊多行公式-multi-line-aligned-equations" tabindex="-1">對齊多行公式 / Multi-line Aligned Equations <a class="header-anchor" href="#對齊多行公式-multi-line-aligned-equations" aria-label="Permalink to &quot;對齊多行公式 / Multi-line Aligned Equations&quot;">​</a></h2><div class="bilingual-block"><div class="zh-block"><span class="lang-label">中文</span><p>使用 <code>\\</code> 換行和 <code>&amp;</code> 對齊點：</p><div class="language-typst vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typst</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">$ (a + b)^2 &amp;= a^2 + 2ab + b^2 \\</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  (a - b)^2 &amp;= a^2 - 2ab + b^2 \\</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  (a + b)(a - b) &amp;= a^2 - b^2 $</span></span></code></pre></div><p>每個 <code>&amp;</code> 是對齊錨點，Typst 會將同一行的 <code>&amp;</code> 對齊。</p></div><div class="en-block"><span class="lang-label">English</span><p>Use <code>\\</code> for line breaks and <code>&amp;</code> for alignment points:</p><div class="language-typst vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typst</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">$ (a + b)^2 &amp;= a^2 + 2ab + b^2 \\</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  (a - b)^2 &amp;= a^2 - 2ab + b^2 \\</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  (a + b)(a - b) &amp;= a^2 - b^2 $</span></span></code></pre></div><p>Each <code>&amp;</code> is an alignment anchor — Typst aligns <code>&amp;</code> in the same column.</p></div></div><h2 id="矩陣-matrices" tabindex="-1">矩陣 / Matrices <a class="header-anchor" href="#矩陣-matrices" aria-label="Permalink to &quot;矩陣 / Matrices&quot;">​</a></h2><div class="bilingual-block"><div class="zh-block"><span class="lang-label">中文</span><p>使用 <code>mat()</code> 函數建立矩陣：</p><div class="language-typst vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typst</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">$ mat(</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  1, 2, 3;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  4, 5, 6;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  7, 8, 9;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">) $</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 帶括號的矩陣</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">$ mat(</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  delim: &quot;[&quot;,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  1, 2;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  3, 4;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">) $</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 行列式</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">$ mat(</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  delim: &quot;|&quot;,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  a, b;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  c, d;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">) $</span></span></code></pre></div><p>分號 <code>;</code> 表示換行，逗號 <code>,</code> 表示分欄。</p></div><div class="en-block"><span class="lang-label">English</span><p>Use the <code>mat()</code> function to create matrices:</p><div class="language-typst vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typst</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">$ mat(</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  1, 2, 3;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  4, 5, 6;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  7, 8, 9;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">) $</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Matrix with brackets</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">$ mat(</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  delim: &quot;[&quot;,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  1, 2;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  3, 4;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">) $</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Determinant</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">$ mat(</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  delim: &quot;|&quot;,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  a, b;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  c, d;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">) $</span></span></code></pre></div><p>Semicolons <code>;</code> mark new rows, commas <code>,</code> mark new columns.</p></div></div><h2 id="裝飾與強調-accents-emphasis" tabindex="-1">裝飾與強調 / Accents &amp; Emphasis <a class="header-anchor" href="#裝飾與強調-accents-emphasis" aria-label="Permalink to &quot;裝飾與強調 / Accents &amp; Emphasis&quot;">​</a></h2><div class="bilingual-block"><div class="zh-block"><span class="lang-label">中文</span><div class="language-typst vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typst</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 向量和帽子</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">$ arrow(a), arrow(b) $</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 向量</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">$ hat(x), tilde(x) $</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 帽子/波浪</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 上標線、下標線</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">$ overline(ABC) $</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">$ underline(XYZ) $</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 框</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">$ boxed(E = m c^2) $</span></span></code></pre></div></div><div class="en-block"><span class="lang-label">English</span><div class="language-typst vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typst</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Vectors and hats</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">$ arrow(a), arrow(b) $</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // Vector</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">$ hat(x), tilde(x) $</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // Hat/tilde</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Overline and underline</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">$ overline(ABC) $</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">$ underline(XYZ) $</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Box</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">$ boxed(E = m c^2) $</span></span></code></pre></div></div></div><hr><h2 id="練習-practice" tabindex="-1">練習 / Practice <a class="header-anchor" href="#練習-practice" aria-label="Permalink to &quot;練習 / Practice&quot;">​</a></h2><div class="practice-box"><ol><li>寫出二次方程式的解公式：$x = (-b plus.minus sqrt(b^2 - 4ac)) / (2a)$</li><li>練習使用 sum 和 product 符號</li><li>建立一個 3x3 的矩陣和一個行列式</li><li>使用 <code>&amp;</code> 對齊多行公式</li><li>寫出一個包含積分符號的公式</li></ol></div><h2 id="下一步-next-steps" tabindex="-1">下一步 / Next Steps <a class="header-anchor" href="#下一步-next-steps" aria-label="Permalink to &quot;下一步 / Next Steps&quot;">​</a></h2><p>學會數學公式後，下一章來學習指令碼基礎：</p><ul><li><a href="/guide/scripting-intro.html">指令碼基礎 / Scripting Intro</a></li></ul>`,21)])])}const g=a(p,[["render",e]]);export{r as __pageData,g as default};
