async function peopleInfo() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'GET',
    });
    if (!response.ok) {
      response.sendStatus(404);
      throw new Error('Network response was not ok');
    }
    const information = await response.json();
    console.log('Information:', [information]);
  } catch (error) {
    console.error(error);
  }
}

peopleInfo();

async function favPokemon() {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/0', {
      method: 'GET',
    });
    if (!response.ok) {
      response.sendStatus(404);
      throw new Error('Network response was not ok');
    }
    const pokemon = await response.json();
    console.log('Pokemon:', pokemon);
  } catch (error) {
    console.log(error);
  }
}

favPokemon();
