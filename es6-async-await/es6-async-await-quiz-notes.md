# es6-async-await-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `async` and `await` keywords used for?
  Await is used to indicate that the javascript runtime should wait until the asynchronous function completes.
  Async is a declaration that creates a binding of a new async function to a given name.
- How do `async` and `await` differ from `Promise.then` and `Promise.catch`?

- When do you use `async`?
  When you want to define a function that is going to be asynchronous and returns a promise.
- When do you use `await`? When do you _not_ use `await`? (What happens if you `await` a synchronous function?)
  When you want the stop the async function until a promise is fulfilled or rejected.
  Do not use await inside of a synchronous function. Await has to be inside of a async function.
  Nothing will happen, because synchronous functions do not have promises, so the function will not stop.
- How do you handle errors with `await`?
  By using try/catch
- What do `try`, `catch` and `throw` do? When do you use them?
  Try is used when you know there is a chance of an error.
  Catch is used when an error does occur.
  To manually throw an exception.
- What happens if you forget to use `await` on a Promise? In that case, what happens to the Promise rejection?
  The promise is going to be running continously. Not going to be able to handle the rejection.
- Which style of asynchronous programming do you prefer — callbacks, `Promise.then`, or `async/await`? Why?
  Probably callbacks because that is the one I am used to at the moment. Next would be async/await, because it seems more straightforward to understand and use.

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
