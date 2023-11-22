var total=0;
var display=0;
var operator;

//parseFloat(document.getElementById("num1").value)+(parseFloat(document.getElementById("num2").value))

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
        break;
}
function Operation (Number){
    if (operator === '+')
        total += Number;
    else if (operator === '-')
        total -= Number;
    else if (operator === 'x')
        total *= Number;
    else if (operator === '÷')
        total /= Number;

}
