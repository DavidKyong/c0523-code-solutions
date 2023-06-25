# react-state-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are _hooks_ in React?
  Functions that are only available while react is rendering. They let you "hook into" different react features.
- What are the "Rules of Hooks"? (if necessary, re-read the "Pitfall" box in [State](https://react.dev/learn/state-a-components-memory))
  Can only be called at the top level of your components. You can't call hooks inside conditions, loops, or other nested functions.
- What is the purpose of state in React?
  Telling the component to remember something.
- Why can't we just maintain state in a local variable?
  Because everytime it renders, it gets reset.
- What two actions happen when you call a `state setter` function?
  It updates the state value and renders
- When does the local `state variable` get updated with the new value?
  After calling the state setter function.

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
