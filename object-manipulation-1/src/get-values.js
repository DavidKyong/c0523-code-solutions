/* exported getValues */
function getValues(object) {
  const values = [];
  for (const prop in object) {
    values.push(object[prop]);
  }
  return values;
}
