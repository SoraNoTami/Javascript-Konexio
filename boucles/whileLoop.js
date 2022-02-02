//01 - Comptons

let start = 50;
let end = 200;

while(start <= end){
    if(start % 2 === 0){
        console.log(start);
    }
    start++
}

//02 - Try again
let dice = null;
let count = 0;
let minimum = 1;
let maximum = 6;

while (dice !== 6){
    let random = Math.floor(Math.random() * (maximum - minimum + 1) + minimum);
    if (random < 6){
        dice = random;
        console.log(dice);
        count++;
    }else{
        dice = 6;
        console.log(dice);
        count++;
        console.log(count)
    }
}

//03 - Course

let ussainBolt = 0;
let tysonGay = 0;
let minimum2 = 1;
let maximum2 = 10;
while (ussainBolt < 100 && tysonGay < 100){
    let randomUB = Math.floor(Math.random() * (maximum - minimum + 1) + minimum);
    let randomTG = Math.floor(Math.random() * (maximum - minimum + 1) + minimum);
    tysonGay += randomTG;
    ussainBolt += randomUB;
    if (ussainBolt >= 100 && tysonGay < 100){
        console.log("Ussain Bolt Wins");
    }else if (tysonGay >= 100 && ussainBolt < 100){
        console.log("Tyson Gay Wins");
    }else if (ussainBolt >= 100 && tysonGay >= 100){
        console.log("Both Wins !!!");
    }
}
