/* exported capitalizeWord */
function capitalizeWord(word) {
  let str = '';
  for (let i = 0; i < word.length; i++) {
    if (word.toLowerCase() === 'javascript') {
      console.log('hi');
      str = 'JavaScript';
    } else if (word[i] === word[0]) {
      str += word[i].toUpperCase();
    } else if (word[i] !== word[0]) {
      str += word[i].toLowerCase();
    }
  }
  return str;
}
