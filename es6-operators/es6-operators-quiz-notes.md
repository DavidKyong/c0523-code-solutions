# es6-operators-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements?
  They are operators used for boolean statements.
  && operator returns the value of the first falsy operand, or the last truthy operand if all operands are truthy.
  || operator returns the value of the first truthy operand, or the last falsy operand if all operands are falsy.
- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?
  Determines the evaluated part is enough, so it does not need to check the rest of the expression out. It helps because any side effects will not take effect.
- What is the `??` (nullish coalescing) operator and how does it differ from `||`?
  Logical operator that returns its right-hand side operand when its left-hand side operands is null or undefined.
  It only checks for null or undefined, nothing else.
- What is the `?:` (ternary) operator? How does it differ from `if/else`?
  It is basically like an if/else statement, but only using falsy and truthy. Ternary operator is short and simple, while if/else could be both simple and complex.
- What is the `?.` (optional chaining) operator? When would you use it?
  Accesses an object's property or calls a function. To see if the object accessed or function called using the operator is undefined or null.
- What is `...` (spread) syntax? How do you use it with arrays and objects?
  Used to expand or spread the elements of an iterable into another array or object. By using the spread syntax followed by the object or array name.
- What data types can be spread into an array? Into an object?
  Arrays, strings, maps, and objects
- How does spread syntax differ from rest syntax?
  Spread expands an array into its elements, while rest collects mutiple elements and condenses them into a single element.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
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
