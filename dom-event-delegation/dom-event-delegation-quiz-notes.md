# dom-event-delegation-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `event.target`?
The element that fired the event.
- Why is it possible to listen for events on one element that actually happen its descendent elements?
Cause of the bubbling
- What DOM element property tells you what type of element it is?
.tagName property
- What does the `element.closest()` method take as its argument and what does it return?
The argument is where the what is closest from it and it returns the closests to the element that was called.
- How can you remove an element from the DOM?
using the remove() method
- If you wanted to insert new clickable DOM elements into the page using JavaScript, how could you avoid adding an event listener to every new element individually?
By selecting the parent of that element

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
