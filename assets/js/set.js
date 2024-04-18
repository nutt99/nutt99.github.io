document.getElementById("animasi").addEventListener("animationend", animationHandler);

var a = 1;

function animationHandler(){
    a++;

    if(a == 8 ){
        document.getElementById("animasi").classList.add("blink");
    }
}

function showMainPage(){
    document.getElementById("col2").style.display = "none";
}