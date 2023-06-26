/* exported capitalizeWords */
function capitalizeWords(string) {
  let str = '';
  for (let i = 0; i < string.length; i++) {
    if (i === 0 || string[i - 1] === ' ') {
      str += string[i].toUpperCase();
    } else {
      str += string[i].toLowerCase();
    }
  }
  return str;
}
