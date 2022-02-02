// 01 - Somme des carrés

let final = 0;

for(i = 5; i <= 10; i++){
    final += i ** 2;
}

console.log(final);

// 02 - Comptons

let final2 = 0;

for(i=100; i <= 1000; i++){
    if (i % 7 === 0){
        final2 += 1;
    }
}
console.log(final2);

// 03 - Chanceux

let minimum = 1;
let maximum = 6;
let final3 = 0;

for(i = 0; i < 20; i++ ){
let random = Math.floor(Math.random() * (maximum - minimum + 1) + minimum);
if (random <= 5){
    final3 += random;
}
}

console.log(final3);

//04 & 05 & 06
// Voir boucleFor.txt

