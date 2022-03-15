'use_strict';

window.onload=function(){
    const button = document.querySelector('#button');
    button.addEventListener("click", showHide);
}

function showHide(event){
    // print the event object to console
    var cit = document.querySelector('.citation');
    console.log(cit)
    if(cit){
        cit .classList.remove("citation");
        cit .classList.add("citation2");
    } else {
        var cit = document.querySelector('.citation2');
        cit .classList.remove("citation2");
        cit .classList.add("citation");
    }
}

