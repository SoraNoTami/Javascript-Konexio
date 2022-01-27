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
    total = total + i;
}
console.log(total);

//06 - Reverse

let sentence = "Hello Konexio";
let letters = sentence.split("");
let myArray = [];

for(i = sentence.length; i >= 0; i--){
    myArray.push(letters[i]) ;
}

let final = myArray.join("");
console.log(final);