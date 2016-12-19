# Shift
Shift in a scroll system based on columns. It allows to scroll columns with differents speed aiming to scroll all the elements in the same way.

[Download](https://raw.githubusercontent.com/brunolandowski/nexus/master/nexus.js)

[Demo](https://jsfiddle.net/brunolandowski/o0z4L11n/)
## Install
In the following example, `section` is a column.
```HTML 
<section>
    <article></article>
</section>

<section>
    <article></article>
</section>
```
## Style
Be sure to have a column layout. Here, the css will be like.
```CSS 
section {
    width:50%;
    height:100%;
    position:absolute;
    overflow:scroll;
    display: inline-block;
}
section:nth-of-type(2) {
   margin-left:50%;
}
```
Make sure to call `shift.js` after the content just before `</body>`.
```HTML
<script type="text/javascript" src="shift.js"></script>
```

## Initialize it
```JavaScript
$('section').shift();
```
## Hide the scrollbar (this only works on Chrome and Safari)
Hide the scrollbar by using the following code (this only works with Chrome for the moment).
```CSS
::-webkit-scrollbar { 
    display: none; 
}
```
:palm_tree::palm_tree::palm_tree: That's it&#8239;!
