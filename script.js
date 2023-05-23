const pokemonList = [
	{
		name: "pikachu",
		type: "electric",
		"evolution-level": "1",
		"other-forms": "Raichu",
		src: "https://nexus.traction.one/images/pokemon/pokemon/25.png",
	},
	{
		name: "bulbasaur",
		type: "grass/poison",
		"evolution-level": "1",
		"other-forms": "Ivysaur, Venusaur",
		src: "https://nexus.traction.one/images/pokemon/pokemon/1.png",
	},
	{
		name: "charizard",
		type: "fire/flying",
		"evolution-level": "3",
		"other-forms": "none",
		src: "https://nexus.traction.one/images/pokemon/pokemon/6.png",
	},
	{
		name: "onyx",
		type: "stone",
		"evolution-level": "2",
		"other-forms": "none",
		src: null,
	},
	{
		name: "caterpie",
		type: "bug/poison",
		"evolution-level": "1",
		"other-forms": "none",
		src: "https://nexus.traction.one/images/pokemon/pokemon/10.png",
	},
	{
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

// const displayPokeLibrary = document.querySelector(".page2");

// displayPokeLibrary.addEventListener("click", (e) => {
//   document.getElementsByClassName(".page2").style.display = "none";
// });

// document.getElementsByClassName(".page1").style.display = "none";

// const pokeLibrary = document.querySelector(".page1");

// const yourPokeball = document.querrySelector(".page2");

// const addButton = document.querySelector(".add-button");
// const list = document.querySelector(".pokeball-box");

// addButton.addEventListener("click", (e) => {
//   counter++;
//   const el = document.createElement("div");
//   el.classList.add("element");
//   el.innerText = "To jest element " + counter;
//   list.appendChild(el);
// });

// let counter = 0;
