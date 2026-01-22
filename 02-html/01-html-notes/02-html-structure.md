# Structure Of HTML

**DOCTYPE declaration :** It stands for document declaration.It tells the browser that we are using HTML document and we are using HTML5 document.

DOCTYPE means that document ka type html h.

```html
<!DOCTYPE html>
```

**html :** it is the root element of the html document.It contains two child i.e
head and body.

**head :** It is the first child of html element.It contains all the content that is
not visible on the web page.It provides information about the web page to the browser for search engine optimizations.It contains content like meta elements , title tag , scripts and styles etc.

**body :** it is the second child of html element.It contains all the content that
is visible on the browser.

**title :** it represents the title of the web page.It can be seen on the tab of the web page.

**favicon :** it is the icon that is present on the tab of the web page.
it is the icon that is displayed on the tab side.

```html
<link rel="icon" href="favicon.ico" type="image/x-icon" />
<link rel="icon" href="html5.png" type="image/png" />
```

**link element :** it is used to import the styles , favicons and external resources.

```html
<link rel="stylesheet" href="style.css" type="text/css" />
```

Here we are importing stylesheet.

**rel :** it stands for relate or realtionship.

**href (hypertext reference) :** it stands for hypertext reference.It specifies the path of the resource.

**type :** it means type of the resource.

## How browsers determins the language of the content ?

lang attribute is used to specify the language of the html document as well as html element.

**lang = "en" :** it is a attribute that specifies the language of the element content.Here the language of the content is english.
lang is the attribute and en is the code for english language.

Other languages

en/pt/ko/fr/hi etc.

Modern browsers automatically determines the language of the html document without specifying the language.

## What is charset ?

It stands for character set.
A character set is a collection of different characters that we can store in computer.
Ex : ASCII , utf-8 , utf-16 etc.

## What are Attributes ?

Attributes specifies the characteristics of the html element.

Attributes provides additional information about the html elements.

## HTML Structure

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Structure Of HTML</title>
  </head>
  <body></body>
</html>
```
