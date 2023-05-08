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

pokemonsSelect.addEventListener("change", function () {
  document.getElementById("name-placeholder").innerHTML =
    pokemonList[pokemonsSelect.selectedIndex].name;

  document.getElementById("type-placeholder").innerHTML =
    pokemonList[pokemonsSelect.selectedIndex].type;

  document.getElementById("evolutionLevel-placeholder").innerHTML =
    pokemonList[pokemonsSelect.selectedIndex].evolutionLevel;

  document.getElementById("otherForms-placeholder").innerHTML =
    pokemonList[pokemonsSelect.selectedIndex].otherForms;
});
