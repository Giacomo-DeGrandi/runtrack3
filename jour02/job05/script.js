'use_strict';


document.addEventListener('DOMContentLoaded', () => {
})



var myFooter = document.getElementsByTagName("footer") //select footer
myFooter.scrollTop = changeCols;
console.log(myFooter)

function changeCols(){
    myFooter.style.backgroundColor = "red";
};

