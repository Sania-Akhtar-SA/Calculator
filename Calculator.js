
let input = document.getElementById('inputBox');
let buttons =document.querySelectorAll('button'); 
let string="";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) =>{ // Evaluate
        if(e.target.innerHTML == '='){
            string= eval(string);
            input.value= string;
        }
        else if(e.target.innerHTML == 'AC'){ // Cancel 
            string= "";
            input.value= string;
        }
        else {
            if(e.target.innerHTML == 'x'){ // As x is not considered as multiplication command in programming.
                e.target.innerHTML = '*'
                string= eval(string);
                input.value= string;
            }
            else if(e.target.innerHTML == '÷'){ // As ÷ is not considered as division command in programming.
                e.target.innerHTML = '/'
                string= eval(string);
                input.value= string;
            }
            string += e.target.innerText;
            input.value= string;
        }
    })
})
