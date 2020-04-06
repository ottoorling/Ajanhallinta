var divhome = document.getElementById("sivunvaihto2");
var divsecond = document.getElementById("sivunvaihto");


divsecond.onclick = function(){
    document.querySelector(".active").classList.remove("active");
    document.getElementById("divsecond").classList.add("active");

}

divhome.onclick = function(){
    document.querySelector(".active").classList.remove("active");
    document.getElementById("divhome").classList.add("active");
    
}