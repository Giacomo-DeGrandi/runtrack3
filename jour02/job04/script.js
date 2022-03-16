'use_strict';


document.addEventListener('keydown',(test) => {
    var myKeys = test.key
    myKeys = myKeys?.toLowerCase()
    document.onkeydown = function() {
        const re = /^[a-z]*$/
        console.log(re.test(myKeys))
        if(re.test(myKeys)){
            document.getElementById("keylogger").value += myKeys;
        }
    }
})

