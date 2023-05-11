/* exported addSuffixToAll */
function addSuffixToAll(word, suffix) {
  let arr = [];
  for (let i = 0; i < word.length; i++) {
    arr.push(word[i] + suffix);
  }
  return arr;
}
