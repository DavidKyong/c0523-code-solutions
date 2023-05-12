/* exported getWords */
function getWords(string) {
  if (string.trim() === '') {
    return [];
  }
    return string.split(' ');
}
