const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz" 
const uppercaseLetters = "ABCDEFGHIKLMNOPQRSTVXYZ "
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+-=[]{}\\|;':\",./<>?()"


const lengthEL = document.getElementById('length')
const lowercaseEL = document.getElementById('lowercase')
const uppercaseEL = document.getElementById('uppercase')
const symbolEL = document.getElementById('symbol')
const numberEL = document.getElementById('number')


const generateEL = document.getElementById("generator")
const passwordEL = document.getElementById("password")



generateEL.addEventListener("click",function(){

    const length = lengthEL.value;
    let character = "";
    let password = "";

    if(lowercaseEL.checked){
        character += lowercaseLetters;
    }


    if(uppercaseEL.checked){
        character += uppercaseLetters;
    }


    if(numberEL.checked){
        character += numbers;
    }

    if(symbolEL.checked){
        character += symbols;
    }



    for(let i = 0; i <length; i++){
        password += character.charAt(Math.floor(Math.random() * character.length));
    }
    passwordEL.value = password;

});

