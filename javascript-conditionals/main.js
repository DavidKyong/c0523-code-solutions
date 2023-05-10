/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */

function isUnderFive(number) {
  if (number < 5) {
    return true;
  } else {
    return false;
  }
}


function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}


function startsWithJ(string) {
  if (string.charAt(0) === "J") {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrink(person) {

  if (person.age >= 21) {
    return true;
  } else {
    return false;
  }
}


function isOldEnoughToDrive(person) {
  if (person.age >= 16) {
    return true;
  } else {
    return false;
}
}

function isOldEnoughToDrinkAndDrive(person) {
  return false;
}

function categorizeAcidity(pH) {
  if (pH === 7) {
    return 'neutral';
  } else if (pH >= 0 && pH < 7) {
    return 'acid';
  } else if (pH > 7 && pH <= 14) {
    return 'base';
  } else {
    return 'invalid pH level';
  }
  }


function introduceWarnerBro(name) {
  switch(name) {
    case "yakko":
    case "wakko": {
      const message = "We're the warner brothers!";
      console.log(message);
      break;
    }
    case "dot": {
      const message = "I'm cute";
      console.log(message);
      break;
    }
    default: {
      console.log('Goodnight everybody');
    }
  }
}


function recommendMovie(genre){
  switch(genre) {
    case 'action':{
      const message = 'Die Hard';
      console.log(message);
      break;
    }
    case 'comedy': {
      const message = 'Ace Ventura';
      console.log(message);
      break;
    }
    case 'horror': {
      const message = 'Ring';
      console.log(message);
      break;
    }
    case 'drama': {
      const message = 'Minari';
      console.log(message);
      break;
    }
    case 'musical': {
      const message = 'High School Musical';
      console.log(message);
      break;
    }
    case 'sci-fi': {
      const message = 'Independence Day';
      console.log(message);
      break;
    }
    default: {
      console.log('Genre not recognized. Choose between action, comedy, horror, drama, musical, or sci-fi.');
      break;
    }
  }
}
