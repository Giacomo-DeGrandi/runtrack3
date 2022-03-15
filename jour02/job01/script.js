

window.onload=function(){
    const button = document.querySelector('#button');
    button.addEventListener("click", pressMe);
}

function pressMe(event){
    // print the event object to console
    console.log(document.getElementById("citation").innerText)
}

