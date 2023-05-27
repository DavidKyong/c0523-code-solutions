const books = [
  {
    title: 'Me Myself and I',
    author: 'Me',
    isbn: 43543564,
  },
  {
    title: "I don't know",
    author: 'IDK',
    isbn: 45657334,
  },
  {
    title: 'Harry Potter',
    author: 'J.K. Rowling',
    isbn: 23490834,
  },
];

console.log('books:', books);
console.log('typeof books:', typeof books);
console.log('JSON.stringify(books):', JSON.stringify(books));
console.log('typeof JSON.stringify(books):', typeof JSON.stringify(books));


const student = '{"id": 1, "name": "Random Name"}';
console.log('Student:', student);
console.log('typeof student:', typeof student);

const studentChange = JSON.parse(student);
console.log('studentChange:', studentChange);
console.log('typeof studentChange:', typeof studentChange);
