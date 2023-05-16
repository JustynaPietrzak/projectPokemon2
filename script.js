const pokemonList = [
  {
    name: "pikachu",
    type: "electric",
    "evolution-level": "1",
    "other-forms": "Raichu",
    src: "https://picsum.photos/id/1/150",
  },
  {
    name: "bulbasaur",
    type: "grass/poison",
    "evolution-level": "1",
    "other-forms": "Ivysaur, Venusaur",
    src: "https://picsum.photos/id/2/150",
  },
  {
    name: "charizard",
    type: "fire/flying",
    "evolution-level": "3",
    "other-forms": "none",
    src: "https://picsum.photos/id/3/150",
  },
  {
    name: "onyx",
    type: "stone",
    "evolution-level": "2",
    "other-forms": "none",
    src: "https://picsum.photos/id/4/150",
  },
  {
    name: "caterpie",
    type: "bug/poison",
    "evolution-level": "1",
    "other-forms": "none",
    src: "https://picsum.photos/id/5/150",
  },
  {
    name: "magikarp",
    type: "water",
    "evolution-level": "1",
    "other-forms": "Gyardos",
    src: "https://picsum.photos/id/6/150",
  },
];

const pokemonsSelect = document.querySelector(".pokemons-select");
let optionsToSelect = "";

pokemonList.forEach((element) => {
  optionsToSelect = `${optionsToSelect} <option class="text-capitalize" value="${element.name}">${element.name}</option>`;
});
pokemonsSelect.innerHTML = optionsToSelect;

pokemonsSelect.addEventListener("change", setPokemonDataToTemplate);

setPokemonDataToTemplate();

function setPokemonDataToTemplate() {
  const selectedPokemon = pokemonList[pokemonsSelect.selectedIndex];
  for (const property in selectedPokemon) {
    if (property === "src") {
      document.querySelector(".portrait").src = selectedPokemon[property];
    } else {
      document.querySelector(`.${property}-placeholder`).innerHTML =
        selectedPokemon[property];
    }
  }
}
