# es6-arrow-functions-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the syntax for defining an arrow function?
  function followed by => expressions or statements.
- When an arrow function's body is not surrounded in curly braces (_concise body syntax_), what changes in its functionality?
  If it is a single expression, it returns the expression without using the word return.
- When using _concise body syntax_, how do you return an object literal?
  By taking away the curly braces, and the return statement.
- In the expression
  `js
    foo(() => 42);
    `
  - Identify the arrow function
    () => 42
  - How many arguments does the arrow function take?
    zero
  - What value does it return?
    returns 42
  - How many arguments are passed to the function `foo`?
    one argument
  - What type of argument is passed to the function `foo`?
    foo function
- In the expression
  `` js
    bar((y) => {
      console.log(`4y = ${4 * y}`);
    });
     `` - Identify the arrow function
  (y) => {console.log(`4y = ${4 * y}`);
  - How many arguments does the arrow function take?
    one argument (y)
  - What value does it return?
    The console.log, y is not given a value though
  - How many arguments are passed to the function `bar`?
    one argument
  - What type of argument is passed to the function `bar`?
    bar function
  - When does the arrow function's code get executed?
    When the bar function begins
- How does the value of `this` differ between standard functions and arrow functions?
  This in a standard function refers to the object that has to do with the function in which it is being called.
  This in a arrow function refers to the object that is only within that arrow function.

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
