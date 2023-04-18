const pokemonList = [
  {
    name: "Pikachu",
    type: "electric",
    evolutionLevel: "1",
    otherForms: "Raichu",
  },
  {
    name: "Bulbasaur",
    type: "grass/poison",
    evolutionLevel: "1",
    otherForms: "Ivysaur, Venusaur",
  },
  {
    name: "Charizard",
    type: "fire/flying",
    evolutionLevel: "3",
    otherForms: "none",
  },
  { name: "Onyx", type: "stone", evolutionLevel: "2", otherForms: "none" },
  {
    name: "Caterpie",
    type: "bug/poison",
    evolutionLevel: "1",
    otherForms: "none",
  },
  {
    name: "Magikarp",
    type: "water",
    evolutionLevel: "1",
    otherForms: "Gyardos",
  },
];

const pokemonsSelect = document.querySelector(".pokemons-select");
let optionsToSelect = "";

pokemonList.forEach((element) => {
  optionsToSelect = `${optionsToSelect} <option value="${element.name}">${element.name}</option>`;
});
console.log(pokemonsSelect);
pokemonsSelect.innerHTML = optionsToSelect;
