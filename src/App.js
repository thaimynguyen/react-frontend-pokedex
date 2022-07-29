/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import PokemonList from "./components/PokemonList";
import pokeData from "./pokedata.json";

function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    setPokemon(pokeData["pokemon"]);
  }, []);

  return (
    <div>
      <nav>
        <div className="nav-wrapper">
          <a className="brand-logo center">Pokedex</a>
        </div>
      </nav>
      <a className="waves-effect waves-light btn" id="toggleBtn">
        Toggle height weight
      </a>
      <PokemonList pokemonList={pokemon} />
    </div>
  );
}

export default App;
