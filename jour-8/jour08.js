// //01 - Countries

const request = require("request");
// let siteCountry = "https://restcountries.com/v3.1/all"
// let countriesNames = [];
// let stringCountry = "";

// request.get(siteCountry, function (err, res, body) {
//     let country = JSON.parse(body);
//     for(i=0; i < country.length; i++ ){
//         countriesNames.push(country[i].name.common);
//         // console.log(country[i].name.common);
//     }
//     for(i=0; i < countriesNames.length; i++ ){
//     stringCountry = stringCountry + countriesNames[i] + "-";
//     }
//     console.log(stringCountry);
// });

// //02 - Chuck Norris


// const chuckSite = "https://api.chucknorris.io/jokes/random"

//     request.get(chuckSite, function (err, res, body){
//         let chuckJoke = JSON.parse(body)
//         console.log(chuckJoke.value)
//     })

//03 - Pokemon

let pokemonSite = "https://pokeapi.co/api/v2/pokemon/"
function catchPokemon(id){
    pokemonSite += id
    request.get(pokemonSite, function(err, res, body){
        let pokemonName = JSON.parse(body);
        console.log("name: " + pokemonName.name);
        console.log("id: " + id)
    })
}

catchPokemon(5)


 







