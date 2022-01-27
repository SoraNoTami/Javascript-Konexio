// 01 - Number

let integer = 102;
let float = 13.9;
console.log(float);
console.log(integer);

// 02 - Convert

let basic = 34;
let stringfied = basic.toString();

console.log(stringfied);

//03 - Round

let num = 1.5;
let rounded = Math.round(num);

console.log(rounded);

//04 - Arithmétique

let test = 12
let bis = 5

console.log(test + bis);
console.log(test - bis);
console.log(test / bis);
console.log(test * bis);
console.log(test ** bis);
console.log(test % bis);

//05 - Comparaison

let test2 = 143;
let bis2 = 219;

console.log(test2 == bis2);
console.log(test2 != bis2);
console.log(test2 === bis2);
console.log(test2 !== bis2);
console.log(test2 > bis2);
console.log(test2 >= bis2);
console.log(test2 < bis2);
console.log(test2 <= bis2);

//06 - Condition

let limit = 50;
let score = 64;

if (score >= limit){
    console.log("Ok good !");
}else{
    console.log("Oh nooo...");
}

score = 49;

//07 - Condition II

let password = "azerty";

if(password.length > 5){
    console.log("The password is secure");
}

//08 - Condition III

if (score >= limit && password.length > 5){
    console.log("Everything is good");
}else if (score >= limit || password.length > 5){
    console.log("Something is good");
}else{
    console.log("Nothing is good");
}

//Bonus 

let minimum = 1;
let maximum = 6;

let random = Math.floor(Math.random() * (maximum - minimum + 1) + minimum);
console.log(random);
if (random === 6){
    console.log("Yes I win !");
}else{
    console.log("So close...");
}

//Bonus II

let month = "January";

switch (month) {
	case "January": 
	case "February":
	case "March":
        console.log("Winter");
        break;
    case "April": 
    case "May":
    case "June":
        console.log("Spring");
        break;
    case "July": 
	case "August":
	case "September":
        console.log("Summer")
        break;   
    case "October": 
	case "November":
	case "December":
        console.log("Fall")
        break; 
    default: 
        console.log("...")
        break;
}

//Bonus III

let roundedNumber = 12.4;
let floorNumber = Math.floor(roundedNumber)
let ceilNumber = Math.ceil(roundedNumber)

if ((roundedNumber - floorNumber) > (ceilNumber - roundedNumber)) {

    roundedNumber = roundedNumber + (ceilNumber - roundedNumber);
    roundedNumber = roundedNumber.toString();

}else{

    roundedNumber = roundedNumber - (roundedNumber - floorNumber);
    roundedNumber = roundedNumber.toString();
}

console.log(roundedNumber)