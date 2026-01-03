# Structure Of HTML

&lt;!DOCTYPE html&gt;  
It stands for document declaration.It tells the browser that we are using HTML document and we are using HTML5 document.

DOCTYPE means that document ka type html h.

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

**Meta Elements :** They provide meta data or meta information like keywords ,
description etc about our web page to the browsers which helps them to understand our web page and it improves our ranking.
Metadata means data about data.They improve SEO.

## Structure Of HTML

```html
<!-- It defines the character encoding of the page -->
<meta charset="UTF-8" />

<!-- It represents author  -->
<meta name="author" content="hello world" />

<!-- it represents keywords related to the web page. -->
<meta name="keywords" content="first , second" />

<!-- 
it represents description about the web page.The description is very important as it is visible in the search results when we search something in google.It is also used in SEO. -->
<meta name="description" content="hello everyone" />

<!-- It means when the page loads than set the width of the page equal to the device width and set the initial zoom level of the web page to 1.0 -->
<meta name="viewport" content="width=device-width,initial-scale=1.0" />

<!-- If this line is not written than website won't become responsive and media queries won't work.-->

<!-- It is called as refresh meta element.It will refresh the page after every 5 seconds. -->
<meta http-equiv="refresh" content="5" />

<!-- It is called as redirect meta element.This will refresh the web page after 5 seconds and will redirect to the google website. -->
<meta http-equiv="refresh" content="5;url=https://www.google.com" />

<!-- http-equiv means http-equivivalent. -->

<!-- It means display the website in highest compatibility mode in internet explorer 7 -->
<meta http-equiv="X-UA-Compatible" content="IE=7" />

<!-- It means display the website in highest compatibility mode in edge browser -->
<meta http-equiv="X-UA-Compatible" content="ie=edge" />

<meta name="robots" content="index , follow" />
<!-- By using this our website will rank and the links will followed -->

<!-- If you don't want your website to show in the search result than you can use
below meta tag. -->

<meta name="robots" content="NOINDEX , NOFOLLOW" />
```

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
