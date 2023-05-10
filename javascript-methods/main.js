const num1 = 1;
const num2 = 2;
const num3 = 3;

const maximumValue = Math.max(num1, num2, num3);
console.log("value of maximumValue:", maximumValue);

const heroes = ['Batman', 'Superman', 'Flash', 'Spiderman'];
let randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;
const randomIndex = Math.floor(randomNumber);

console.log("value of randomIndex:", randomIndex);

const randomHero = heroes[randomIndex];

console.log("value of randomHero:", randomHero);

const library = [
   autoBio = {
    title: 'Me, myself, and I',
    author: 'I dont know who to put'
  },
  bio = {
    title: 'About someone else',
    author: 'I also dont know what to put'
  },
  fantasy = {
    title: 'Harry Potter',
    author: 'J.K. Rowling'
  }
];
const lastBook = library.pop();
console.log("lastBook:", lastBook);

const firstBook = library.shift();
console.log("firstBook:", firstBook);


var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};

library.push(js);
library.unshift(css);
library.splice(1 , 1);

console.log("library:", library)





const fullName = "David Kyong";
const firstAndLastName = fullName.split(' ');

console.log("firstAndLastName:", firstAndLastName);

const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();

console.log("sayMyName:", sayMyName);
