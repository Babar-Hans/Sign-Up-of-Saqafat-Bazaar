let nameError = document.getElementById("name-error");
let emailError = document.getElementById("email-error");
let passwordError = document.getElementById("password-error");
let userSpan = document.getElementById("userspan");


// user name function

function nameValidate(){
    let uName = document.getElementById("username").value;
    if(uName.length == 0){
        nameError.innerHTML = "<i class='fa-solid fa-empty-set'></i>";
        nameError.style.color = "#FEFA16";
        nameError.style.fontSize = "20px"
        return false;
    }
    if(!uName.match(/^[a-zA-Z0-9_-]{3,20}$/)){
        nameError.innerHTML = '<i class="fa-regular fa-circle-xmark"></i>';
        nameError.style.color = "#FA2909"
        nameError.style.fontSize = "20px"
        return false;
    }
    nameError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
    nameError.style.color = "#34CC41";
    nameError.style.fontSize = "20px"
    return true;
}

let uName = document.getElementById("username");
uName.addEventListener("keyup",nameValidate);


// user email function

function emailValidate(){
    //empty
    let uEmail = document.getElementById("useremail").value;
    if(uEmail.length == 0){
        emailError.innerHTML = "<i class='fa-solid fa-empty-set'></i>";
        emailError.style.color = "#FEFA16";
        emailError.style.fontSize = "20px"
        return false;
    }
    //invalid
    if(!uEmail.match(/^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i)){
        emailError.innerHTML = '<i class="fa-regular fa-circle-xmark"></i>';
        emailError.style.color = "#FA2909"
        emailError.style.fontSize = "20px"
        return false;
    }
    //valid
    emailError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
    emailError.style.color = "#34CC41";
    emailError.style.fontSize = "20px"
    return true;
}

let uEmail = document.getElementById("useremail");
uEmail.addEventListener("keyup",emailValidate);
