/* exported getPropertyValue */
function getPropertyValue(object, key) {

  return object[key];
}
const lea1 = {
  firstName: 'Lea Verou',
  occupation: 'software developer',
  birthPlace: 'Lesbos, Greece',
};
const getPropertyValueResults = getPropertyValue(lea, occupation);
console.log(getPropertyValueResults);
