/* exported getValues */
function getValues(object) {
  const values = [];
  for (let prop in object) {
    values.push(object[prop]);
  }
  return values;
}
