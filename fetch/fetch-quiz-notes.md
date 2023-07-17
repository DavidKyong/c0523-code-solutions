# fetch-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What does `fetch()` return?
  Returns a promise that resolves with a response object.
- What is the default request method used by `fetch()`?
  By using the fetch method where the parameter is the resource/URL and then using the json method on the response back.
- How do you specify the request method (`GET`, `POST`, etc.) when calling `fetch`?
  Init object
  By using the second parameter like method: "POST", // \*GET, POST, PUT, DELETE, etc.
- How does `fetch` report errors?
  When a fetch promise will reject with a TypeError.
  Checking if the response.ok has a value of true.
  Promise returned from fetch() wont reject on http erros even if the response is and 404 or 500. Instead, as soon as the server responds with headers, the promise will resolve with the ok property and set the reponse to false if it isnt in 200-299, the promise will only reject on network failure or if anything prevented the request from completing.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
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
