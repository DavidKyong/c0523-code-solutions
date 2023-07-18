# fetch-in-react-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- How can `useEffect` be used to load data for a component?
  Whenever there is a change in value for the dependencies, then it would re-render the new information.
- What browser function can be used to make HTTP requests to a server in React?
  fetch method
- How do you use `useEffect` to load component data just once when the component mounts?
  having an empty array of dependencies
- How do you use `useEffect` to load component data every time the data key changes?
  By putting the elements that are changing after re-rendering in the dependencies.
- In a large-scale production app, what are some better alternatives for loading and managing backend data?
  A third party data management library, like react query and vercel swr

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
