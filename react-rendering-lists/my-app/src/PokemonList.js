export default function PokemonList({ pokedex }) {
  const pokemonArray = pokedex.map((pokemon) => (
    <li key={pokemon.number}>
      <p>{pokemon.name}</p>
    </li>
  ));

  return <ul>{pokemonArray}</ul>;
}
