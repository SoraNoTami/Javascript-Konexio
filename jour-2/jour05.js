// var NaN = Number('n')
var terminal = process.argv.slice(2)
for(i = 0; i < terminal.length; i++){
    if(!isNaN(Number(terminal[i]))){
        terminal[i] = Number(terminal[i]);
    }
}
console.log(terminal);
function calculate(num,oper,num2){
    if(oper == '+'){
        console.log(num + num2);
    }else if(oper == '-'){
        console.log(num - num2);
    }else if(oper == 'x' || oper == '*'){
        console.log(num * num2);
    }else if(oper == '/'){
        console.log(num / num2);
    }else if(oper == '%'){
        console.log(num % num2);
    }else{
        console.log("something happens that shouldn't")
    }
}
 
 calculate(terminal[0], terminal[1], terminal[2]);