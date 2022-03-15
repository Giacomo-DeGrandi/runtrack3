'use_strict';

window.onload=function(){
    const button = document.querySelector('#button');
    button.addEventListener("click", addOne);
}

function addOne(event){
    var count = document.querySelector('#compteur').innerHTML
    count = parseInt(count,10) + 1
    document.querySelector('#compteur').innerHTML = count
}

