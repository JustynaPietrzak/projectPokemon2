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
const selectTagForPokemons = document.querySelector(".pokemons-select");
let optionsTagForPokemon = "";

setPokemonOptionsToSelectTag();
setPokemonDataToTemplate();
handleChangePokemonInSelectTag();

function setPokemonOptionsToSelectTag() {
  pokemonList.forEach((element) => {
    optionsTagForPokemon = `${optionsTagForPokemon} <option class="text-capitalize" value="${element.name}">${element.name}</option>`;
  });
  selectTagForPokemons.innerHTML = optionsTagForPokemon;
}
function handleChangePokemonInSelectTag() {
  selectTagForPokemons.addEventListener("change", () => {
    setPokemonDataToTemplate();
    OnOffButton();
  });
}
function setPokemonDataToTemplate() {
  const selectedPokemon = pokemonList[selectTagForPokemons.selectedIndex];
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
  const addToPokemonListButton = document.querySelector(".add-button");
  const selectedPokemon = pokemonList[selectTagForPokemons.selectedIndex];
  if (
    arrayWithAddedPokemons.find((element) => element.id === selectedPokemon.id)
  ) {
    addToPokemonListButton.disabled = true;
  } else {
    addToPokemonListButton.disabled = false;
  }
}

// Logic for changing pages
// These consts should be the same like classes in template 'cause they're related
const HOME_PAGE = "home";
const YOUR_POKEDEX = "your-pokedex";
const pages = [HOME_PAGE, YOUR_POKEDEX];
const navigationButtons = document.querySelectorAll(".navigation-btn");
let currentPage = HOME_PAGE;

setNameForEachContent();
namingNavigationButtons();
handlingNavigationButtons();

function handlingNavigationButtons() {
  navigationButtons.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      setButtonAsActive(btn);
      displayCurrentPage(event.target.innerHTML);
    });
  });
}
function setNameForEachContent() {
  const contents = document.querySelectorAll(".content");
  contents.forEach((content, index) => content.classList.add(pages[index]));
}
function namingNavigationButtons() {
  navigationButtons.forEach((btn, index) => (btn.innerHTML = pages[index]));
}
function displayCurrentPage(pageName) {
  currentPage = pageName;
  pages.forEach((page) =>
    document.querySelector(`.${page}`).classList.add("d-none")
  );
  document.querySelector(`.${currentPage}`).classList.remove("d-none");
  document.querySelector(`.${currentPage}`).classList.add("d-block");
}
function setButtonAsActive(button) {
  navigationButtons.forEach((btn) => btn.classList.remove("active"));
  button.classList.add("active");
}

// Adding pokemons to table in pokedex
const tableTabWithPokemons = document.querySelector(
  ".table-with-pokemons .table tbody"
);
let arrayWithAddedPokemons = [];

handlingClickAddButton();

function handlingClickAddButton() {
  document
    .querySelector(".add-button")
    .addEventListener("click", handlingLogicWhenAddingPokemon);
}
function updateTemplateTable() {
  let rows = "";

  arrayWithAddedPokemons.forEach((element, index) => {
    rows =
      rows +
      ` <tr>
<th scope="row"><div class="m-md-2  d-flex justify-content-center align-items-center">${
        index + 1
      }</div></th>
<td><div class="m-md-2 d-flex justify-content-center align-items-center"><img class="pokemon-in-table"src="${
        element.src
      }"/></div></td>
<td><div class="m-md-2 d-flex justify-content-center align-items-center">${
        element.name
      }</div></td>
<td><div class="m-md-2 d-flex justify-content-center align-items-center">${
        element.type
      }</div></td>
<td class= "d-none d-md-table-cell"><div class="m-md-2 d-flex justify-content-center align-items-center">${
        element["evolution-level"]
      }</div></td>
<td><div class="m-md-2 d-flex justify-content-center align-items-center"><button onclick="handlingLogicWhenRemovingPokemon(${
        element.id
      })" class="remove-button shadow-lg rounded">Remove</button></div></td>
</tr>`;
  });
  tableTabWithPokemons.innerHTML = rows;
}
function handlingLogicWhenAddingPokemon() {
  const selectedPokemonToAdd = pokemonList[selectTagForPokemons.selectedIndex];

  if (
    !arrayWithAddedPokemons.find((item) => item.id === selectedPokemonToAdd.id)
  ) {
    arrayWithAddedPokemons.push({ ...selectedPokemonToAdd });
    updateTemplateTable();
    OnOffButton();
  }
}

//Removing pokemons from Pokedex table
function handlingLogicWhenRemovingPokemon(id) {
  arrayWithAddedPokemons = arrayWithAddedPokemons.filter(
    (element) => element.id !== id
  );
  updateTemplateTable();
  OnOffButton();
}
