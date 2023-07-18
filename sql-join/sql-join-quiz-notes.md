# sql-join-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is a foreign key?
  When another table has the same unique id as another table. They are related to each other. It is one column that links to a table to the other table.

- How do you join two SQL tables? (Provide at least two syntaxes.)
  select \*
  from "products"
  join "suppliers" using ("supplierId");

- How do you temporarily rename columns or tables in a SQL statement?
  select "products"."name" as "product",
  "suppliers"."name" as "supplier"
  from "products"
  join "suppliers" using ("supplierId");
  Using the as to choose what you want to name the column.

- How do you create a one-to-many relationship between two tables?

- How do you create a many-to-many relationship between two tables?

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
