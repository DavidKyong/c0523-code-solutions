/* exported getDescriptionOfPerson */
function getDescriptionOfPerson(person) {

  return person.name + " is a " + person.occupation + " from " + person.birthPlace + ".";
}
const me1 = {
  name: 'David Kyong',
  occupation: 'Student',
  birthPlace: 'Anaheim, California',
};

const getDescriptionOfPersonResults = getDescriptionOfPerson(me1);
console.log(getDescriptionOfPersonResults);
