let myArray = [];
const searchInput = document.querySelector(".searchInput");
const getPokemon = async (id) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const responseJson = await response.json();
  myArray = [...myArray, responseJson];
};
const init = async () => {
  for (let index = 1; index <= 151; index++) {
    await getPokemon(index);
  }
  showPoke(myArray);
  printPokemon();
};

const showPoke = (myArray) => {
  for (const pokemon of myArray) {
    const myDiv$$ = document.querySelector(".pokemon");
    const newDiv$$ = document.createElement("div");
    newDiv$$.className = "boxpoke";
    newDiv$$.innerHTML = `
            <h4 class = "pokename">${pokemon.name}</h4>
            <p class="poketype">${pokemon.types[0].type.name}</p>
            <img class= "pokeimg"src="${pokemon.sprites.other.home.front_default}" /> 
            <h4 class = "pokenumber">${pokemon.id}</h4> 
            <h4 class= "pokedata"> ||Peso: ${pokemon.weight}kg  ||
            Altura: ${pokemon.height} m||</h4> `;
    myDiv$$.appendChild(newDiv$$);
  }
};
const printPokemon = () => {
  const inputPoke = document.querySelector(".searchInput");
  inputPoke.addEventListener("input", () =>
    searchPoke(inputPoke.value, myArray)
  );
};
const searchPoke = (filtro, myArray) => {
  const filtering = myArray.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(filtro.toLowerCase()) 
  );
  showPoke(filtering);
};

init();
// newDiv$$.innerHTML = "";
