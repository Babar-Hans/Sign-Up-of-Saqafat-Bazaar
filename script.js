let nameError = document.getElementById("name-error");
let emailError = document.getElementById("email-error");
let passwordError = document.getElementById("password-error");
let userSpan = document.getElementById("userspan");


// user name function

function nameValidate(){
    let uName = document.getElementById("username").value;
    if(uName.length == 0){
        nameError.innerHTML = "empty";
        return false;
    }
    if(uName.match(/^[a-z0-9_\.]*$/)){
        nameError.innerHTML = 'invalid';
        return false;
    }
    nameError.innerHTML = 'valid';
    return true;
}

let userName = document.getElementById("username");
userName.addEventListener("keyup",nameValidate);
