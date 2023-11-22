let total=0;
let display=0;
let operator;
let input = document.getElementById('inputbox')
let buttons = document.querySelectorAll('.button');
// let string="";
 let arr = Array.from(buttons);
 function buttonClick (value){
    if (isNaN(value)){
        forSymbol(value);
    }
    else {
        forNumber(value);
    }
 }
function forSymbol(symbol){
    switch (symbol){
            case "AC":
                display=0;
                total=0;
                break;
            case "=":
                if (operator === null){
                    return;
                }
            case "+":
            case "-":
            case "*":   
            case "/":
                forMath(symbol);
               break;
}
}
function forMath(symbol){
    if (display === '0'){
        return;
    }
    const intDisplay = parseInt(display);

    if (total === 0){
        total = intDisplay;
    }
    else{
        Operation(intDisplay);
    }
    operator = symbol;
    display=0;
}

 function Operation (intDisplay){
     if (operator === '+')
         total += intDisplay;
     else if (operator === '-')
         total -= intDisplay;
     else if (operator === 'x')
         total *= intDisplay;
     else if (operator === '÷')
         total /= intDisplay;

 }
 function forNumber(numberString){
    if(display === '0')
        display = numberString;
    else
        display += numberString;
 }
function init(){
    document.querySelector('.button').addEventListener('click',function (event){
        buttonClick(event.target.innerText);
    } )
}
init();