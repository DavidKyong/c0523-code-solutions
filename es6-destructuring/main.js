const book1 = {
  title: 'Goodnight Punpun',
  author: 'Inio Asano',
  libraryID: 3353,
};

const { title, author, libraryID } = book1;

console.log(
  `The title of the book is ${title}, and the author is ${author}, and the library id is ${libraryID}`
);

const book2 = {
  title: 'Les Fleurs du mal',
  author: 'Charles Baudelaire',
  libraryID: 2345,
};

const { title: name, author: person, libraryID: number } = book2;

console.log(
  `The title of the book is ${name}, the author is ${person}, and the library id is ${number}`
);

const library = [
  {
    title: 'The Road Ahead',
    author: 'Bill Gates',
    libraryID: 1254,
  },
  {
    title: 'Walter Isaacson',
    author: 'Steve Jobs',
    libraryID: 4264,
  },
  {
    title: 'Mockingjay: The Final Book of The Hunger Games',
    author: 'Suzanne Collins',
    libraryID: 3245,
  },
  {
    title: "Dead Dead Demon's De De De De Destruction",
    author: 'Inio Asano',
    libraryID: 1233,
  },
];

const [book3, book4, book5] = library;

console.log(book3);
console.log(book4);
console.log(book5);

const [, , , book6] = library;

console.log(book6);
