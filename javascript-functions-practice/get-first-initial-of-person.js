/* exported getFirstInitialOfPerson */
function getFirstInitialOfPerson(person) {
  return person.firstName.charAt(0);
}

const lea2 = {
  firstName: 'Lea',
  lastName: 'Verou',
};
const getFirstInitialOfPersonResults = getFirstInitialOfPerson(lea2);
console.log(getFirstInitialOfPersonResults);
