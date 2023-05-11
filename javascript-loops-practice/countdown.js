/* exported countdown */
function countdown(number) {
  let i = number;
  const arr = [];
  while (i >= 0) {

    arr.push(i);
    i--;
  }
  return arr;
}
