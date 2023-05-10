/* exported getFullNameOfPerson */


function getFullNameOfPerson(person) {
  const me = {
  firstName: "David",
  lastName: "Kyong"
};
  return person.firstName + " " + person.lastName;
}
const getFullNameOfPersonResults = getFullNameOfPerson(me)
console.log(getFullNameOfPersonResults);
