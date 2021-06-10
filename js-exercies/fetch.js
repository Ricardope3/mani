const fetch = require('node-fetch')

const getPokemons = async ({ limit = 10 }) => {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=${limit}');
    const nose = await res.json();
    return nose;
}

const getPokemon = async (limit) => {
    let poke = await getPokemons({ limit });
    const pokemons = poke.results.map(async ({ url }) => {
        const res = await (await fetch(url)).json();
        const { weight, name } = res;
        return { weight, name };
    });
    return pokemons
}

getPokemon(2).then(lmao => {
    Promise.all(lmao).then(owo => console.log(owo))
})

