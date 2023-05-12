/* exported reverseWord */
function reverseWord(word) {
  let empty = '';
  for (let i = 0; i < word.length; i++) {
    empty += word[word.length - (i + 1)];
  }
  return empty;
}
