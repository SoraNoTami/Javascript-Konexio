// 01 - Calculator
// var terminal = process.argv.slice(2)
// for(i = 0; i < terminal.length; i++){
//     if(!isNaN(Number(terminal[i]))){
//         terminal[i] = Number(terminal[i]);
//     }
// }
// console.log(terminal);
// function calculate(num,oper,num2){
// if(oper == '+'){ 
//     console.log(num + num2);
// }else if(oper == '-'){
//     console.log(num - num2);
// }else if(oper == 'x' || oper == '*'){
//     console.log(num * num2);
// }else if(oper == '/'){
//     console.log(num / num2);
// }else if(oper == '%'){
//     console.log(num % num2);
// }else{
//     console.log("something happens that shouldn't");
// }
// }
 
// calculate(terminal[0], terminal[1], terminal[2]);

// 02 - Table
// var terminal2 = process.argv.slice(2)

// function multiply(num){
//     for (i = 1;i <= 10; i++){
//         console.log(num * i)
//     }
// }

// multiply(terminal2[0]);

// 03 - Separate Table

// var terminal = process.argv.slice(2)

// for(i = 0; i < terminal.length; i++){
//     if(!isNaN(Number(terminal[i]))){
//         terminal[i] = Number(terminal[i]);
//     }
// }

// var table = require("./table-utils.js");

// table.addition(terminal[0]);

//04 - Guess
let prompt = require('prompt');
var terminal = process.argv.slice(2)
prompt.start();
let  mysteryNum= Math.round(Math.random() * 100);
function play(num){
    if (isNaN(num)){
        Error;
        prompt.get("num", function(err, result){play(result.num)})
    }else if(num < mysteryNum){
        console.log("le chiffre mystère est plus grand que " + num);
        prompt.get("num", function(err, result){play(result.num)})
    }else if (num > mysteryNum){
        console.log("le chiffre mystère est plus petit que " + num);
        prompt.get("num", function(err, result){play(result.num)})
    }else if (num == mysteryNum){
        console.log("Bravo!!!");
    }else {
        console.log("Error");
    }
}
prompt.get("num", function(err, result){play(result.num)})

