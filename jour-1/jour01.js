// 01 - Hello World

console.log("Hello World !");

// 02 - String

let test = "My name is Ethan";

console.log(test);

// 03 - Concaténation

let name = "Ethan";

console.log("Nice to meet you " + name);

// 04 - String Length

let testLength = "I'm very long!";

console.log(testLength.length);

// 05 - Replace

let food = "croissant is meh";
food = food.replace("meh","so good");

console.log(food);

// 06 - Up and Down

let basic = "This is Cool";
let basicUp = basic.toUpperCase();
let basicDown = basic.toLowerCase();

console.log(basic);
console.log(basicUp);
console.log(basicDown);

// 07 - Split

let word = "banana";
let letters = word.split("");

console.log(letters);

//08 - Template

let age = "19";
let template = "I'm " + age + " years old";

console.log(template);

// Bonus

let myLife= "Nothing to see";
console.log(myLife);

let changed = "Bonjour";
changed = changed.replaceAll("o","a");

console.log(changed);