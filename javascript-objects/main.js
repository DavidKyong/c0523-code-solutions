let student = {
  firstName: "David",
  lastName: "Kyong",
  age: 26
};
const fullName = student.firstName + " " + student.lastName;

console.log("value of fullName:", fullName);

student.livesInIrvine = false;
student.previousOcupation = "KBBQ Waiter";

console.log("value of student.livesInIrvine:", student.livesInIrvine);
console.log("value of previousOcupation:", student.previousOcupation);
console.log("value of student:", student);

let vehicle = {
  make: "Toyota",
  model: "Corolla",
  year: 2016
};
vehicle["color"] = "Silver";
vehicle["isConvertible"] = false;

console.log('value of vehicle["color"]:', vehicle["color"]);
console.log('value of vehicle["isConvertible"]:', vehicle["isConvertible"]);
console.log("value of vehicle:", vehicle);

let pet = {
  name: "Shiloh",
  type: "Beagle"
};
delete pet.name;
delete pet.type;

console.log("value of pet:", pet);
