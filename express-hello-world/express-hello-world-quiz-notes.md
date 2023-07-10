# express-hello-world-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is Express middleware?
  They are functions that have access to the request and response object and the next middleware function in the application's request-response cycle.
- What is Express middleware useful for?
  They are able to make changes to the request and response objects, end the request-response cycle, call the next middle function in the stack.
- How do you mount a middleware with an Express application?
  By using the use method. Is the https method of the request that the middleware function handles such as get put, post in lowercase.
- Which objects does an Express application pass to your middleware to manage the request/response lifecycle of the server?
  The req, res, and next

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
