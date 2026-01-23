# Text Elements

**Heading Elements :** It is used to give heading to some section like newspaper/magazine/article heading.

- There are total 6 heading that we can use starting from h1 to h6.
- h1 is the largest and most important heading whereas h6 is the smallest and least
  important heading.

- HTML tags are case-insensitive.

**Note :** Tags are used to provide a better structure to the content.

In HTML even if we write wrong syntax or code than also it will work without any error.

```html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
```

- Heading element provides semantic meaning.We can make the text bigger and bold via CSS.

- Here each heading represents some meaning.

- h1 has the highest priority than h2 than h3 than h4 and so on till h6.

- headings are semantic elements and they provide meaning and they also helps in SEO.
  Each heading level provides the priority.
  The difference between different headings is not because of their size but because of their meaning.

- There should be a single h1 per web page.It's a good practice.

- You cannot use h2 without using h1 , cannot use h4 without using h3 and so on.Try
  to maintain the structure.

- If we skip heading levels than it will confuse both users and search engine.It's good to maintain a proper heirarchial structure for better accessbility.

**p :** it stands for paragraph element.It is used to represent some paragraph content.

- Don't put block elements inside p element.If you do this than it's not the valid HTML.

- p element is also semantic element and p also helps assistive technology , screen
  reader and in SEO.

```html
<p>it contains paragraph content</p>
```

Paragraph get's space at top and bottom.

Paragraph is a block level element but we do not put block level elements
inside it not even p element.

**hr :** it stands for horizontal rule.It creates a horizontal line.
It is used to divide the content.

```html
<hr />
```

**br :** it stands for line break.It is used to break the line or create a new line.

```html
<br />
```

**strong :** It represents strong importance.It makes the text bold.

```html
<strong>This text is bold and has importance</strong>
```

**em :** It represents stressed emphasis.It makes the text italic.

```html
<em>This text is italic and has stressed emphasis</em>
```

**b :** It makes the text bold.

```html
<b>This text is bold</b>
```

**i :** It makes the text italic.

```html
<i>This text is italic</i>
```

**u :** It represents underline text.

```html
<u>This is underlined text</u>
```

**s:** : it represents strikethrough text.It represents that the text is not correct , accurate or relevant.

```html
<s>This is not correct information</s>
```

**sup:** : it represents superscript (lower and upper).

```html
<p>e=mc<sup>2</sup></p>
```

**sub:** : it represents subscript (upper and lower)

```html
<p>H<sub>2</sub>O</p>
```

**pre:** : it represents pre-formatted text that preserves spaces and line breaks.

```html
<pre>
HTML stands for 
    HyperText Markup Language
</pre>
```

**kbd:** : it represents keyboard commands.It stands for keyboard shortcut.

```html
<p>Press <kbd>Ctrl + S</kbd> to save the file</p>
```

**abbr:** : it represents abbreviation or short form.

```html
<p>
  <abbr title="HyperText Markup Language">HTML</abbr>stands for HyperText Markup
  Language.
</p>
```

**mark :** It is used to highlight the text in yellow background color.

```html
<p>It is <mark>highlighted text</mark></p>
```

**small :** It displays the text in smaller size.

```html
<p>This is a <small>smaller text</small></p>
```

**del :** it represents the deleted text.The text is deleted but just for reference we are displaying it using del element.

```html
<p>My favourite color is <del>green</del>red</p>
```

**Inline Styles :** It is a part of CSS but we can use it by using style attribute.
We apply styles to the html elements directly.

```html
<p style="color : red ; background-color : orange ; ">coding is fun</p>
```

**Note :** We can use google fonts for different fonts.
