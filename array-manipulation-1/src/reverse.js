/* exported reverse */
function reverse(array) {
  const arr = [];
  for (let i = 0; i < array.length; i++) {
    arr.push(array[array.length - 1 - i]);
  }
  return arr;
}
