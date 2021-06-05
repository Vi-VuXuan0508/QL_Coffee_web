function signUp() {
    document.querySelector(".login-form").style.cssText = "display: none;";
    document.querySelector(".signup-form").style.cssText = "display: block;";
    document.querySelector(".btnLogin").style.cssText = "display: block; margin-left: 415px;";
    document.querySelector(".btnSignUp").style.cssText = "display: none;";
}

function login() {
    document.querySelector(".login-form").style.cssText = "display: block;";
    document.querySelector(".signup-form").style.cssText = "display: none;";
    document.querySelector(".btnLogin").style.cssText = "display: none;";
    document.querySelector(".btnSignUp").style.cssText = "display: block; margin-left: 415px;";
}

function validate1(){
    var user = document.getElementsByClassName('user');
    var pass = document.getElementsByClassName('pass');
    if(user.value.trim() == "" || pass.value.trim() == ""){
        alert("No blank values  allowed");
        return false;
    }   
    else{
        true;
    }
}


function validate2(){
    var user = document.getElementsByClassName('username');
    var email = document.getElementsByClassName('email');
    var pass = document.getElementsByClassName('password');
    if(user.value.trim() == "" || pass.value.trim() == "" || email.value.trim() == ""){
        alert("No blank values  allowed");
        return false;
    }   
    else{
        true;
    }
}