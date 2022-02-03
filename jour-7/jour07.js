// 01 - File System

let fs = require("fs");
const { isUndefined } = require("util");

fs.readFile("jour07.txt", function (err,data){
    if(err) {
        console.error(err);
        return;
    }
    console.log(data.toString());
});

//02 - Map Double

let array = [1, 2, 3, 4, 5];

let double = array.map(function(num) {
    return num * 2;
  });
  console.log(double);

//03 - Map Names

let longNames =
[
	{
		firstName: "Jane",
		lastName: "Doe"
	},
	{
		firstName: "John",
		lastName: "Smith"
	}
];


let shortNames = longNames.map(function(name){
    return { name: name.firstName + " " + name.lastName};
})

console.log(shortNames);

//04 - Filter Numbers

let array2 = [1,"toto",34,"javascript",8];
let numbers = array2.filter(function(number){
    return typeof(number) === typeof(1);
})

console.log(numbers);

//05 - Filter Even

let numbers2 = [1,2,3,4,5,6,7,8];

let even = numbers2.filter(function(num){
    return num % 2 === 0;
})

console.log(even);

//06 - Cakes

let cakes = [
	{
		name: "cake",
		flavor: "vanilla",
		status: "available"
	},
	{
		name: "brownie",
		flavor: "chocolate",
		status: "available"
	},
	{
		name: "pie",
		flavor: "strawberry",
		status: "available"
	},
	{
		name: "muffin",
		flavor: "pistachio",
		status: "available"
	},
	{
		name: "donut",
		flavor: "chocolate",
		status: "available"
	},
]

let sold = cakes.map(function(cake){
    if(cake.flavor === "chocolate"){
        cake.status = "sold out !" ;
        return cake;
    }
})
let lastSold = sold.filter(function(cake){
    return  typeof cake != 'undefined';
})

console.log(lastSold);


