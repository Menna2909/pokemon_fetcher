function fetchRandomPokemonData() {
    const randomId = Math.floor(Math.random() * 889) + 1;
    
    return fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch Pokemon data');
            }
            return response.json();
        });
}
function displayPokemonData(pokemonData) {
    console.log('Pokemon Details:');
    console.log('---------------');
    console.log(`Name: ${pokemonData.name}`);
    console.log(`Height: ${pokemonData.height/10} meters`);
    console.log(`Weight: ${pokemonData.weight/10} kg`);
    console.log(`Types: ${pokemonData.types.map(type => type.type.name).join(', ')}`);
    console.log('---------------');
}

function getPokemon() {
    fetchRandomPokemonData()
        .then(data => {
            displayPokemonData(data);
        })
        .catch(error => {
            console.error('Error:', error.message);
        });
}

getPokemon();

// fetch() example 
fetch('https://url-with-desired-data', {
    method: 'POST', // Other options: PUT, PATCH, DELETE
    mode: 'cors', // Other options are: 'no-cors', 'same-origin', and the default: 'cors'
    headers: {
      'Content-Type': 'application/json'
    },
    body: {"data": "This is json"} // body data type must match "Content-Type" header
  })
.then(response => response.json())
.catch(error => console.log(error))