# react-effects-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- When is a component "mounted" to the DOM?
  When it first gets inserted into the dom.
- What is a React Effect?
  Effects let you run some code after rendering so that you can synchronize your component with some system outside of react.
- When should you use an Effect and when should you not use an Effect?
  When the user wants to synchronize with some external system. When the effect only adjusts some state based on other state. When it does not need to synchronize the component with other systems outside of react.
- When do Effects run?
  Whenever the dependencies value change.
- What function is used to declare an Effect?
  useEffect
- What are Effect dependencies and how do you declare them?
  A list of reactive values referenced inside of the setup code. They include, props, state, and all the variables and functions declared directly inside your component body.
- Why would you want to clean up from an Effect?
  To avoid side effects from happening. Side effect is a function that modifies some state variable value.
- How do you clean up from an Effect?
  By returning a cleanup function. Returning the opposite method type.
- When does the cleanup function run?
  Your setup code runs when your component id added to the page(mount)
  After every re-render of your component where the dependencies have changed
  Your cleanup code runs with the old props and state.
  Your setup code runs with the new props and state.
  The cleanup code runs one final time after your component is removed from the page(unmounts).

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
