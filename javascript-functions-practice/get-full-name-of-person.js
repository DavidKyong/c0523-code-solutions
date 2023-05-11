/* exported getFullNameOfPerson */

const me = {
  firstName: "David",
  lastName: "Kyong",
};

function getFullNameOfPerson(person) {

  return person.firstName + " " + person.lastName;
}

const getFullNameOfPersonResults = getFullNameOfPerson(me)
console.log(getFullNameOfPersonResults);
