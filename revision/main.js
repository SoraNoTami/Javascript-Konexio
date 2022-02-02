// 01 - Alphabet

let array = [];
function sortLetters(words){
    array = words.split("");
    array.sort();
    let final = array.join("");
    console.log(final);
}

sortLetters("konexio");

// 02 - XOXO

let countX = 0;
let countO = 0;
function countEach(wordsXO){
    for(let i = 0; i < wordsXO.length; i++){
        // console.log(wordsXO.charAt(i));
        switch(wordsXO.charAt(i)) {
            case "x":
                countX++;
                break;
            case "o":
                countO++;
                break;
            default:
                console.log("only use x and o");
                break;
        }
    }
    if(countX === countO){
        console.log(true);
    }else{
        console.log(false);
    }
}

countEach("xxxoooox")

//03 - Palindrome

let arrayPalindrome = []
function checkPal(wordsPalindrome){
    // for(i = words.length; i <= 1; i--){
    arrayPalindrome = wordsPalindrome.split("");
    arrayPalindrome = arrayPalindrome.reverse();
    let final = arrayPalindrome.join("");
    console.log(final);
    if (wordsPalindrome === final){
        console.log("Est bien un Palindrome !");
    }else{
        console.log("Nope");
    }
}

checkPal("racecar");

// 04 - Swap
let array4 = [];
function swap(words4){
    for (let i = 0; i < words4.length; i++){
        if (words4.charAt(i) === words4.charAt(i).toUpperCase()){
            array4.push(words4.charAt(i).toLowerCase());
        }else{
            array4.push(words4.charAt(i).toUpperCase());
        }
    }
    let final4 = array4.join("");
    console.log(final4);
}

swap("Hello World");