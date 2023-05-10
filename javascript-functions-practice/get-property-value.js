/* exported getPropertyValue */
function getPropertyValue(object, key) {
  const lea = {
    firstName: 'Lea Verou',
    occupation: 'software developer',
    birthPlace: 'Lesbos, Greece'
  };
  return object[key];
}
const getPropertyValueResults = getPropertyValue(lea, occupation);
console.log(getPropertyValueResults);
