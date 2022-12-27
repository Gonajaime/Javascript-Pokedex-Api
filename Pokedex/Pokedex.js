let myArray = [];
const searchInput = document.querySelector(".searchInput");
const getPokemon = async (id) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const responseJson = await response.json();
  myArray = [...myArray, responseJson];
  console.log(myArray);
};
const init = async () => {
  for (let index = 1; index <= 151; index++) {
    await getPokemon(index);
  }
  showPoke(myArray);
  printPokemon();
};

const showPoke = (myArray) => {
  const myDiv$$ = document.querySelector(".pokemon");
  myDiv$$.innerHTML = "";
  for (const pokemon of myArray) {
    const newDiv$$ = document.createElement("div");
    const cardBack = document.createElement("div");
    const cardFront = document.createElement("div");
    cardBack.className = "cardB";
    cardFront.className = "cardA";
    newDiv$$.className = "boxpoke";
    cardFront.innerHTML = `
            <h4 class = "pokename">${pokemon.name}</h4>
            <p class="poketype">${pokemon.types
              .map((type) => type.type.name)
              .join(" / ")}</p>
            <img class= "pokeimg"src="${
              pokemon.sprites.other.home.front_default
            }" /> 
            <h4 class = "pokenumber">${pokemon.id}</h4> 
             `;
    cardBack.innerHTML = `<img class= "imgBack"src="${
      pokemon.sprites.other.dream_world.front_default}"/>
      <h4 class= "pokedata"> ||Peso: ${pokemon.weight}kg  ||
    Altura: ${pokemon.height} m|| </h4> 
    <p class="pokeBase_Stats">${pokemon.stats.map((stat)=> stat.stat.name + " = " + stat.base_stat).join(" / ")}</p>
    `;

    newDiv$$.appendChild(cardBack);
    myDiv$$.appendChild(newDiv$$);
    newDiv$$.appendChild(cardFront);
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
