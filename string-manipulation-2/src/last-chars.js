/* exported lastChars */
function lastChars(length, string) {
  if (length > string.length || string === '') {
    return string;
  } else {
    return string.slice(-length);
  }
}
