'use_strict';

window.onload=function(){
    const button = document.querySelector('#button');
    button.addEventListener("click", showHide);
}

function showHide(event){
    // print the event object to console
    var cit = document.querySelector('.citation')
    cit.classList.toggle('citation2')

}

