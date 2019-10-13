// var mode_d = document.getElementById("mode-d");
// var mode_l = document.getElementById("mode-l");
// var mode_state = 0;
// mode_state = 0 -> page is in light mode, dark mode button active
// mode_state = 1 -> page is in dark mode, light mode button active
//
// mode_d.addEventListener("click", function(){
//     mode_state = 1;
//     this.style.display = "none";
//     mode_l.style.display = "initial";
// });
//
// mode_l.addEventListener("click", function(){
//     mode_state = 0;
//     this.style.display = "none";
//     mode_d.style.display = "initial";
// });
$(function () {
  $('[data-toggle="popover"]').popover()
})


var exam = document.getElementById("exam");
var exp = document.getElementById("exp");
var exc = document.getElementById("exc");
var map = document.getElementById("map");

var homepage = document.getElementById("home-page");
var exampage = document.getElementById("exam-page");
var exppage = document.getElementById("exp-page");
var excpage = document.getElementById("exc-page");
var mappage = document.getElementById("map-page");
var selected = 0;

exam.addEventListener("click", function(){
    exp.style.fontWeight = "400";
    exp.style.backgroundColor = "rgba(0, 0, 0, 0)";
    exc.style.fontWeight = "400";
    exc.style.backgroundColor = "rgba(0, 0, 0, 0)";
    map.style.fontWeight = "400";
    map.style.backgroundColor = "rgba(0, 0, 0, 0)";

    if(selected != 1){
        exam.style.fontWeight = "600";
        exam.style.backgroundColor = "rgba(100, 100, 100, 0.2)";
        selected = 1;

        homepage.style.display = "none";
        exampage.style.display = "initial";
        exppage.style.display = "none";
        excpage.style.display = "none";
        mappage.style.display = "none";
    }else{
        exam.style.fontWeight = "400";
        exam.style.backgroundColor = "rgba(0, 0, 0, 0)";
        selected = 0;

        homepage.style.display = "initial";
        exampage.style.display = "none";
        exppage.style.display = "none";
        excpage.style.display = "none";
        mappage.style.display = "none";
    }
});

exp.addEventListener("click", function(){
    exam.style.fontWeight = "400";
    exam.style.backgroundColor = "rgba(0, 0, 0, 0)";
    exc.style.fontWeight = "400";
    exc.style.backgroundColor = "rgba(0, 0, 0, 0)";
    map.style.fontWeight = "400";
    map.style.backgroundColor = "rgba(0, 0, 0, 0)";

    if(selected != 2){
        exp.style.fontWeight = "600";
        exp.style.backgroundColor = "rgba(100, 100, 100, 0.2)";
        selected = 2;

        homepage.style.display = "none";
        exampage.style.display = "none";
        exppage.style.display = "initial";
        excpage.style.display = "none";
        mappage.style.display = "none";
    }else{
        exp.style.fontWeight = "400";
        exp.style.backgroundColor = "rgba(0, 0, 0, 0)";
        selected = 0;

        homepage.style.display = "initial";
        exampage.style.display = "none";
        exppage.style.display = "none";
        excpage.style.display = "none";
        mappage.style.display = "none";
    }
});

exc.addEventListener("click", function(){
    exp.style.fontWeight = "400";
    exp.style.backgroundColor = "rgba(0, 0, 0, 0)";
    exam.style.fontWeight = "400";
    exam.style.backgroundColor = "rgba(0, 0, 0, 0)";
    map.style.fontWeight = "400";
    map.style.backgroundColor = "rgba(0, 0, 0, 0)";

    if(selected != 3){
        exc.style.fontWeight = "600";
        exc.style.backgroundColor = "rgba(100, 100, 100, 0.2)";
        selected = 3;

        homepage.style.display = "none";
        exampage.style.display = "none";
        exppage.style.display = "none";
        excpage.style.display = "initial";
        mappage.style.display = "none";
    }else{
        exc.style.fontWeight = "400";
        exc.style.backgroundColor = "rgba(0, 0, 0, 0)";
        selected = 0;

        homepage.style.display = "initial";
        exampage.style.display = "none";
        exppage.style.display = "none";
        excpage.style.display = "none";
        mappage.style.display = "none";
    }
});

map.addEventListener("click", function(){
    exp.style.fontWeight = "400";
    exp.style.backgroundColor = "rgba(0, 0, 0, 0)";
    exc.style.fontWeight = "400";
    exc.style.backgroundColor = "rgba(0, 0, 0, 0)";
    exam.style.fontWeight = "400";
    exam.style.backgroundColor = "rgba(0, 0, 0, 0)";

    if(selected != 4){
        map.style.fontWeight = "600";
        map.style.backgroundColor = "rgba(100, 100, 100, 0.2)";
        selected = 4;

        homepage.style.display = "none";
        exampage.style.display = "none";
        exppage.style.display = "none";
        excpage.style.display = "none";
        mappage.style.display = "initial";
    }else{
        map.style.fontWeight = "400";
        map.style.backgroundColor = "rgba(0, 0, 0, 0)";
        selected = 0;

        homepage.style.display = "initial";
        exampage.style.display = "none";
        exppage.style.display = "none";
        excpage.style.display = "none";
        mappage.style.display = "none";
    }
});




//logout function
var logout = document.getElementById("logout");

logout.addEventListener("click", function(){
    window.location.href = "login.html";
});
