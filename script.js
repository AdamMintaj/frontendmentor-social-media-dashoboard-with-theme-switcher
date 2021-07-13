var checkbox = document.getElementById("checkbox");
var button = document.getElementById("button");

checkbox.addEventListener("click", themeswitch);


function themeswitch(){
    document.getElementsByTagName("body")[0].classList.toggle("body--light");
    document.getElementsByTagName("body")[0].classList.toggle("body--dark");

    document.getElementsByTagName("header")[0].classList.toggle("header--light");
    document.getElementsByTagName("header")[0].classList.toggle("header--dark");

    document.getElementsByTagName("main")[0].classList.toggle("main--light");
    document.getElementsByTagName("main")[0].classList.toggle("main--dark");

    document.getElementsByTagName("footer")[0].classList.toggle("footer--light");
    document.getElementsByTagName("footer")[0].classList.toggle("footer--dark");
};