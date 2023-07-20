# react-custom-hooks-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is a React custom hook?
  It is a hook that allows users to be able to reuse logic from components. Custom hooks only share stateful logic, not state itself.
- When are custom hooks useful? When are they not required?
  When you have mutiple hooks that will be used in separate components. When you are not going to be using the custom hook anywhere else(only one location/component).
- What is the syntax (or naming convention) for writing a custom hook?
  Has to start with use and the component name has to start with a capital letter.
- How do you call a custom hook?
  To call a custom hook, you simply invoke it as a regular function. Since custom hooks are JavaScript functions, you can call them within a functional component or another custom hook.
- When do custom hooks execute?
  Custom hooks execute whenever they are called. This means that every time you invoke a custom hook, its code is executed from top to bottom. However, it's important to note that custom hooks do not execute on their own or automatically based on any lifecycle event or specific condition.

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
