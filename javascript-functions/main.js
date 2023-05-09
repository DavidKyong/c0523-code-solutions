function convertMinutesToSeconds(minutes) {
  const seconds = minutes * 60;
  return seconds;
}
const secondsResults = convertMinutesToSeconds(20);
console.log("value of secondResults:", secondsResults);

function greet(name) {
  return "Hey, " + name;
}
 const greetResults = greet("David");
 console.log("When you see me:", greetResults);

 function getArea(width, height) {
  const area = width * height;
  return area;
 }
 const getAreaResults = getArea(17, 42);
 console.log("Area of the rectangle is:", getAreaResults);

 function getFirstName(person) {
  return person.firstName;
 }
 const getFirstNameResults = getFirstName({firstName: "David", lastName: "Kyong"});
 console.log("My first name is:", getFirstNameResults);

 function getLastElement(array) {
  return array[array.length - 1];
 }
const getLastElementResults = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log("The last value of the array is:", getLastElementResults);
