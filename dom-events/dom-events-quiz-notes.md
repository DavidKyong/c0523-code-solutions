# dom-events-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
To make sure the code works and it helps with debugging.
- What is the purpose of events and event handling?
It is a way for a code to react when stuff in the system just happen.
- Are all possible parameters required to use a JavaScript method or function?
No
- What method of element objects lets you set up a function to be called when a specific type of event occurs?
Dom query
- What is a callback function?
A function passed into another function as an argument.
- What object is passed into an event listener callback when the event fires?
The dom query that was referenced.
- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?
Check the console of the website.
- What is the difference between these two snippets of code?
    ```js
    element.addEventListener('click', handleClick)
    ```
    ```js
    element.addEventListener('click', handleClick())
    ```

First one calls 2 arguments, 1 string, 2nd a function
Second one calls 2 arguments, 1 string, 2nd being a new method?


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
