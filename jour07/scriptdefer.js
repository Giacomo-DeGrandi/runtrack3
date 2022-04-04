

window.addEventListener('DOMContentLoaded', function (){

    // REBOOT BUTTON -Blade Runner______________________________________
    // init stack for quotes
    var quoteStack = []
    // select quotes from wikipage
    var quotes = document.querySelectorAll("#mw-content-text > div.mw-parser-output > ul > li")
    // loop and push them in stack
    for(let i=0;i<quotes.length;i++){
        quoteStack.push(quotes[i].innerText)
    }
    // select wikipage to remove
    let myPage = document.querySelector("#\\#mypage")
    myPage.remove()

    // select jumbo
    var jumboP = document.querySelector("p.lead.lh-lg")

    // select reboot
    let bladeB = document.querySelector('#bladeBtn')

    const quoteNow = function (){
        // rand value from array
        const randQuote = quoteStack[Math.floor(Math.random() * quoteStack.length)];
        // change text when click
        jumboP.textContent = randQuote
    }

    // CLICK!
    bladeB.addEventListener('click', quoteNow)


})


