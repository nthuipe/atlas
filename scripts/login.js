var visibility = document.getElementById("visibility");
var icon = document.getElementById("icon");
var pwd = document.getElementById("pwd");
var password_state = 0;

var sid = document.getElementById("sid");
var login = document.getElementById("login");

// password_state = 0 -> invisible
// password_state = 1 -> visible

visibility.addEventListener("click", function(){
    if(password_state == 0){
        this.setAttribute("class", "btn btn-dark");
        icon.setAttribute("class", "far fa-eye");
        pwd.setAttribute("type", "text");
        password_state = 1;
    }else if(password_state == 1){
        this.setAttribute("class", "btn btn-outline-secondary");
        icon.setAttribute("class", "far fa-eye-slash");
        pwd.setAttribute("type", "password");
        password_state = 0;
    }
});

login.addEventListener("click", function(){
    if(sid.value == "admin" && pwd.value == "admin"){
        window.location.href = "https://nthuipe.github.io/atlas/";
    }else{
        warning.style.display = "initial";
    }
});
