/* exported getInitialsOfPerson */
function getInitialsOfPerson(person) {
  const lea = {
    firstName: 'Lea',
    lastName: 'Verou',
  };
  return person.firstName.charAt(0) + person.lastName.charAt(0);
}

const getInitialsOfPersonResults = getInitialsOfPerson(lea);
console.log(getInitialsOfPersonResults);
