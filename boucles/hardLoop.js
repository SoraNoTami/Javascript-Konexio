// 01 - Sum

let numbers = [];
let minimum = 0;
let maximum = 100;

for (let i = 0; i < 50; i++){
    let random = Math.floor(Math.random() * (maximum - minimum + 1) + minimum);
    numbers.push(random);
}
console.log(numbers);
let final = 0;
for (let i = 0; i < 50; i++){
    final += numbers[i];
}
//console.log(final);

//02 - Max

let numbers2 = [];
let minimum2 = 50;
let maximum2 = 200;

for(let i = 0; i < 50; i++){
    let random2 = Math.floor(Math.random() * (maximum2 - minimum2 + 1) + minimum2);
    numbers2.push(random2);
}

// console.log(numbers2);
let final2 = 0;

for(let i = 0; i < 50; i++){
    if(numbers2[i] > final2){
        final2 = numbers2[i];
    }
}
console.log(final2);

//03 - Unique

let numbers3 = [];
let minimum3 = 50;
let maximum3 = 200;

for(let i = 0; i < 50; i++){
    let random3 = Math.floor(Math.random() * (maximum3 - minimum3 + 1) + minimum3);
    numbers3.push(random3);
}

console.log(numbers3);

let i = 0;
let final3 = 0;

while (final3 < 75 || final3 > 100){
    final3 = numbers3[i];
    i++;
}

console.log(final3);

//04 - Nested Loop

let words = ["hello", "goodbye", "yes", "no", "stop", "go go go"];
let firstTry = []
let arrayOfLetters = []
let compteur = 0
for (let i = 0; i < words.length; i++){
    firstTry = words[i].split('')
    for (let j = 0; j < firstTry.length; j++){
        arrayOfLetters.push(firstTry[j]);
        if (firstTry[j] === "o"){
        compteur++
        }
    } 
}


console.log(arrayOfLetters);
console.log("il y a", compteur, "'o' dans ce tableau")

