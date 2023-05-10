/* exported getDescriptionOfPerson */
function getDescriptionOfPerson(person) {
  const me = {
    name: 'David Kyong',
    occupation: 'Student',
    birthPlace: 'Anaheim, California'
  }
  return person.name + " is a " + person.occupation + " from " + person.birthPlace + ".";
}
const getDescriptionOfPersonResults = getDescriptionOfPerson(me);
console.log(getDescriptionOfPersonResults);
