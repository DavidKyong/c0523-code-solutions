# dom-query-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
To make sure it works, and it helps with debugging.
- What is a "model"?
A visual representation showing what object is supposed to look like.
- Which "document" is being referred to in the phrase Document Object Model?
The main entry point to the page
- What is the word "object" referring to in the phrase Document Object Model?
The tags in html
- What is a DOM Tree?
It is a example structure, showing HTML as a tree structure of tags.
- Give two examples of `document` methods that retrieve a single element from the DOM.
QuerySelector and getElementById
- Give one example of a `document` method that retrieves multiple elements from the DOM at once.
QuerySelectorAll
- Why might you want to assign the return value of a DOM query to a variable?
So that when you have to go back to that "variable" you will not have to write all that code again to get it.
- What `console` method allows you to inspect the properties of a DOM element object?
The console.dir
- Why would a `<script>` tag need to be placed at the bottom of the HTML content instead of at the top?
The browser needs to need the html code before it could go to the script tag, otherwise it will not work properly.
- What does `document.querySelector()` take as its argument and what does it return?
The CSS selector and returns the first element for the given css selector.
- What does `document.querySelectorAll()` take as its argument and what does it return?
The CSS selector and returns all elements inside matching the css selector.

## Notes

All student notes should be written here.


How to write `Code Examples` in markdown

for JS:

```javascript
const data = "Howdy";
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
