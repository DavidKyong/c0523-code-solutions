/* exported getFirstInitialOfPerson */
function getFirstInitialOfPerson(person) {
  return person.firstName.charAt(0);
}
const lea = {
  firstName: 'Lea',
  lastName: 'Verou',
};
const getFirstInitialOfPersonResults = getFirstInitialOfPerson(lea);
console.log(getFirstInitialOfPersonResults);
