## CSS学习笔记

## 简介

- CSS 指层叠样式表 (**C**ascading **S**tyle **S**heets)
- 样式定义如何显示HTML 元素
- 样式通常存储在样式表中
- 把样式添加到 HTML 4.0 中，是为了解决内容与表现分离的问题
- 外部样式表可以极大提高工作效率
- 外部样式表通常存储在 CSS 文件中
- 多个样式定义可层叠为一个

## 语法

- 规则

  1. 由两个主要的部分构成：选择器，以及一条或多条声明。
  2. 选择器通常是需要改变样式的 HTML 元素。
  3. 每条声明由一个属性和一个值组成。
  4. 属性（property）是您希望设置的样式属性（style attribute）。每个属性有一个值。属性和值被冒号分开。

- 声明

  以分号 **;** 结束，声明总以大括号 **{}** 括起来

  eg:

  ```
  p {color:red;text-align:center;}
  ```

  ```
  p
  {
      color:red;
      text-align:center;
  }
  ```

- 注释

  注释是用来解释你的代码，并且可以随意编辑它，浏览器会忽略它。CSS注释以 `/*` 开始, 以 `*/` 结束

  eg:

  ```
  /*这是个注释*/
  p
  {
      text-align:center;
      /*这是另一个注释*/
      color:black;
      font-family:arial;
  }
  ```

  

---



## id&class选择器

如果你要在HTML元素中设置CSS样式，你需要在元素中设置"id" 和 "class"选择器。

- id选择器

  id 选择器可以为标有特定 id 的 HTML 元素指定特定的样式。

  HTML元素以id属性来设置id选择器,CSS 中 id 选择器以 "#" 来定义。

  eg：应用于元素属性 id="para1"

  ```
  #para1
  {
      text-align:center;
      color:red;
  }
  ```

- class选择器

  lass 选择器用于描述一组元素的样式，class 选择器有别于id选择器，class可以在多个元素中使用。

  class 选择器在 HTML 中以 class 属性表示, 在 CSS 中，类选择器以一个点 **.** 号显示

  eg：所有拥有 center 类的 HTML 元素均为居中

  ```
  .center {text-align:center;}
  ```

  ​        所有的 p 元素使用 class="center" 让该元素的文本居中

  ```
  p.center {text-align:center;}
  ```

  ​         多个 class 选择器可以使用空格分开

  ```
  .center { text-align:center; }
  .color { color:#ff0000; }
  ```

- 注意：类名的第一个字符不能使用数字！它无法在 Mozilla 或 Firefox 中起作用。



---



## 创建

当读到一个样式表时，浏览器会根据它来格式化 HTML 文档。

- 如何插入样式表

  1. 外部样式表(External style sheet)
  2. 内部样式表(Internal style sheet)
  3. 内联样式(Inline style)

- 样式表

  1. 外部

     当样式需要应用于很多页面时，外部样式表将是理想的选择。在使用外部样式表的情况下，可以通过改变一个文件来改变整个站点的外观。每个页面使用 `<link> `标签链接到样式表。

     eg:`<link>` 标签在（文档的）头部 

     ```
     <head>
     <link rel="stylesheet" type="text/css" href="mystyle.css">
     </head>
     ```

        外部样式表可以在任何文本编辑器中进行编辑。文件不能包含任何的 html 标签。样式表应该以 .css 扩展名进行保存。

     ```
     hr {color:sienna;}
     p {margin-left:20px;}
     body {background-image:url("/images/back40.gif");}
     ```

  2. 内部

     当单个文档需要特殊的样式时，就应该使用内部样式表。你可以使用 `<style> `标签在文档头部定义内部样式表

     ```
     <head>
     <style>
     hr {color:sienna;}
     p {margin-left:20px;}
     body {background-image:url("images/back40.gif");}
     </style>
     </head>
     ```

- 内联样式

  需要在相关的标签内使用样式（style）属性。Style 属性可以包含任何 CSS 属性。

  eg:如何改变段落的颜色和左外边距

  ```
  <p style="color:sienna;margin-left:20px">这是一个段落。</p>
  ```

- 多重样式

  如果某些属性在不同的样式表中被同样的选择器定义，那么属性值将从更具体的样式表中被继承过来。 

  eg:外部样式表拥有针对 h3 选择器的三个属性

  ```
  h3
  {
      color:red;
      text-align:left;
      font-size:8pt;
  }
  ```

  eg:内部样式表拥有针对 h3 选择器的两个属性

  ```
  h3
  {
      text-align:right;
      font-size:20pt;
  }
  ```

  eg：内部样式表的这个页面同时与外部样式表链接

  ```
  color:red;
  text-align:right;
  font-size:20pt;
  ```

- 优先级

（内联样式）Inline style > （内部样式）Internal style sheet >（外部样式）External style sheet > 浏览器默认样式



---



## Backgrounds

CSS 背景属性用于定义HTML元素的背景

- 背景效果

- 背景颜色

  background-color 属性定义了元素的背景颜色.

  eg：页面的背景颜色使用在body的选择器中

  ```
  body {background-color:#b0c4de;}
  ```

  CSS中，颜色值通常以以下方式定义:

  - 十六进制 - 如："#ff0000"

  - RGB - 如："rgb(255,0,0)"

  - 颜色名称 - 如："red"

    eg：

    ```
    h1 {background-color:#6495ed;}
    p {background-color:#e0ffff;}
    div {background-color:#b0c4de;}
    ```

- 背景图像

  1. 背景图像

     background-image 属性描述了元素的背景图像

  2. 水平或垂直平铺

     默认情况下 background-image 属性会在页面的水平或者垂直方向平铺

     eg：只在水平方向平铺 (repeat-x)

     ```
     body
     {
     background-image:url('gradient2.png');
     background-repeat:repeat-x;
     }
     ```

  3. 设置定位与不平铺

     如果不想让图像平铺，可以使用 background-repeat 属性

     eg：

     ```
     body
     {
     background-image:url('img_tree.png');
     background-repeat:no-repeat;
     }
     ```

- 简写属性

  1. 背景颜色的简写属性为 "background"

     eg：

     ```
     body {background:#ffffff url('img_tree.png') no-repeat right top;}
     ```

  2. 顺序

     - background-color
     - background-image
     - background-repeat
     - background-attachment
     - background-position

- 背景属性

  | Property                                                     | 描述                                         |
  | :----------------------------------------------------------- | :------------------------------------------- |
  | [background](https://www.runoob.com/cssref/css3-pr-background.html) | 简写属性，作用是将背景属性设置在一个声明中。 |
  | [background-attachment](https://www.runoob.com/cssref/pr-background-attachment.html) | 背景图像是否固定或者随着页面的其余部分滚动。 |
  | [background-color](https://www.runoob.com/cssref/pr-background-color.html) | 设置元素的背景颜色。                         |
  | [background-image](https://www.runoob.com/cssref/pr-background-image.html) | 把图像设置为背景。                           |
  | [background-position](https://www.runoob.com/cssref/pr-background-position.html) | 设置背景图像的起始位置。                     |
  | [background-repeat](https://www.runoob.com/cssref/pr-background-repeat.html) | 设置背景图像是否及如何重复。                 |



---



## Text

- 文本颜色

  颜色属性被用来设置文字的颜色。

  颜色是通过CSS最经常的指定：

  - 十六进制值 - 如: **＃FF0000**
  - 一个RGB值 - 如: **RGB(255,0,0)**
  - 颜色的名称 - 如: **red**

- 对齐方式

  1. 文本排列属性是用来设置文本的水平对齐方式

  2. 文本可居中或对齐到左或右,两端对齐.

  3. 当text-align设置为"justify"，每一行被展开为宽度相等，左，右外边距是对齐（如杂志和报纸）

     eg：

     ```
     h1 {text-align:center;}
     p.date {text-align:right;}
     p.main {text-align:justify;}
     ```

- 文本修饰

  text-decoration 属性用来设置或删除文本的装饰。

  eg：用来删除链接的下划线

  ```
  a {text-decoration:none;}
  ```

  eg：装饰文字

  ```
  h1 {text-decoration:overline;}
  h2 {text-decoration:line-through;}
  h3 {text-decoration:underline;}
  ```

- 文本转换

  文本转换属性是用来指定在一个文本中的大写和小写字母。

  可用于所有字句变成大写或小写字母，或每个单词的首字母大写。

  eg：

  ```
  p.uppercase {text-transform:uppercase;}
  p.lowercase {text-transform:lowercase;}
  p.capitalize {text-transform:capitalize;}
  ```

- 文本缩进

  文本缩进属性是用来指定文本的第一行的缩进。

  eg：

  ```
  p {text-indent:50px;}
  ```

- 文本属性

  | 属性                                                         | 描述                     |
  | :----------------------------------------------------------- | :----------------------- |
  | [color](https://www.runoob.com/cssref/pr-text-color.html)    | 设置文本颜色             |
  | [direction](https://www.runoob.com/cssref/pr-text-direction.html) | 设置文本方向。           |
  | [letter-spacing](https://www.runoob.com/cssref/pr-text-letter-spacing.html) | 设置字符间距             |
  | [line-height](https://www.runoob.com/cssref/pr-dim-line-height.html) | 设置行高                 |
  | [text-align](https://www.runoob.com/cssref/pr-text-text-align.html) | 对齐元素中的文本         |
  | [text-decoration](https://www.runoob.com/cssref/pr-text-text-decoration.html) | 向文本添加修饰           |
  | [text-indent](https://www.runoob.com/cssref/pr-text-text-indent.html) | 缩进元素中文本的首行     |
  | [text-shadow](https://www.runoob.com/cssref/css3-pr-text-shadow.html) | 设置文本阴影             |
  | [text-transform](https://www.runoob.com/cssref/pr-text-text-transform.html) | 控制元素中的字母         |
  | [unicode-bidi](https://www.runoob.com/cssref/pr-text-unicode-bidi.html) | 设置或返回文本是否被重写 |
  | [vertical-align](https://www.runoob.com/cssref/pr-pos-vertical-align.html) | 设置元素的垂直对齐       |
  | [white-space](https://www.runoob.com/cssref/pr-text-white-space.html) | 设置元素中空白的处理方式 |
  | [word-spacing](https://www.runoob.com/cssref/pr-text-word-spacing.html) | 设置字间距               |



---



## Fonts

CSS字体属性定义字体，加粗，大小，文字样式。

- 字型

  1. 通用字体系列 ：拥有相似外观的字体系统组合（如 "Serif" 或 "Monospace"）
  2. 特定字体系列 ：一个特定的字体系列（如 "Times" 或 "Courier"）

- 字体系列

  font-family 属性设置文本的字体系列。

  eg：

  ```
  p{font-family:"Times New Roman", Times, serif;}
  
  ```

- 字体样式

  主要是用于指定斜体文字的字体样式属性。

  1. 正常 - 正常显示文本
  2. 斜体 - 以斜体字显示的文字
  3. 倾斜的文字 - 文字向一边倾斜

- 字体大小&像素

  1. 大小

     font-size 属性设置文本的大小。

     字体大小的值可以是绝对或相对的大小。

     - 绝对大小：

     1. 设置一个指定大小的文本
     2. 不允许用户在所有浏览器中改变文本大小
     3. 确定了输出的物理尺寸时绝对大小很有用

     - 相对大小：
       1. 相对于周围的元素来设置大小
       2. 允许用户在浏览器中改变文字大小

  2. 像素

- 用em来设置字体大小

  1em和当前字体大小相等。在浏览器中默认的文字大小是16px。

  公式:px/16=em

  eg:

  ```
  h1 {font-size:2.5em;} /* 40px/16=2.5em */
  h2 {font-size:1.875em;} /* 30px/16=1.875em */
  p {font-size:0.875em;} /* 14px/16=0.875em */
  ```

- 百分比&em的组合

  在所有浏览器的解决方案中，设置` <body>`元素的默认字体大小的是百分比

  eg:

  ```
  body {font-size:100%;}
  h1 {font-size:2.5em;}
  h2 {font-size:1.875em;}
  p {font-size:0.875em;}
  ```

  

---



## 链接（link）

- 样式

  链接的样式，可以用任何CSS属性（如颜色，字体，背景等）特别的链接，可以有不同的样式，这取决于他们是什么状态。

  连接状态：

  1. a:link - 正常，未访问过的链接
  2. a:visited - 用户已访问过的链接
  3. a:hover - 当用户鼠标放在链接上时
  4. a:active - 链接被点击的那一刻

  顺序规则：

  1. a:hover 必须跟在 a:link 和 a:visited后面
  2. a:active 必须跟在 a:hover后面

- 常见的链接样式

  根据上述链接的颜色变化的例子，看它是在什么状态。

  1. 文本修饰

     text-decoration 属性主要用于删除链接中的下划线

     eg：

     ```
     a:link {text-decoration:none;}
     a:visited {text-decoration:none;}
     a:hover {text-decoration:underline;}
     a:active {text-decoration:underline;}
     ```

  2. 背景颜色

     背景颜色属性指定链接背景色

     eg：

     ```
     a:link {background-color:#B2FF99;}
     a:visited {background-color:#FFFF85;}
     a:hover {background-color:#FF704D;}
     a:active {background-color:#FF704D;}
     ```



---



## 列表

- 作用

  1. 设置不同的列表项标记为有序列表
  2. 设置不同的列表项标记为无序列表
  3. 设置列表项标记为图像

- 列表

  1. 无序列表
     - Coffee
     - Tea
     - Coca Cola
  2. 有序列表
     1. Coffee
     2. Tea
     3. Coca Cola

- 列表项标记

  list-style-type属性指定列表项标记的类型

  eg:

  ```
  ul.a {list-style-type: circle;}
  ul.b {list-style-type: square;}
   
  ol.c {list-style-type: upper-roman;}
  ol.d {list-style-type: lower-alpha;}
  ```

- 标记的图像

  要指定列表项标记的图像，使用列表样式图像属性

  eg:

  ```
  ul
  {
      list-style-image: url('sqpurple.gif');
  }
  ```

- 简写属性

  在单个属性中可以指定所有的列表属性。

  eg：

  ```
  ul
  {
      list-style: square url("sqpurple.gif");
  }
  ```

  顺序：

  1. list-style-type
  2. list-style-position 
  3. list-style-image



---



## Table

- 表格边框

  指定CSS表格边框，使用border属性。

  eg：

  ```
  table, th, td
  {
      border: 1px solid black;
  }
  ```

- 折叠边框

  border-collapse 属性设置表格的边框是否被折叠成一个单一的边框或隔开

  eg：

  ```
  table
  {
      border-collapse:collapse;
  }
  table,th, td
  {
      border: 1px solid black;
  }
  ```

- 宽度&高度

  Width和height属性定义表格的宽度和高度。

  eg：

  ```
  table 
  {
      width:100%;
  }
  th
  {
      height:50px;
  }
  ```

- 文字对齐

  表格中的文本对齐和垂直对齐属性。

  1. 水平

     text-align属性设置水平对齐方式，向左，右，或中心。

     eg：

     ```
     td
     {
         text-align:right;
     }
     ```

  2. 垂直

     垂直对齐属性设置垂直对齐，比如顶部，底部或中间。

     eg：

     ```
     td
     {
         height:50px;
         vertical-align:bottom;
     }
     ```

- 填充

  如需控制边框和表格内容之间的间距，应使用td和th元素的填充属性。

  eg：

  ```
  td
  {
      padding:15px;
  }
  ```

- 颜色

  eg：指定边框的颜色，和th元素的文本和背景颜色

  ```
  table, td, th
  {
      border:1px solid green;
  }
  th
  {
      background-color:green;
      color:white;
  }
  ```



---



## 盒子模型

- 介绍

  1. 所有HTML元素可以看作盒子，在CSS中，"box model"这一术语是用来设计和布局时使用。

  2. CSS盒模型本质上是一个盒子，封装周围的HTML元素，它包括：边距，边框，填充，和实际内容。

  3. 盒模型允许我们在其它元素和周围元素边框之间的空间放置元素。

     eg：

     ![1](https://www.runoob.com/images/box-model.gif)

  4. 简单说明

     - Margin(外边距) - 清除边框外的区域，外边距是透明的。
     - Border(边框) - 围绕在内边距和内容外的边框。
     - Padding(内边距) - 清除内容周围的区域，内边距是透明的。
     - Content(内容) - 盒子的内容，显示文本和图像。

- 元素的宽度&高度

  当指定一个 CSS 元素的宽度和高度属性时，只是设置内容区域的宽度和高度。一个完整大小的元素，还需要添加内边距，边框和外边距。

  eg：

  ```
  div {
      width: 300px;
      border: 25px solid green;
      padding: 25px;
      margin: 25px;
  }
  ```

  总宽度计算公式：

  总元素的宽度=宽度+左填充+右填充+左边框+右边框+左边距+右边距

  总高度计算公式

  总元素的高度=高度+顶部填充+底部填充+上边框+下边框+上边距+下边距



---



## Border

- 是什么

  1. CSS 边框（Border）是用于定义元素边框样式的属性。

  2. 边框可以应用于任何 HTML 元素，用于增强视觉效果、分隔内容或突出显示元素。

  3. CSS 边框属性主要包括边框宽度、边框样式、边框颜色以及简写属性。

- 边框属性

  CSS边框属性允许指定一个元素边框的样式和颜色。

  1. 在四边都有边框
  2. 红色底部边框
  3. 圆角边框
  4. 左侧边框带宽度，颜色为蓝色

- 边框样式

  边框样式属性指定要显示什么样的边界。

  `border-style` 属性用于指定要显示的边框类型。

  1. `dotted`：定义点状边框。
  2. `dashed`：定义虚线边框。
  3. `solid`：定义实线边框。
  4. `double`：定义双线边框。
  5. `groove`：定义三维沟槽边框。效果取决于 border-color 的值。
  6. `ridge`：定义三维脊状边框。效果取决于 border-color 的值。
  7. `inset`：定义三维嵌入边框。效果取决于 border-color 的值。
  8. `outset`：定义三维突出边框。效果取决于 border-color 的值。
  9. `none`：定义无边框。
  10. `hidden`：定义隐藏边框。

- 边框宽度

  可以通过 border-width 属性为边框指定宽度。

  为边框指定宽度有两种方法：可以指定长度值，比如 2px 或 0.1em(单位为 px, pt, cm, em 等)，或者使用 3 个关键字之一，它们分别是 thick 、medium（默认值） 和 thin。

  eg:

  ```
  p.one
  {
      border-style:solid;
      border-width:5px;
  }
  p.two
  {
      border-style:solid;
      border-width:medium;
  }
  ```

- 边框颜色

  border-color属性用于设置边框的颜色。可以设置的颜色

  1. name - 指定颜色的名称，如 "red"

  2. RGB - 指定 RGB 值, 如 "rgb(255,0,0)"

  3. Hex - 指定16进制值, 如 "#ff0000"

     eg:

     ```
     p.one
     {
         border-style:solid;
         border-color:red;
     }
     p.two
     {
         border-style:solid;
         border-color:#98bf21;
     }
     ```

- 单边

  在CSS中，可以指定不同的侧面不同的边框。

  eg：

  ```
  p
  {
      border-top-style:dotted;
      border-right-style:solid;
      border-bottom-style:dotted;
      border-left-style:solid;
  }
  ```

  border-style属性可以有1-4个值：

  - border-style:dotted solid double dashed;
    - 上边框是 dotted
    - 右边框是 solid
    - 底边框是 double
    - 左边框是 dashed
  - border-style:dotted solid double;
    - 上边框是 dotted
    - 左、右边框是 solid
    - 底边框是 double
  - border-style:dotted solid;
    - 上、底边框是 dotted
    - 右、左边框是 solid
  - border-style:dotted;
    - 四面边框是 dotted

- 简写属性

  可以在"border"属性中设置：

  1. border-width

  2. border-style (required)

  3. border-color

     eg：

     ```
     border:5px solid red;
     ```

- 边框属性

  | 属性                                                         | 描述                                                         |
  | :----------------------------------------------------------- | :----------------------------------------------------------- |
  | [border](https://www.runoob.com/cssref/pr-border.html)       | 简写属性，用于把针对四个边的属性设置在一个声明。             |
  | [border-style](https://www.runoob.com/cssref/pr-border-style.html) | 用于设置元素所有边框的样式，或者单独地为各边设置边框样式。   |
  | [border-width](https://www.runoob.com/cssref/pr-border-width.html) | 简写属性，用于为元素的所有边框设置宽度，或者单独地为各边边框设置宽度。 |
  | [border-color](https://www.runoob.com/cssref/pr-border-color.html) | 简写属性，设置元素的所有边框中可见部分的颜色，或为 4 个边分别设置颜色。 |
  | [border-bottom](https://www.runoob.com/cssref/pr-border-bottom.html) | 简写属性，用于把下边框的所有属性设置到一个声明中。           |
  | [border-bottom-color](https://www.runoob.com/cssref/pr-border-bottom-color.html) | 设置元素的下边框的颜色。                                     |
  | [border-bottom-style](https://www.runoob.com/cssref/pr-border-bottom-style.html) | 设置元素的下边框的样式。                                     |
  | [border-bottom-width](https://www.runoob.com/cssref/pr-border-bottom-width.html) | 设置元素的下边框的宽度。                                     |
  | [border-left](https://www.runoob.com/cssref/pr-border-left.html) | 简写属性，用于把左边框的所有属性设置到一个声明中。           |
  | [border-left-color](https://www.runoob.com/cssref/pr-border-left-color.html) | 设置元素的左边框的颜色。                                     |
  | [border-left-style](https://www.runoob.com/cssref/pr-border-left-style.html) | 设置元素的左边框的样式。                                     |
  | [border-left-width](https://www.runoob.com/cssref/pr-border-left-width.html) | 设置元素的左边框的宽度。                                     |
  | [border-right](https://www.runoob.com/cssref/pr-border-right.html) | 简写属性，用于把右边框的所有属性设置到一个声明中。           |
  | [border-right-color](https://www.runoob.com/cssref/pr-border-right-color.html) | 设置元素的右边框的颜色。                                     |
  | [border-right-style](https://www.runoob.com/cssref/pr-border-right-style.html) | 设置元素的右边框的样式。                                     |
  | [border-right-width](https://www.runoob.com/cssref/pr-border-right-width.html) | 设置元素的右边框的宽度。                                     |
  | [border-top](https://www.runoob.com/cssref/pr-border-top.html) | 简写属性，用于把上边框的所有属性设置到一个声明中。           |
  | [border-top-color](https://www.runoob.com/cssref/pr-border-top-color.html) | 设置元素的上边框的颜色。                                     |
  | [border-top-style](https://www.runoob.com/cssref/pr-border-top-style.html) | 设置元素的上边框的样式。                                     |
  | [border-top-width](https://www.runoob.com/cssref/pr-border-top-width.html) | 设置元素的上边框的宽度。                                     |
  | [border-radius](https://www.runoob.com/cssref/css3-pr-border-radius.html) | 设置圆角的边框。                                             |



---



## 轮廓属性

- 是什么

  1. 轮廓（outline）是绘制于元素周围的一条线，位于边框边缘的外围，可起到突出元素的作用。
  2. 轮廓（outline）属性指定元素轮廓的样式、颜色和宽度。

- 轮廓

  轮廓（outline）是绘制于元素周围的一条线，位于边框边缘的外围，可起到突出元素的作用。

  CSS outline 属性规定元素轮廓的样式、颜色和宽度。

  eg：

  ![1](https://www.runoob.com/images/box_outline.gif)

- 轮廓属性

  | 属性                                                         | 说明                           | 值                                                           | CSS  |
  | :----------------------------------------------------------- | :----------------------------- | :----------------------------------------------------------- | :--- |
  | [outline](https://www.runoob.com/cssref/pr-outline.html)     | 在一个声明中设置所有的轮廓属性 | *outline-color outline-style outline-width *inherit          | 2    |
  | [outline-color](https://www.runoob.com/cssref/pr-outline-color.html) | 设置轮廓的颜色                 | *color-name hex-number rgb-number *invert inherit            | 2    |
  | [outline-style](https://www.runoob.com/cssref/pr-outline-style.html) | 设置轮廓的样式                 | none dotted dashed solid double groove ridge inset outset inherit | 2    |
  | [outline-width](https://www.runoob.com/cssref/pr-outline-width.html) | 设置轮廓的宽度                 | thin medium thick *length *inherit                           |      |



---

