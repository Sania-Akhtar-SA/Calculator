
let input = document.getElementById('inputBox');
let buttons =document.querySelectorAll('button');
let string="";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            string= eval(string);
            input.value= string;
        }
        else if(e.target.innerHTML == 'AC'){
            string= "";
            input.value= string;
        }
        else {
            if(e.target.innerHTML == 'x'){
                e.target.innerHTML = '*'
                string= eval(string);
                input.value= string;
            }
            else if(e.target.innerHTML == '÷'){
                e.target.innerHTML = '/'
                string= eval(string);
                input.value= string;
            }
            string += e.target.innerText;
            input.value= string;
        }
    })
 })
