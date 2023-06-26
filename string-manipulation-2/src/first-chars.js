/* exported firstChars */
function firstChars(length, string) {
  let str = '';
  for (let i = 0; i < length; i++) {
    if (length > string.length || string === '') {
      return string;
    }
    str += string[i];
  }
  return str;
}
