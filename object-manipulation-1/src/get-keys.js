/* exported getKeys */
function getKeys(object) {
  const key = [];
  for (const prop in object) {
    key.push(prop);
  }
  return key;
}
