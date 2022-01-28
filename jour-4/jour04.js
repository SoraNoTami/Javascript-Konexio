//01 - Object

let cat = {
    name: "Garfield",
    age: "3",
    isCute: true
}

console.log(cat)

//02 - Combine

let cat2 = {
    name: "Oggy",
    age: "4",
    isCute: false
}

let cats = [cat, cat2];

console.log(cat.age);
console.log(cat2.isCute);

//03 - Even

function checkIfEven(num) {
    if (num % 2 === 0){
        console.log("even")
    }else{
        console.log("odd")
    }
}
 
checkIfEven(13);
checkIfEven(4);
checkIfEven(39);

//04 - Compare

function compare(num1, num2){
    if(num1 > num2){
        console.log(num1 + " is bigger");
    }else if(num1 < num2){
        console.log(num2 + " is bigger")
    }else if(num1 === num2){
        console.log("both are the same")
    }
}

compare(3, 6);
compare(24, 20);
compare(100, 100);

//05 - Add Up

let tableauNum = [];
let numFinal = 0;

function addUp(num){
    for(i = num; i > 0; i--){
        tableauNum.push(i);
    }
    for(i = 0; i < tableauNum.length; i++){
        numFinal = numFinal + tableauNum[i];
        // numFinal += tableauNum[i]
    }
    console.log(numFinal);
}

addUp(12);

//06 - Time

let seconds = 0;
let minutes = 0;
let hours = 0;

function format(num){
    for(let i = num; i > 0; i--){
        if(i >= 3600){
            hours++;
            i -= 3599;
        }else if(i >= 60){
            minutes++;
            i -= 59;
        }else{
            seconds =+ i ;
            i -= seconds;
        }
    }
console.log(hours + ":" + minutes + ":" + seconds);
}

format(3700)