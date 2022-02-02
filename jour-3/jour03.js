//01 - Array

let fruits = ["mango","lemon","blueberry"];
console.log(fruits);

//02 - Access

let ingredients = ["eggs","milk","butter"];
console.log(ingredients[1]);

//03 - Add and Remove

let objects = ["pen","book","lamp"];
objects.unshift("chair");
console.log(objects);

objects.pop();
console.log(objects);

objects.push("laptop");
console.log(objects);

objects.shift();
console.log(objects);

//04 - Order

let numbers =[4,10,8,12,6];
numbers.reverse();
console.log(numbers);

numbers.sort((a, b) => a - b);
console.log(numbers);

//05 - Boucle

let total = 0
let limit = 10

for(i=0; i <= limit; i++){
    total += i;
}
console.log(total);

//06 - Reverse

let sentence = "Hello Konexio !";
let letters = sentence.split("");
let myArray = [];

for(let i = sentence.length - 1; i >= 0; i--){
    myArray.push(letters[i]) ;
}

let final = myArray.join("");
console.log(final);

// Bonus
let mult3 = 0
let mult5 = 0
let mult3and5 = 0
let mult7 = 0

for(let i = 0; i <= 100; i++){
    if(i === 0){
        continue;
    }
    mult3 = i % 3
    mult5 = i % 5
    mult7 = i % 7
    if(mult7 === 0){
        continue;
    }else if(mult3 === 0  && mult5 === 0){
        console.log("fizzbuzz");
    }else if(mult3 === 0){
        console.log("fizz");
    }else if(mult5 === 0){
        console.log("buzz");
    }else{
        console.log(i);
    }
}