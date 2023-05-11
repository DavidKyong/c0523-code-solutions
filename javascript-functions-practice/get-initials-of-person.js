/* exported getInitialsOfPerson */
function getInitialsOfPerson(person) {
  return person.firstName.charAt(0) + person.lastName.charAt(0);
}
const lea = {
  firstName: 'Lea',
  lastName: 'Verou',
};

const getInitialsOfPersonResults = getInitialsOfPerson(lea);
console.log(getInitialsOfPersonResults);
