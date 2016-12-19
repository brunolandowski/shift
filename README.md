# Shift
Shift in a scroll system based on columns. It allows to scroll in columns with differents speed.

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
## Hide the scrollbar
Hide the scrollbar by using the following code (this only works with Chrome for the moment).
```CSS
::-webkit-scrollbar { 
    display: none; 
}
```
:cyclone::cyclone::cyclone: That's it&#8239;!
