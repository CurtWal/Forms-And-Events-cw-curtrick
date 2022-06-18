// keyword userName becomes resigstration-form
let firstName = document.getElementById('registration-form');

//keyword my_reg becomes reg-form
let my_reg = document.getElementById('reg-form');

let firstNameInputField = document.getElementById('reg-form')
function registerForm(e){
    e.preventDefault()
    alert('sent')
    my_reg.reset()
}

my_reg.addEventListener('submit',registerForm)

function myPrint(my_reg){
    let printdata = document.getElementById(my_reg);
    return print(printdata);
}
