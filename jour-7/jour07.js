// // 01 - File System

// const fs = require("fs");

// fs.readFile("./jour07.txt", function (err,data) => {
//     if(err) {
//         console.error(err);
//         return;
//     }
//     console.log(data.toString());
// });

// //02 - Map Double

// let array = [1, 2, 3, 4, 5];

// let double = array.map((num) => {
//     return num * 2;
// });
//   console.log(double);

// //03 - Map Names

// let longNames =
// [
// 	{
// 		firstName: "Jane",
// 		lastName: "Doe"
// 	},
// 	{
// 		firstName: "John",
// 		lastName: "Smith"
// 	}
// ];


// let shortNames = longNames.map(function(name){
//     return { name: name.firstName + " " + name.lastName};
// })

// console.log(shortNames);

// //04 - Filter Numbers

// let array2 = [1,"toto",34,"javascript",8];
// let numbers = array2.filter(function(element){
//     return typeof(element) === typeof(1);
// })

// console.log(numbers);

// //05 - Filter Even

// let numbers2 = [1,2,3,4,5,6,7,8];

// let even = numbers2.filter(function(num){
//     return num % 2 === 0;
// })

// console.log(even);

// //06 - Cakes

// let cakes = [
// 	{
// 		name: "cake",
// 		flavor: "vanilla",
// 		status: "available"
// 	},
// 	{
// 		name: "brownie",
// 		flavor: "chocolate",
// 		status: "available"
// 	},
// 	{
// 		name: "pie",
// 		flavor: "strawberry",
// 		status: "available"
// 	},
// 	{
// 		name: "muffin",
// 		flavor: "pistachio",
// 		status: "available"
// 	},
// 	{
// 		name: "donut",
// 		flavor: "chocolate",
// 		status: "available"
// 	},
// ]

// let sold = cakes.map(function(cake){
//     if(cake.flavor === "chocolate"){
//         cake.status = "sold out !" ;
//         return cake;
//     }
// })
// let lastSold = sold.filter(function(cake){
//     return typeof cake != 'undefined';
// })

// console.log(lastSold);

//Bonus

let prompt = require("prompt");
let allWords = [ "pomme", "flamme",
"kimono", "levure", "croix", "fondateur",
"facture", "ajuster", "autonome",
"portefeuille" ];

let min = 0;
let max = allWords.length - 1;
let num = Math.floor(Math.random() * (max - min + 1) + min);
let theWord = allWords[num];

let theWordArray = theWord.split("")
// console.log(theWordArray)
let theWord_ = theWordArray.map(function(letter){
	return letter = "_"
})
console.log(theWord)
console.log(theWord_.join(" "))
let yourGuess = {
    properties: {
        Guess: {
            pattern: /^[a-z]$/,
            message: 'one letter, no num and no maj',
            required: true
        },
	}
};

prompt.get(yourGuess, function (err, result) {
	console.log(theWord_[theWordArray.indexOf(result.yourGuess)])
	if(theWordArray.indexOf(result.yourGuess) !== -1){
		theWord_[theWordArray.indexOf(result.yourGuess)] = result.yourGuess;
		console.log(theWord_.join(" "));
	}
})





