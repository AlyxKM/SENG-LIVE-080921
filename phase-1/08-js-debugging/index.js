const pokeContainer = document.getElementById("poke-container");
const pokeForm = document.getElementById("poke-form");

// inspect html to make sure poke-1 is correct id 
// look at the elements tab
// check in console

function renderPokemon(pokemon){
  const pokeCard = document.createElement("div");
  pokeCard.id = `poke-${pokemon.id}`;
  pokeCard.className = "poke-card";

  const pokeImg = document.createElement("img");
  pokeImg.src = pokemon.img;
  pokeImg.alt = `${pokemon.name} image`;

  const pokeName = document.createElement("h3");
  pokeName.textContent = pokemon.name;

  const pokeLikes = document.createElement("h3");
  pokeLikes.textContent = "Likes: ";

  const likesNum = document.createElement("h5");
  likesNum.className = "like-num";
  likesNum.textContent = pokemon.likes;

  const likeBttn = document.createElement("button");
  likeBttn.className = "like-bttn";
  likeBttn.textContent = "♥";
  likeBttn.addEventListener("click", () => increaseLike(pokemon, likesNum));

  const deleteBttn = document.createElement("button");
  deleteBttn.className = "delete-bttn";
  deleteBttn.textContent = "Delete";
  deleteBttn.addEventListener("click", () => deletePoke(pokeCard));

  pokeCard.append(pokeImg, pokeName, pokeLikes, likesNum, likeBttn, deleteBttn);

  pokeContainer.appendChild(pokeCard);
}

function createPokemon(event) {
  event.preventDefault();

  // const pokeCard = document.getElementById('poke-1')
  // console.log(pokeCard)

  let pokeName = pokeForm.querySelector("#name-input").value;
  let pokeImg = pokeForm.querySelector("#img-input").value;

  let pokemon = {
    id: 7, // needs to change
    name: pokeName,
    img: pokeImg,
    likes: 0,
  };

  renderPokemon(pokemon);
  pokeForm.reset();
}

function increaseLike(pokemon, likesElement) {
  ++pokemon.likes;
  likesElement.textContent = pokemon.likes;
}

function deletePoke() {
  pokeCard.remove();
}

function init() {
  getPokemon();
  pokeForm.addEventListener("submit", createPokemon);
}

init();


function getPokemon() {
  fetch("http://localhost:3000/pokemon")
    .then((resp) => resp.json())
    .then((pokemons) => {
      pokemons.characters.forEach(renderPokemon)
    });
}

// fetch("http://localhost:3000/pokemon")
// .then((resp) => resp.json())
// .then((pokemons) => {
//   pokemons.characters.forEach(renderPokemon)
// });

// document.addEventListener('DOMContentLoaded', () => {
//   fetch("http://localhost:3000/pokemon")
//   .then((resp) => resp.json())
//   .then((pokemons) => {
//     pokemons.characters.forEach(renderPokemon)
//   });
// })