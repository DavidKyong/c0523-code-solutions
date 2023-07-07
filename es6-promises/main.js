import takeAChance from './take-a-chance.js';

takeAChance('David')
  .then((success) => {
    console.log(success);
  })
  .catch((error) => {
    console.log(error.message);
  });
