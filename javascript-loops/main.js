/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */
function getNumbersToTen() {
  let numbers = [];
  let currentNumber = 1;
  while (currentNumber > 0 && currentNumber <= 10){
    numbers.push(currentNumber);
    currentNumber++;
  }
  return numbers;
}

function getEvenNumbersToTwenty() {
  let evenNumbers = [];
  let currentNumber = 2;
  while (currentNumber % 2 === 0 && currentNumber <= 20){
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }
  return evenNumbers;
}

function repeatWord(word, times) {
  let count = 1;
  let repeated = '';
  while (count <= times) {
    repeated += word;
    count++;
  }
  return repeated;
}

function logEachCharacter(string) {
  for (let i = 0; i < string.length; i++) {
    console.log(string[i]);
  }
}

function doubleAll(numbers) {
  let doubled = [];
  for (let i = 0; i < numbers.length; i++) {
    let double = numbers[i] * 2;
    doubled.push(double);
  }
  return doubled;
}

function getKeys(object) {
  let keys = [];
  for (let prop in object) {
    keys.push(prop);
  }
  return keys;
}

function getValues(object) {
  let values = [];
  for (let prop in object) {
    values.push(object[prop]);
  }
  return values;
}
