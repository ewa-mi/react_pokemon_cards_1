import React from "react";
import "./App.css";
import Pokemon from "./Pokemon";

const pokemons = [
  {
    name: "Charizard",
    weight: 90,
    awesome: true,
    abilities: ["Blaze", "Solar power", "Tough claws", "Drought"],
  },
  {
    name: "Bulbasaur",
    weight: 6.9,
    awesome: true,
    abilities: ["Overgrow", "Chlorophyll"],
  },
  {
    name: "Mega beedrill",
    weight: 65,
    awesome: false,
    abilities: ["Intimidate", "Unnerve"],
  },
  {
    name: "Mewtwo",
    weight: 122,
    awesome: true,
    abilities: ["Pressure", "Unnerve", "Steadfast", "Insomnia"],
  },
];
function App() {
  return (
    <div className="App">
      <main className="Items">
        {pokemons.map((pokemon) => {
          return (
            <Pokemon
              name={pokemon.name}
              weight={pokemon.weight}
              awesome={pokemon.awesome}
              abilities={pokemon.abilities}
            />
          );
        })}
      </main>
    </div>
  );
}

export default App;
