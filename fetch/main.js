async function peopleInfo() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'GET',
  });
  const information = await response.json();
  console.log('Information:', information);
}

peopleInfo();

async function favPokemon() {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/212', {
    method: 'GET',
  });
  const pokemon = await response.json();
  console.log('Pokemon:', pokemon);
}

favPokemon();
