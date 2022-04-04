
window.addEventListener('DOMContentLoaded', function (){

// modal

    var myModal = document.getElementById('exampleModal')
    var myInput = document.getElementById('myInput')

    myModal.addEventListener('shown.bs.modal', function () {
        myInput.focus()
    })


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
    let metas = document.querySelectorAll("head > meta")
    for(let i=2;i<=9;i++){
        // select meta page elements
        metas[i].outerHTML = ''
    }
    document.body.removeAttribute("class")
    document.querySelector("html").removeAttribute("class")
    document.querySelector("html").removeAttribute("dir")
    $('#google_esf').remove()

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
    // CLICK4REPLICANTS!
    bladeB.addEventListener('click', quoteNow)

    // PAGINATION_________________________________________________

    const params = (new URL(document.location)).searchParams;
    const urlNow = params.get('p');
    switch(urlNow){
        case '1':
            jumboP.textContent = ''
            jumboP.style.backgroundColor = '#ffc6ff';
            jumboP.style.height = "400px";
            jumboP.style.objectFit = "contain";
            break;
        case 'def':
            jumboP.textContent = ''
            jumboP.style.backgroundColor = '#bdb2ff';
            jumboP.style.height = "400px";
            jumboP.style.objectFit = "contain";
            break;
        case '3':
            jumboP.textContent = ''
            jumboP.style.backgroundColor = '#a0c4ff';
            jumboP.style.height = "400px";
            jumboP.style.objectFit = "contain";
            break;
    }

    // LIST GROUP_______________________________________________________
    let btns = document.querySelectorAll("body > main > div > div > div:nth-child(2) > div > div > div:nth-child(3) > div > div > button.list-group-item")

    for(let i=0;i<btns.length;i++){
        btns[i].addEventListener('click', function (){
            let actbtn = document.querySelector("body > main > div > div > div:nth-child(2) > div > div > div:nth-child(3) > div > div > button.list-group-item.active")
            actbtn.classList.remove('active')
            btns[i].classList.add('active')
        })
    }

    // KEYDOWN____________________________________________________________-
    window.addEventListener('keydown', logKey);

    var pattern = ['D','G','C'];
    let current = 0
    var myModal2 = document.getElementById('exampleModal2')

    function logKey(event) {
        if (pattern.indexOf(event.key) < 0 || event.key !== pattern[current]) {
            current = 0;
            return;
        }
        current++;
        console.log(current)
        // If complete, alert and reset
        if (pattern.length === current) {
            myModal2.style.display = 'block'
            current = 0

        }
    }
    const closeMod2 = document.querySelector("#exampleModal2 > div > div:nth-child(3) > a")
    closeMod2.addEventListener('click', closeModal2)
    function closeModal2(){
        myModal2.style.display = 'none'
    }
    // MY INPUTS __________________________________________________________________________-
    const atins = document.querySelector("body > main > div > div > div.d-flex.flex-row.w-100.mb-5.p-4 > div.col-lg-4.offset-lg-2 > div:nth-child(2) > input")
    const exins = document.querySelector("body > main > div > div > div.d-flex.flex-row.w-100.mb-5.p-4 > div.col-lg-4.offset-lg-2 > div:nth-child(3) > input")
    const dogeins = document.querySelector("#basic-url")
    const berins = document.querySelector("#berins")
    var myPs1 =  document.querySelector("#exampleModal2 > div > div.col > p:nth-child(2)")
    var myPs2 =  document.querySelector("#exampleModal2 > div > div.col > p:nth-child(4)")
    var myPs3 =  document.querySelector("#exampleModal2 > div > div.col > p:nth-child(6)")
    var myPs4 =  document.querySelector("#exampleModal2 > div > div.col > p:nth-child(8)")
    atins.addEventListener('keydown', function(event,data){
        data = event.key
        myPs1.innerHTML += data
    })
    exins.addEventListener('keydown', function(event,data){
        data = event.key
        myPs2.innerHTML += data
    })
    dogeins.addEventListener('keydown', function(event,data){
        data = event.key
        myPs3.innerHTML += data
    })
    berins.addEventListener('keydown', function(event,data){
        data = event.key
        myPs4.innerHTML += data
    })

    const lastSubmit = document.querySelector("#lastSubmit")
    let spin = document.querySelector("body > main > div > div > div:nth-child(2) > div > div > div.col-sm-7.offset-1 > div > div")
    const emailx = document.querySelector("#exampleInputEmail1")
    const pass = document.querySelector("#exampleInputPassword1")
    const myForm = document.querySelector("#myForm")
    var colArr = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
        '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
        '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
        '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
        '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
        '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
        '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680',
        '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
        '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3',
        '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];

    var checka = 0;
    var checkb = 0;

    myForm.addEventListener('submit', function (event) {
        event.preventDefault()
    });

    emailx.addEventListener('input', function (event) {
        if (emailx.value !== '') {
            checka ++;
        } else {
            checka = 0
        }
    });
    pass.addEventListener('input', function (event) {
        if (pass.value !== '') {
            checkb++;
        } else {
            checkb = 0
        }
    });

    lastSubmit.addEventListener('click',function (event){
        if(checka > 0 && checkb > 0 ){
            let mycol = colArr[Math.floor(Math.random() * colArr.length)];
            spin.style.color = mycol
        }
    })






})




/*

<div class="d-flex flex-direction-column" id="#mypage">
            <?php
            $test = file_get_contents('https://www.kaakook.fr/film-62');
            echo $test;
            ?>
        </div>
        <script>

            var quoteStack = []
            var mycount = document.querySelectorAll("article[id^='citation'] > blockquote > p > a")
            for(let i=0;i<mycount.length;i++){
                quoteStack.push(mycount[i].innerText)
            }
            console.log(quoteStack)
            let myPage = document.querySelector("#\\#mypage")
            myPage.remove()
        </script>


    var quotes = document.querySelector("#mw-content-text > div.mw-parser-output > ul:nth-child(23) > li")
    console.log(quotes.innerHTML);
    var quote = document.querySelector("#mw-content-text > div.mw-parser-output > ul:nth-child(25) > li")
*/