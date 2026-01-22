# Meta Elements

## What are Meta elements ?

They provide meta data or meta information like keywords , description etc about our web page to the browsers which helps them to understand our web page and it improves our ranking.Metadata means data about data.They improve SEO.

## Different Meta Elements

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
