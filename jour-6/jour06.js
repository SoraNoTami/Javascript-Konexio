//01 - Format

const { getMaxListeners } = require("process");

function formatDate(date){
    let date01 = new Date(date)
    console.log(date01.getDate()+"/"+(date01.getMonth()+ 1)+"/"+date01.getFullYear())
}

formatDate("2022-02-02")

//02 - Age

function calculateAge(date02){
    let today = new Date();
    let birthday = new Date(date02);
    let thisYear = today.getFullYear();
    let thisMonth = today.getMonth();
    let thisDay = today.getDay();
    let yourYear = birthday.getFullYear();
    let yourMonth = birthday.getMonth();
    let yourDay = birthday.getDay();
    let age = thisYear - yourYear;
    let clac2 = thisMonth - yourMonth;
    if (clac2 < 0 || (clac2 === 0 && thisDay - yourDay < 0 )){
        age--
    }
    console.log(age)  
}

calculateAge("2002-03-20")

//03 - Validator

let prompt = require('prompt');

function checkProfile(email,username,password){
    verifEmail.test(email);
    console.log(verifEmail);
    // username.test(username)
    // password.test(password)
    if(verifEmail.test(email)){
        console.log("all good");
    }
}

checkProfile(sora,sora,sora)

let plop = {
properties: {
    verifEmail: {
      pattern: /^\S+@\S+\.\S+$/,
      message: 'Name must be only letters, spaces, or dashes',
      required: true
    },
    password: {
      hidden: true
    }
}
};


// prompt.get(['email', 'username', 'password'], function (err, result) {
//     if (verifEmail.test(email)){
//         console.log("all good")
//     }
// })
