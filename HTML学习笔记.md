# HTML学习笔记

超文本标记语言（英语：HyperText Markup Language，简称：HTML）是一种用于创建网页的标准标记语言。

##  HTML 基础

- 标题

  是通过<h1> - <h6> 标签来定义的。

  ```
  <h1>这是一个标题</h1>
  <h2>这是一个标题</h2>
  <h3>这是一个标题</h3>
  ```

- 段落

  是通过标签 <p> 来定义的。

  ```
  <p>这是一个段落。</p>
  <p>这是另外一个段落。</p>
  ```

- 链接

  是通过标签 <a> 来定义的。

  ```
  <a href="https://www.runoob.com">
  这是一个链接</a>
  ```

  **提示:**在 href 属性中指定链接的地址。

- 图像

  是通过标签 <img> 来定义的。

  ```
  <img src="/images/logo.png" width="258" height="39" />
  ```

  **注意：** 图像的名称和尺寸是以属性的形式提供的。

  

---



## HTML 元素

- 是什么

  | 开始标签               | 元素内容       | 结束标签 |
  | :--------------------- | :------------- | :------- |
  | <p>                    | 这是一个段落   | </p>     |
  | <a href="default.htm"> | 这是一个链接   | </a>     |
  | <br>                   | 换行（空元素） | 无       |

  **注意：**

  1. 开始标签也称为 起始标签。

  2. 结束标签也称为 闭合标签。

- 语法规则

  1. 元素以开始标签开始，以结束标签结束
  2. 元素内容位于开始标签与结束标签之间
  3. 部分元素为空元素（empty element），没有内容
  4. 空元素通常在开始标签中自闭合（如 `<br />`）
  5. 大多数元素可以包含属性（Attributes）。

- 嵌套

  HTML 元素可以相互嵌套，形成树状结构：

  1. 一个元素可以包含其他元素
  2. HTML 文档本质上是一个嵌套结构（DOM 树）

- 结束标签

  部分情况下，浏览器会自动补全缺失的结束标签：

  ```
  <p>这是一个段落
  <p>这是另一个段落
  ```

  但可能导致：

  1. 结构错乱

  2. 样式异常

  3. 兼容性问题

- 空元素

  空元素是指没有内容的元素。

  eg：

  ```
  <br>（换行）[推荐]
  <img>（图片）
  <input>（输入框）
  ```

- 实例

  ```
  <!DOCTYPE html>
  <html>
  
    <body>
      <p>这是第一个段落。</p>  
    </body>
  
  </html>
  ```

  1. **`<p>`**元素（段落）：定义一个段落，包含文本内容。
  2. **`<body>`**元素（主体）：定义页面的主体内容，可以包含多个子元素。
  3. **`<html>`**元素（跟元素）：整个 HTML 文档的根节点，所有内容都必须包含在其中。

- 注意

  HTML 标签不区分大小写，但推荐：

  1. 统一使用**小写标签**
  2. 符合 W3C 规范
  3. 提升代码可读性与一致性



---



## HTML 属性

- 属性

  1. HTML 元素可以设置属性。

  2. 属性是 HTML 元素提供的附加信息。

  3. 属性通常出现在 HTML 标签的开始标签中，用于定义元素的行为、样式、内容或其他特性。

  4. 属性总是以 `name="value"` 的形式写在标签内，`name` 是属性的名称，`value` 是属性的值。

     eg:

     HTML 链接由 <a> 标签定义。链接的地址在 href 属性中指定：

     ```
     <a href="http://www.runoob.com">这是一个链接</a>
     ```

- 注意:

  属性和属性值对大小写不敏感。

  不过，万维网联盟在其 HTML 4 推荐标准中推荐小写的属性/属性值。

  而新版本的 (X)HTML 要求使用小写属性。

- 常用引用属性值

  属性值应该始终被包括在引号内。

  双引号是最常用的，不过使用单引号也没有问题。

  1. 双引号：

     ```
     <a href="https://www.runoob.com">Link</a>
     ```

  2. 单引号：

     ```
     <a href='https://www.runoob.com'>Link</a>
     ```

  3. 注意：如果属性值本身就含有双引号，那么必须使用单引号。

     ```
     name='John "ShotGun" Nelson'
     <a href="https://www.runoob.com?q='search'">Link</a>
     ```

- 属性列表

  1. 属性

     | 属性名        | 适用元素                                          | 说明                                                         |
     | :------------ | :------------------------------------------------ | :----------------------------------------------------------- |
     | `id`          | 所有元素                                          | 为元素指定唯一的标识符。                                     |
     | `class`       | 所有元素                                          | 为元素指定一个或多个类名，用于 CSS 或 JavaScript 选择。      |
     | `style`       | 所有元素                                          | 直接在元素上应用 CSS 样式。                                  |
     | `title`       | 所有元素                                          | 为元素提供额外的提示信息，通常在鼠标悬停时显示。             |
     | `data-*`      | 所有元素                                          | 用于存储自定义数据，通常通过 JavaScript 访问。               |
     | `href`        | `<a>`, `<link>`                                   | 指定链接的目标 URL。                                         |
     | `src`         | `<img>`, `<script>`, `<iframe>`                   | 指定外部资源（如图片、脚本、框架）的 URL。                   |
     | `alt`         | `<img>`                                           | 为图像提供替代文本，当图像无法显示时显示。                   |
     | `type`        | `<input>`, `<button>`                             | 指定输入控件的类型（如 `text`, `password`, `checkbox` 等）。 |
     | `value`       | `<input>`, `<button>`, `<option>`                 | 指定元素的初始值。                                           |
     | `disabled`    | 表单元素                                          | 禁用元素，使其不可交互。                                     |
     | `checked`     | `<input type="checkbox">`, `<input type="radio">` | 指定复选框或单选按钮是否被选中。                             |
     | `placeholder` | `<input>`, `<textarea>`                           | 在输入框中显示提示文本。                                     |
     | `target`      | `<a>`, `<form>`                                   | 指定链接或表单提交的目标窗口或框架（如 `_blank` 表示新标签页）。 |
     | `readonly`    | 表单元素                                          | 使输入框只读。                                               |
     | `required`    | 表单元素                                          | 指定输入字段为必填项。                                       |
     | `autoplay`    | `<audio>`, `<video>`                              | 自动播放媒体。                                               |
     | `onclick`     | 所有元素                                          | 当用户点击元素时触发 JavaScript 事件。                       |
     | `onmouseover` | 所有元素                                          | 当用户将鼠标悬停在元素上时触发 JavaScript 事件。             |
     | `onchange`    | 表单元素                                          | 当元素的值发生变化时触发 JavaScript 事件。                   |

  2. 全局属性

     全局属性是所有 HTML 元素都可以使用的属性。

     - `id`：为元素指定唯一的标识符。

     - `class`：为元素指定一个或多个类名，用于 CSS 或 JavaScript 选择。

     - `style`：用于直接在元素上应用 CSS 样式。

     - `title`：为元素提供额外的提示信息，通常在鼠标悬停时显示。

     - `data-\*`：用于存储自定义数据，通常通过 JavaScript 访问。

  3. 特定元素的属性

     某些属性仅适用于特定的 HTML 元素。

     - **`href`**（用于 `<a>` 和 `<link>` 元素）：指定链接的目标 URL。
     - **`src`**（用于 `<img>`, `<script>`, `<iframe>` 等元素）：指定外部资源的 URL。
     - alt（用于 `<img>` 元素）：为图像提供替代文本，当图像无法显示时显示。
     - **`type`**（用于 `<input>` 和 `<button>` 元素）：指定输入控件的类型。
     - **`value`**（用于 `<input>`, `<button>`, `<option>` 等元素）：指定元素的初始值。
     - disabled（用于表单元素）：禁用元素，使其不可交互。
     - **`checked`**（用于 `<input type="checkbox">` 和 `<input type="radio">`）：指定复选框或单选按钮是否被选中。
     - **`laceholder`**（用于 `<input>` 和 `<textarea>` 元素）：在输入框中显示提示文本。
     - **`target`**（用于 `<a>` 和 `<form>` 元素）：指定链接或表单提交的目标窗口或框架。

  4. 布尔属性

     布尔属性是指不需要值的属性，它们的存在即表示 true，不存在则表示 false。

     - `disabled`：禁用元素。
     - `readonly`：使输入框只读。
     - `required`：指定输入字段为必填项。
     - `autoplay`（用于 `<audio>` 和 `<video>` 元素）：自动播放媒体。

  5. 自定义属性

     HTML5 引入了 **data-\*** 属性，允许开发者自定义属性来存储额外的数据。

     - **data-\***：用于存储自定义数据，通常通过 JavaScript 访问。

       eg:

       ```
       <div data-user-id="12345" data-role="admin">User Info</div>
       ```

       

  6. 事件处理属性

     HTML 元素可以通过事件处理属性来响应特定的事件，如点击、鼠标悬停等。

     - **onclick**：当用户点击元素时触发。

       eg:

       ```
       <button onclick="alert('Button clicked!')">Click Me</button>
       ```

     - **onmouseover**：当用户将鼠标悬停在元素上时触发。

       eg:

       ```
       <div onmouseover="this.style.backgroundColor='yellow'">Hover over me</div>
       ```

     - **onchange**：当元素的值发生变化时触发。

       eg:

       ```
       <input type="text" onchange="alert('Value changed!')">
       ```



---



## HTML 标题

在 HTML 文档中，标题很重要。

- 标题

  标题（Heading）是通过 `<h1>` - `<h6>` 标签进行定义的。

  `<h1> `定义最大的标题。` <h6> `定义最小的标题。

  eg:

  ```
  <h1>这是一个标题。</h1>
  <h2>这是一个标题。</h2>
  <h3>这是一个标题。</h3>
  ```

- 重要性

  1. 请确保将 HTML 标题 标签只用于标题。不要仅仅是为了生成**粗体**或**大号**的文本而使用标题。

  2. 搜索引擎使用标题为您的网页的结构和内容编制索引。

  3. 因为用户可以通过标题来快速浏览您的网页，所以用标题来呈现文档结构是很重要的。

  4. 应该将 h1 用作主标题（最重要的），其后是 h2（次重要的），再其次是 h3，以此类推。

- 水平线

  `<hr>` 标签在 HTML 页面中创建水平线。

  hr 元素可用于分隔内容。

  eg：

  ```
  <p>这是一个段落。</p>
  <hr>
  <p>这是一个段落。</p>
  <hr>
  <p>这是一个段落。</p>
  ```

- 注释

  1. 可以将注释插入 HTML 代码中，这样可以提高其可读性，使代码更易被人理解。浏览器会忽略注释，也不会显示它们。

  2. 写法：开始括号之后（左边的括号）需要紧跟一个叹号 **!** (英文标点符号)，结束括号之前（右边的括号）不需要，合理地使用注释可以对未来的代码编辑工作产生帮助。

     eg：

     ```
     <!-- 这是一个注释 -->
     ```

- 提示：-如何查看源代码

  需要单击右键，然后选择"查看源文件"（IE）或"查看页面源代码"（Firefox），其他浏览器的做法也是类似的。这么做会打开一个包含页面 HTML 代码的窗口。



---



## HTML 段落

HTML 可以将文档分割为若干段落。

- 段落

  段落是通过 `<p>`标签定义的。

  eg：

  ```
  <p>这是一个段落 </p>
  <p>这是另一个段落</p>
  ```

  注意：

  1. 浏览器会自动地在段落的前后添加空行。（`</p>` 是块级元素）
  2. 不要忘记结束标签

- 折行

  如果想在不产生一个新段落的情况下进行换行（新行），请使用 `<br>` 标签：

  eg:

  ```
  <p>这个<br>段落<br>演示了分行的效果</p>
  ```

- 输出

  HTML 被显示的确切效果。屏幕的大小，以及对窗口的调整都无法确定。浏览器会移除源代码中多余的空格和空行。所有连续的空格或空行都会被算作一个空格！

- 实践

  ![a](D:\屏幕截图 2026-04-05 135544.png)



---



## HTML 文本格式化

- 文本格式化标签

  | 标签                                                     | 描述         |
  | :------------------------------------------------------- | :----------- |
  | [<b>](https://www.runoob.com/tags/tag-b.html)            | 定义粗体文本 |
  | [<em>](https://www.runoob.com/tags/tag-em.html)          | 定义着重文字 |
  | [<i>](https://www.runoob.com/tags/tag-i.html)            | 定义斜体字   |
  | [<small>](https://www.runoob.com/tags/tag-small.html)    | 定义小号字   |
  | [<strong>](https://www.runoob.com/tags/tag-strong.html)  | 定义加重语气 |
  | [<sub>](https://www.runoob.com/tags/tag-sub.html)        | 定义下标字   |
  | [<sup>](https://www.runoob.com/html/m/tags/tag-sup.html) | 定义上标字   |
  | [<ins>](https://www.runoob.com/tags/tag-ins.html)        | 定义插入字   |
  | [<del>](https://www.runoob.com/tags/tag-del.html)        | 定义删除字   |

- HTML 计算机输出标签

  | 标签                                                | 描述               |
  | :-------------------------------------------------- | :----------------- |
  | [<code>](https://www.runoob.com/tags/tag-code.html) | 定义计算机代码     |
  | [<kbd>](https://www.runoob.com/tags/tag-kbd.html)   | 定义键盘码         |
  | [<samp>](https://www.runoob.com/tags/tag-samp.html) | 定义计算机代码样本 |
  | [<var>](https://www.runoob.com/tags/tag-var.html)   | 定义变量           |
  | [<pre>](https://www.runoob.com/tags/tag-pre.html)   | 定义预格式文本     |

- HTML 引文&引用&标签定义

  | 标签                                                         | 描述               |
  | :----------------------------------------------------------- | :----------------- |
  | [<abbr>](https://www.runoob.com/tags/tag-abbr.html)          | 定义缩写           |
  | [<address>](https://www.runoob.com/tags/tag-address.html)    | 定义地址           |
  | [bdo](https://www.runoob.com/tags/tag-bdo.html)              | 定义文字方向       |
  | [<blockquote>](https://www.runoob.com/tags/tag-blockquote.html) | 定义长的引用       |
  | [<q>](https://www.runoob.com/tags/tag-q.html)                | 定义短的引用语     |
  | [<cite>](https://www.runoob.com/tags/tag-cite.html)          | 定义引用、引证     |
  | [<dfn>](https://www.runoob.com/tags/tag-dfn.html)            | 定义一个定义项目。 |



---



## HTML 链接

- 链接

  1. 介绍

     - 是网页之间跳转的核心部分。
     - 可与网络上的另一个文档相连。
     - 是一种用于在不同网页之间导航的元素。
     - 通常用于将一个网页与另一个网页或资源（如文档、图像、音频文件等）相关联。
     - 允许用户在浏览网页时单击文本或图像来跳转到其他位置，从而实现网页之间的互联。
     - 通过 [<a>](https://www.runoob.com/tags/tag-a.html) 标签创建，通常用于将用户从一个页面导航到另一个页面、从一个部分跳转到页面中的另一个部分、下载文件、打开电子邮件应用程序或执行 JavaScript 函数等。

  2. 基本语法

     - `<a>` 标签：定义了一个超链接（anchor）。它是 HTML 中用来创建可点击链接的主要标签。

     - `href` 属性：指定目标 URL，当点击链接时，浏览器将导航到此 URL。

       eg:

       ```
       <a href="URL">链接文本</a>
       ```

       ```
       <a href="/index.html">本文本</a> 是一个指向本网站中的一个页面的链接。</p>
       
       <p><a href="https://www.microsoft.com/">本文本</a> 是一个指向万维网上的页面的链接。</p>
       ```

       

- 超链接

  HTML使用标签` <a>` 来设置超文本链接。

  超链接可以是一个字，一个词，或者一组词，也可以是一幅图像，可以点击这些内容来跳转到新的文档或者当前文档中的某个部分。

  当把鼠标指针移动到网页中的某个链接上时，箭头会变为一只小手。

  在标签 `<a>` 中使用了 `href` 属性来描述链接的地址。

  默认情况下，链接将以以下形式出现在浏览器中：

  1. 一个未访问过的链接显示为蓝色字体并带有下划线。
  2. 访问过的链接显示为紫色并带有下划线。
  3. 点击链接时，链接显示为红色并带有下划线。

- 链接属性

  `href` 属性描述了链接的目标。

  1. `href`：定义链接目标。

     这是超链接最重要的属性，用来指定链接的目的地，可以是另一个网页、文件、邮件、电话号码或 JavaScript。

     eg:

     ```
     <a href="https://www.example.com">访问 Example</a>
     ```

  2. `target`：定义链接的打开方式

     1. `_blank`: 在新窗口或新标签页中打开链接。

     2. `_self`: 在当前窗口或标签页中打开链接（默认）。

     3. `_parent`: 在父框架中打开链接。

     4. `_top`: 在整个窗口中打开链接，取消任何框架。

        eg:

        ```
        <a href="https://www.example.com" target="_blank" rel="noopener">新窗口打开 Example</a>
        ```

  3. `rel`：定义链接与目标页面的关系

     `nofollow`: 表示搜索引擎不应跟踪该链接，常用于外部链接。

     `noopener` &`noreferrer`: 防止在新标签中打开链接时的安全问题，尤其是使用 target="_blank" 时。

     - `noopener`: 防止新的浏览上下文（页面）访问`window.opener`属性和`open`方法。

     - `noreferrer`: 不发送referer header（即不告诉目标网站你从哪里来的）。

     - `noopener noreferrer`: 同时使用`noopener`和`noreferrer`。

       eg: 

       ```
       <a href="https://www.example.com" rel="noopener noreferrer">安全链接</a>
       ```

  4. download：提示浏览器下载链接目标而不是导航到该目标。

     如果指定了文件名，浏览器会提示下载并保存为指定文件名。

     eg:

     ```
     <a href="file.pdf" download="example.pdf">下载文件</a>
     ```

  5. title：定义链接的额外信息，当鼠标悬停在链接上时显示的工具提示。

     eg:

     ```
     <a href="https://www.example.com" title="访问 Example 网站">访问 Example</a>
     ```

  6. id：用于链接锚点，通常在同一页面中跳转到某个特定位置。

     eg:

     ```
     <!-- 链接到页面中的某个部分 -->
     <a href="#section1">跳转到第1部分</a>
     <div id="section1">这是第1部分</div>
     ```

  7. hreflang: 指定链接的目标URL的语言

     eg:

     ```
     <a href="https://www.example.com/es" hreflang="es">访问西班牙语网站</a>
     ```

  8. type: 指定链接资源的MIME类型

     eg:

     ```
     <a href="style.css" type="text/css">样式表</a>
     ```

  9. class: 用于指定元素的类名（CSS中定义）

     eg:

     ```
     <a href="https://www.example.com" class="external-link">外部链接</a>
     ```

  10. style: 直接在元素上定义CSS样式

      eg:

      ```
      <a href="https://www.example.com" style="color: red;">红色链接</a>
      ```

- 实例

  eg:上面这行代码显示为：`访问菜鸟教程`

  ```
  <a href="https://www.runoob.com/">访问菜鸟教程</a>
  ```

  1. 文本链接：最常见的链接类型是文本链接，它使用 `<a>` 元素将一段文本转化为可点击的链接

     eg:

     ```
     <a href="https://www.example.com">访问示例网站</a>
     ```

  2. 图像链接：还可以使用图像作为链接。在这种情况下，`<a>` 元素包围着 `<img> `元素。

     eg:

     ```
     <a href="https://www.example.com">
       <img src="example.jpg" alt="示例图片">
     </a>
     ```

  3. 锚点链接：除了链接到其他网页外，您还可以在同一页面内创建内部链接，这称为锚点链接。要创建锚点链接，需要在目标位置使用` <a> `元素定义一个标记，并使用#符号引用该标记。

     eg:

     ```
     <a href="#section2">跳转到第二部分</a>
     <!-- 在页面中的某个位置 -->
     <a name="section2"></a>
     ```

  4. 下载链接：如果您希望链接用于下载文件而不是导航到另一个网页，可以使用 download 属性。

     eg:

     ```
     <a href="document.pdf" download>下载文档</a>
     ```

- target属性

  使用 target 属性，你可以定义被链接的文档在何处显示。

  eg:会在新窗口打开文档：

  ```
  <a href="https://www.runoob.com/" target="_blank" rel="noopener noreferrer">访问菜鸟教程!</a>
  ```

- id属性

  id 属性可用于创建一个 HTML 文档书签。书签不会以任何特殊方式显示，即在 HTML 页面中是不显示的，所以对于读者来说是隐藏的。

  eg:

  1. 在HTML文档中插入ID:

     ```
     <a id="tips">有用的提示部分</a>
     ```

  2. 在HTML文档中创建一个链接到"有用的提示部分(id="tips"）"：

     ```
     <a href="#tips">访问有用的提示部分</a>
     ```

  3. 从另一个页面创建一个链接到"有用的提示部分(id="tips"）"：

     ```
     <a href="https://www.runoob.com/html/html-links.html#tips">
     访问有用的提示部分</a>
     ```

- 空连接

  | 方法                        | 作用                       | 是否会跳转 | 场景适用性                   |
  | :-------------------------- | :------------------------- | :--------- | :--------------------------- |
  | `href="#"`                  | 导航到页面顶部             | 是         | 占位符，捕获点击事件         |
  | `href="javascript:void(0)"` | 阻止默认行为，不刷新页面   | 否         | 阻止跳转，配合 JS 使用       |
  | `href=""`                   | 刷新当前页面               | 是         | 需要页面刷新时               |
  | `href="about:blank"`        | 打开空白页面               | 是         | 新窗口打开空白页面           |
  | `role="button"`             | 链接表现为按钮，无默认行为 | 否         | 配合 JS 实现按钮功能，无跳转 |

- 注意事项

  请始终将正斜杠添加到子文件夹。像这样`href="https://www.runoob.com/html/"。`



---



## HTML 头部

| 标签                                                    | 描述                               |
| :------------------------------------------------------ | :--------------------------------- |
| [<head>](https://www.runoob.com/tags/tag-head.html)     | 定义了文档的信息                   |
| [<title>](https://www.runoob.com/tags/tag-title.html)   | 定义了文档的标题                   |
| [<base>](https://www.runoob.com/tags/tag-base.html)     | 定义了页面链接标签的默认链接地址   |
| [<link>](https://www.runoob.com/tags/tag-link.html)     | 定义了一个文档和外部资源之间的关系 |
| [<meta>](https://www.runoob.com/tags/tag-meta.html)     | 定义了HTML文档中的元数据           |
| [<script>](https://www.runoob.com/tags/tag-script.html) | 定义了客户端的脚本文件             |
| [<style>](https://www.runoob.com/tags/tag-style.html)   | 定义了HTML文档的样式文件           |

- `<head>`元素

  1. `<head>` 元素包含了所有的头部标签元素。

  2. 在 `<head>`元素中你可以插入脚本（scripts）, 样式文件（CSS），及各种meta信息。

  3. 可以添加在头部区域的元素标签为:` <title>`,` <style>`, `<meta>`, `<link>`, `<script>`, `<noscript>` 和 `<base>`。

- `<title>`元素

  1. `<title>` 标签定义了不同文档的标题。

  2. `<title> `在 HTML/XHTML 文档中是必需的。

  3. `<title>` 元素:

     - 定义了浏览器工具栏的标题

     - 当网页添加到收藏夹时，显示在收藏夹中的标题

     - 显示在搜索引擎结果页面的标题

       eg:

       ```
       <title>文档标题</title>
       ```

- `<base>`元素

  描述了基本的链接地址/链接目标，该标签作为HTML文档中所有的链接标签的默认链接

  eg：

  ```
  <head>
  <base href="http://www.runoob.com/images/" target="_blank">
  </head>
  ```

- `<link>`元素

  1. 定义了文档与外部资源之间的关系。

  2. 通常用于链接到样式表

     eg:

     ```
     <head>
     <link rel="stylesheet" type="text/css" href="mystyle.css">
     </head>
     ```

- `<style>`元素

  1. 定义了HTML文档的样式文件引用地址.

  2. 可以直接添加样式来渲染 HTML 文档。

     eg：

     ```
     <head>
     <style type="text/css">
     body {
         background-color:yellow;
     }
     p {
         color:blue
     }
     </style>
     </head>
     ```

- `<meta>`元素

  1. 描述了一些基本的元数据。
  2. 提供了元数据.元数据也不显示在页面上，但会被浏览器解析。
  3. 通常用于指定网页的描述，关键词，文件的最后修改时间，作者，和其他元数据。元数据可以使用于浏览器（如何显示内容或重新加载页面），搜索引擎（关键词），或其他web服务。
  4. 一般放置于` <head> `区域.

  eg:

  1. 为搜索引擎定义关键词。

     eg:

     ```
     <meta name="keywords" content="HTML, CSS, XML, XHTML, JavaScript">
     ```

  2. 为网页定义描述内容。

     eg:

     ```
     <meta name="description" content="免费 Web & 编程 教程">
     ```

  3. 定义网页作者。

     eg:

     ```
     <meta name="author" content="Runoob">
     ```

  4. 每30秒钟刷新当前页面。

     eg:

     ```
     <meta http-equiv="refresh" content="30">
     ```

- `<script>`元素

  1. 用于加载脚本文件，如： JavaScript。

     

---



## HTML CSS

- 如何使用CSS

  CSS 可以通过以下方式添加到HTML中：

  1. 内联样式- 在HTML元素中使用"style" 属性
  2. 内部样式表 -在HTML文档头部 `<head> `区域使用`<style> `元素 来包含CSS
  3. 外部引用 - 使用外部 CSS 文件.（最好）

- 内联样式

  当特殊的样式需要应用到个别元素时，就可以使用内联样式。 使用内联样式的方法是在相关的标签中使用样式属性。样式属性可以包含任何 CSS 属性。

  eg：如何改变段落的颜色和左外边距。

  ```
  <p style="color:blue;margin-left:20px;">这是一个段落。</p>
  ```

- 样式实例

  1. 背景颜色

     背景色属性）定义一个元素的背景颜色

     eg：

     ```
     <body style="background-color:yellow;"> <h2 style="background-color:red;">这是一个标题</h2> <p style="background-color:green;">这是一个段落。</p> </body>
     ```

  2. 字体&字体颜色&字体大小

     可以使用font-family（字体），color（颜色），和font-size（字体大小）属性来定义字体的样式

     eg：

     ```
     <h1 style="font-family:verdana;">一个标题</h1>
     <p style="font-family:arial;color:red;font-size:20px;">一个段落。</p>
     ```

  3. 文本对齐方式

     使用 text-align（文字对齐）属性指定文本的水平与垂直对齐方式

     eg：

     ```
     <h1 style="text-align:center;">居中对齐的标题</h1>
     <p>这是一个段落。</p>
     ```

- 样式表

  1. 内部

     当单个文件需要特别样式时，就可以使用内部样式表。可以在`<head>` 部分通过 `<style>`标签定义内部样式表

     eg:

     ```
     <head>
     <style type="text/css">
     body {background-color:yellow;}
     p {color:blue;}
     </style>
     </head>
     ```

  2. 外部

     当样式需要被应用到很多页面的时候，外部样式表将是理想的选择。使用外部样式表，就可以通过更改一个文件来改变整个站点的外观。

     eg:

     ```
     <head>
     <link rel="stylesheet" type="text/css" href="mystyle.css">
     </head>
     ```

- 样式标签

  | 标签                                                  | 描述             |
  | :---------------------------------------------------- | :--------------- |
  | [<style>](https://www.runoob.com/tags/tag-style.html) | 定义文本样式     |
  | [<link>](https://www.runoob.com/tags/tag-link.html)   | 定义资源引用地址 |



---



## HTML 图像

- 图像标签`<img>`&源属性`<src>`

  1. 介绍

     - 在 HTML 中，图像由`<img>` 标签定义。

     - `<img>` 是空标签，意思是说，它只包含属性，并且没有闭合标签。

     - 要在页面上显示图像，就需要使用源属性（src）。src 指 "source"。源属性的值是图像的 URL（存储图像的位置） 地址。

  2. 语法

     ```
     <img src="url" alt="some_text">
     ```

  3. 注意：
     - 如果名为 "pulpit.jpg" 的图像位于 `www.runoob.com `的 images 目录中，那么其 URL 为 `[http://www.runoob.com/images/pulpit.jpg](https://www.runoob.com/images/pulpit.jpg)`。
     - 浏览器将图像显示在文档中图像标签出现的地方。如果你将图像标签置于两个段落之间，那么浏览器会首先显示第一个段落，然后显示图片，最后显示第二段。

- Alt属性

  1. alt 属性用来为图像定义一串预备的可替换的文本。替换文本属性的值是用户定义的。

     eg:

     ```
     <img src="boat.gif" alt="Big Boat">
     ```

- 设置图像的高度&宽度

  height（高度） 与 width（宽度）属性用于设置图像的高度与宽度。如果没有指定图片的大小，加载页面时有可能会破坏HTML页面的整体布局。

  属性值默认单位为像素:

  eg:

  ```
  <img src="pulpit.jpg" alt="Pulpit rock" width="304" height="228">
  ```

- 注意：

  1. 假如某个 HTML 文件包含十个图像，那么为了正确显示这个页面，需要加载 11 个文件。加载图片是需要时间的，所以图片慎用。
  2.  加载页面时，要注意插入页面图像的路径，如果不能正确设置图像的位置，浏览器无法加载图片，图像标签就会显示一个破碎的图片。

- 图像标签

| 标签                                                | 描述                       |
| :-------------------------------------------------- | :------------------------- |
| [<img>](https://www.runoob.com/tags/tag-img.html)   | 定义图像                   |
| [<map>](https://www.runoob.com/tags/tag-map.html)   | 定义图像地图               |
| [<area>](https://www.runoob.com/tags/tag-area.html) | 定义图像地图中的可点击区域 |



---



## HTML 表格

- 表格

  1. 由` <table>` 标签来定义。

  2.   是一种用于展示结构化数据的标记语言元素。

  3. 每个表格均有若干行（由 `<tr> `标签定义），每行被分割为若干单元格（由 `<td>` 标签定义），表格可以包含标题行（`<th>`）用于定义列的标题。

     eg:

     - `tr`：tr 是 table row 的缩写，表示表格的一行。

     - `td`：td 是 table data 的缩写，表示表格的数据单元格。

     - `th`：th 是 table header的缩写，表示表格的表头单元格。通过使用 <th > 元素定义列标题，可以使其在表格中以粗体显示，与普通单元格区分开来。

     - 数据单元格可以包含文本、图片、列表、段落、表单、水平线、表格等等.

     - HTML 表格生成器：https://www.jyshare.com/front-end/7688/。

     - `<thead >`用于定义表格的标题部分:在 `<thead >` 中，使用 `<th > `元素定义列的标题，以上实例中列标题分别为"列标题1"，"列标题2"和"列标题3"。

     - `<tbody >` 用于定义表格的主体部分: 在 `<tbody > `中，使用 `<tr > `元素定义行，并在每行中使用`<td > `元素定义单元格数据，以上实例中有两行数据，每行包含三个单元格。

     - 边框属性

       如果不定义边框属性，表格将不显示边框。

       eg：

       ```
       <table border="1"> <tr> <td>Row 1, cell 1</td> <td>Row 1, cell 2</td> </tr> </table>
       ```

     - 表头

       表格的表头使用 `<th> `标签进行定义。

       eg:

       ```
       <table border="1"> <tr> <th>Header 1</th> <th>Header 2</th> </tr> <tr> <td>row 1, cell 1</td> <td>row 1, cell 2</td> </tr> <tr> <td>row 2, cell 1</td> <td>row 2, cell 2</td> </tr> </table>
       ```

     - 表格标签

       | 标签       | 描述                 |
       | ---------- | -------------------- |
       | <table>    | 定义表格             |
       | <th>       | 定义表格的表头       |
       | <tr>       | 定义表格的行         |
       | <td>       | 定义表格单元         |
       | <caption>  | 定义表格标题         |
       | <colgroup> | 定义表格列的组       |
       | <col>      | 定义用于表格列的属性 |
       | <thead>    | 定义表格的页眉       |
       | <tbody>    | 定义表格的主体       |
       | <tfoot>    | 定义表格的页脚       |

     - 更多实例



---



## HTML 列表

- 无序列表

  无序列表是一个项目的列表，此列项目使用粗体圆点（典型的小黑圆圈）进行标记。使用 `<ul> `标签。

  eg:

  ```
  <ul>
  <li>Coffee</li>
  <li>Milk</li>
  </ul>
  ```

- 有序列表

  有序列表始于` <ol>` 标签。每个列表项始于` <li> `标签。列表项使用数字来标记。

  eg:

  ```
  <ol>
  <li>Coffee</li>
  <li>Milk</li>
  </ol>
  ```

- 自定义列表

  不仅仅是一列项目，而是项目及其注释的组合。自定义列表以` <dl>` 标签开始。每个自定义列表项以 `<dt> `开始。每个自定义列表项的定义以` <dd> `开始。

  eg:

  ```
  <dl>
  <dt>Coffee</dt>
  <dd>- black hot drink</dd>
  <dt>Milk</dt>
  <dd>- white cold drink</dd>
  </dl>
  ```

- 注意事项：

  列表项内部可以使用段落、换行符、图片、链接以及其他列表等等。

- 列表标签

  | 标签                                            | 描述                 |
  | :---------------------------------------------- | :------------------- |
  | [<ol>](https://www.runoob.com/tags/tag-ol.html) | 定义有序列表         |
  | [<ul>](https://www.runoob.com/tags/tag-ul.html) | 定义无序列表         |
  | [<li>](https://www.runoob.com/tags/tag-li.html) | 定义列表项           |
  | [<dl>](https://www.runoob.com/tags/tag-dl.html) | 定义列表             |
  | [<dt>](https://www.runoob.com/tags/tag-dt.html) | 自定义列表项目       |
  | [<dd>](https://www.runoob.com/tags/tag-dd.html) | 定义自定列表项的描述 |



---



## HTML 区块

HTML 可以通过 `<div> `和 `<span>`将元素组合起来。

- 区块元素

  大多数 HTML 元素被定义为块级元素或内联元素。块级元素在浏览器显示时，通常会以新行来开始（和结束）。

  eg:

  ```
  <h1>, <p>, <ul>, <table>
  ```

- 内联元素

  内联元素在显示时通常不会以新行开始。

  eg:

  ```
  <b>, <td>, <a>, <img>
  ```

- `<div>`元素

  块级元素，它可用于组合其他 HTML 元素的容器。如果与 CSS 一同使用，`<div> `元素可用于对大的内容块设置样式属性。

  `<div> `元素的另一个常见的用途是文档布局。它取代了使用表格定义布局的老式方法。使用 `<table>` 元素进行文档布局不是表格的正确用法。`<table> `元素的作用是显示表格化的数据。

- `<span>`元素

  内联元素，可用作文本的容器。当与 CSS 一同使用时，<span> 元素可用于为部分文本设置样式属性。

- 分组标签

  | 标签                                                | 描述                                        |
  | :-------------------------------------------------- | :------------------------------------------ |
  | [<div>](https://www.runoob.com/tags/tag-div.html)   | 定义了文档的区域，块级 (block-level)        |
  | [<span>](https://www.runoob.com/tags/tag-span.html) | 用来组合文档中的行内元素， 内联元素(inline) |

  

---



## HTML 布局

网页布局对改善网站的外观非常重要。

- 网站布局

  大多数网站会把内容安排到多个列中（就像杂志或报纸那样）。

  大多数网站可以使用` <div>` 或者` <table> `元素来创建多列。CSS 用于对元素进行定位，或者为页面创建背景以及色彩丰富的外观。

-   使用`<div>`元素

  div 元素是用于分组 HTML 元素的块级元素。

- 使用表格

  使用 HTML `<table> `标签是创建布局的一种简单的方式。

  大多数站点可以使用 <div> 或者 <table> 元素来创建多列。CSS 用于对元素进行定位，或者为页面创建背景以及色彩丰富的外观。

- 布局标签

  | 标签                                                | 描述                                  |
  | :-------------------------------------------------- | :------------------------------------ |
  | [<div >](https://www.runoob.com/tags/tag-div.html)  | 定义文档区块，块级(block-level)       |
  | [<span>](https://www.runoob.com/tags/tag-span.html) | 定义 span，用来组合文档中的行内元素。 |



---



## HTML 表单

- 表单&输入

  1. HTML 表单用于收集用户的输入信息。
  2. HTML 表单表示文档中的一个区域，此区域包含交互控件，将用户收集到的信息发送到 Web 服务器。
  3. HTML 表单通常包含各种输入字段、复选框、单选按钮、下拉列表等元素。

  eg:

  1. `<form>` 元素用于创建表单，`action` 属性定义了表单数据提交的目标 URL，`method` 属性定义了提交数据的 HTTP 方法（这里使用的是 "post"）。
  2. `<label>` 元素用于为表单元素添加标签，提高可访问性。
  3. `<input>` 元素是最常用的表单元素之一，它可以创建文本输入框、密码框、单选按钮、复选框等。`type` 属性定义了输入框的类型，`id` 属性用于关联 `<label>` 元素，`name` 属性用于标识表单字段。
  4. `<select>` 元素用于创建下拉列表，而 `<option>` 元素用于定义下拉列表中的选项。

- 表单

  1. 表单是一个包含表单元素的区域。

  2. 表单元素是允许用户在表单中输入内容，比如：文本域（textarea）、下拉列表（select）、单选框（radio-buttons）、复选框（checkbox） 等等。

     eg:

     ```
     <form>
     .
     input 元素
     .
     </form>
     ```

- 输入元素

  多数情况下被用到的表单标签是输入标签` <input>`。

  输入类型是由 `type`属性定义。

  1. 文本域

     文本域通过 `<input type="text">`标签来设定，当用户要在表单中键入字母、数字等内容时，就会用到文本域。

     eg:

     ```
     <form>
     First name: <input type="text" name="firstname"><br>
     Last name: <input type="text" name="lastname">
     </form>
     ```

     <form>
     First name: <input type="text" name="firstname"><br>
     Last name: <input type="text" name="lastname">
     </form>

  2. 密码字段

     密码字段通过标签 `<input type="password">` 来定义:

     eg:

     ```
     <form>
     Password: <input type="password" name="pwd">
     </form>
     ```

     <form>
         Password: <input type="password" name="pwd">
     </form>

  3. 单选按钮

     `<input type="radio">` 标签定义了表单的单选框选项:

     eg:

     ```
     <form action="">
     <input type="radio" name="sex" value="male">男<br>
     <input type="radio" name="sex" value="female">女
     </form>
     ```

     <form action="">
     <input type="radio" name="sex" value="male">男<br>
     <input type="radio" name="sex" value="female">女
     </form>

  4. 复选框

     `<input type="checkbox">`定义了复选框。

     复选框可以选取一个或多个选项：

     eg:

     ```
     <form>
     <input type="checkbox" name="vehicle[]" value="Bike">我喜欢自行车<br>
     <input type="checkbox" name="vehicle[]" value="Car">我喜欢小汽车
     </form>
     ```

     <form>
     <input type="checkbox" name="vehicle[]" value="Bike">我喜欢自行车<br>
     <input type="checkbox" name="vehicle[]" value="Car">我喜欢小汽车
     </form>

  5. 提交按钮

  `<input type="submit">`定义了提交按钮。

  当用户单击确认按钮时，表单的内容会被传送到服务器。表单的动作属性 `action`定义了服务端的文件名。

  `action` 属性会对接收到的用户输入数据进行相关的处理

  eg:

  ```
  <form name="input" action="html_form_action.php" method="get">
  Username: <input type="text" name="user">
  <input type="submit" value="Submit">
  </form>
  ```

  <form name="input" action="html_form_action.php" method="get">
  Username: <input type="text" name="user">
  <input type="submit" value="Submit">
  </form>

- 表单标签

  | 标签                                                        | 描述                                         |
  | :---------------------------------------------------------- | :------------------------------------------- |
  | [<form>](https://www.runoob.com/tags/tag-form.html)         | 定义供用户输入的表单                         |
  | [<input>](https://www.runoob.com/tags/tag-input.html)       | 定义输入域                                   |
  | [<textarea>](https://www.runoob.com/tags/tag-textarea.html) | 定义文本域 (一个多行的输入控件)              |
  | [<label>](https://www.runoob.com/tags/tag-label.html)       | 定义了 <input> 元素的标签，一般为输入标题    |
  | [<fieldset>](https://www.runoob.com/tags/tag-fieldset.html) | 定义了一组相关的表单元素，并使用外框包含起来 |
  | [<legend>](https://www.runoob.com/tags/tag-legend.html)     | 定义了 <fieldset> 元素的标题                 |
  | [<select>](https://www.runoob.com/tags/tag-select.html)     | 定义了下拉选项列表                           |
  | [<optgroup>](https://www.runoob.com/tags/tag-optgroup.html) | 定义选项组                                   |
  | [<option>](https://www.runoob.com/tags/tag-option.html)     | 定义下拉列表中的选项                         |
  | [<button>](https://www.runoob.com/tags/tag-button.html)     | 定义一个点击按钮                             |
  | [<datalist>](https://www.runoob.com/tags/tag-datalist.html) | 指定一个预先定义的输入控件选项列表           |
  | [<keygen>](https://www.runoob.com/tags/tag-keygen.html)     | 定义了表单的密钥对生成器字段                 |
  | [<output>](https://www.runoob.com/tags/tag-output.html)     | 定义一个计算结果                             |



---



## HTML 框架

通过使用框架，你可以在同一个浏览器窗口中显示不止一个页面。

- iframe:

  1. 语法

     ```
     <iframe src="URL"></iframe>
     ```

  2. 设置高度&宽度

     height 和 width 属性用来定义iframe标签的高度与宽度，属性默认以像素为单位。

     eg：

     ```
     <iframe src="demo_iframe.htm" width="200" height="200"></iframe>
     ```

  3. 移除边框

     frameborder 属性用于定义iframe表示是否显示边框。

     eg：

     设置属性值为 "0" 移除iframe的边框

     ```
     <iframe src="demo_iframe.htm" frameborder="0"></iframe>
     ```

  4. 显示目标链接页面

     iframe 可以显示一个目标链接的页面，目标链接的属性必须使用 iframe 的属性。

     eg：

     ```
     <iframe src="demo_iframe.htm" name="iframe_a"></iframe>
     <p><a href="https://www.runoob.com" target="iframe_a" rel="noopener">RUNOOB.COM</a></p>
     ```

  5. 标签

     | 标签                                                    | 说明                 |
     | :------------------------------------------------------ | :------------------- |
     | [<iframe>](https://www.runoob.com/tags/tag-iframe.html) | 定义一个内联的iframe |



---



## HTML 颜色

HTML 颜色由红色、绿色、蓝色混合而成。

