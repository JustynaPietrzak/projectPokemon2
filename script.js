const pokemonList = [
  {
    id: 1,
    name: "pikachu",
    type: "electric",
    "evolution-level": "1",
    "other-forms": "Raichu",
    src: "https://nexus.traction.one/images/pokemon/pokemon/25.png",
  },
  {
    id: 2,
    name: "bulbasaur",
    type: "grass/poison",
    "evolution-level": "1",
    "other-forms": "Ivysaur, Venusaur",
    src: "https://nexus.traction.one/images/pokemon/pokemon/1.png",
  },
  {
    id: 3,
    name: "charizard",
    type: "fire/flying",
    "evolution-level": "3",
    "other-forms": "none",
    src: "https://nexus.traction.one/images/pokemon/pokemon/6.png",
  },
  {
    id: 4,
    name: "onyx",
    type: "stone",
    "evolution-level": "2",
    "other-forms": "none",
    src: null,
  },
  {
    id: 5,
    name: "caterpie",
    type: "bug/poison",
    "evolution-level": "1",
    "other-forms": "none",
    src: "https://nexus.traction.one/images/pokemon/pokemon/10.png",
  },
  {
    id: 6,
    name: "magikarp",
    type: "water",
    "evolution-level": "1",
    "other-forms": "Gyardos",
    src: "https://nexus.traction.one/images/pokemon/pokemon/129.png",
  },
];

const pokemonsSelect = document.querySelector(".pokemons-select");
let optionsToSelect = "";

pokemonList.forEach((element) => {
  optionsToSelect = `${optionsToSelect} <option class="text-capitalize" value="${element.name}">${element.name}</option>`;
});
pokemonsSelect.innerHTML = optionsToSelect;

pokemonsSelect.addEventListener("change", () => {
  setPokemonDataToTemplate();
  OnOffButton();
});

setPokemonDataToTemplate();

function setPokemonDataToTemplate() {
  const selectedPokemon = pokemonList[pokemonsSelect.selectedIndex];
  for (const property in selectedPokemon) {
    if (property === "src") {
      document.querySelector(".portrait").src = selectedPokemon[property];
    } else if (property !== "id") {
      document.querySelector(`.${property}-placeholder`).innerHTML =
        selectedPokemon[property];
    }
  }
}

function OnOffButton() {
  const addToPokedexButton = document.querySelector(".add-button");
  const selectedPokemon = pokemonList[pokemonsSelect.selectedIndex];
  if (
    arrayWithAddedPokemons.find((element) => element.id === selectedPokemon.id)
  ) {
    addToPokedexButton.disabled = true;
  } else {
    addToPokedexButton.disabled = false;
  }
}

// Logic for changing pages
// These consts should be the same like classes in template 'cause they're related

const HOME_PAGE = "home";
const YOUR_POKEDEX = "your-pokedex";
const pages = [HOME_PAGE, YOUR_POKEDEX];
let currentPage = HOME_PAGE;

const navigationButtons = document.querySelectorAll(".navigation-btn");
navigationButtons.forEach((btn, index) => (btn.innerHTML = pages[index]));

navigationButtons.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    console.log(event.target.innerHTML);
    currentPage = event.target.innerHTML;
    activeButton(btn);
    displayCurrentPage();
  });
});

function displayCurrentPage() {
  pages.forEach((page) =>
    document.querySelector(`.${page}`).classList.add("d-none")
  );
  document.querySelector(`.${currentPage}`).classList.remove("d-none");
  document.querySelector(`.${currentPage}`).classList.add("d-block");
}

function activeButton(button) {
  navigationButtons.forEach((btn) => btn.classList.remove("active"));
  button.classList.add("active");
}

// Adding pokemons to table in pokedex

let arrayWithAddedPokemons = [];

const tableWithPokemons = document.querySelector(
  ".table-with-pokemons .table tbody"
);

function updateTemplateTable() {
  let rows = "";

  arrayWithAddedPokemons.forEach((element, index) => {
    rows =
      rows +
      ` <tr>
<td>${index + 1}</td>
<td><img src="${element.src}"/></td>
<td>${element.name}</td>
<td>${element.type}</td>
<td>${element["evolution-level"]}</td>
<td><button onclick="removePokemon(${
        element.id
      })" class="remove-button m-4 shadow-lg p-1 rounded">Remove</button></td>
</tr>`;
  });
  tableWithPokemons.innerHTML = rows;
}

function addPokemon() {
  const selectedPokemonToAdd = pokemonList[pokemonsSelect.selectedIndex];

  if (
    !arrayWithAddedPokemons.find((item) => item.id === selectedPokemonToAdd.id)
  ) {
    arrayWithAddedPokemons.push({ ...selectedPokemonToAdd });
    updateTemplateTable();
    OnOffButton();
  }
}

document.querySelector(".add-button").addEventListener("click", addPokemon);

//Removing pokemons from Pokedex table

function removePokemon(id) {
  arrayWithAddedPokemons = arrayWithAddedPokemons.filter(
    (element) => element.id !== id
  );
  updateTemplateTable();
  OnOffButton();
}
