'use_strict';


document.addEventListener('keydown',(test) => {
    var myKeys = test.key
    myKeys = myKeys?.toLowerCase()
    document.onkeydown = function() {
        document.getElementById("keylogger").value += myKeys;
    }
})



/*
'use_strict';

document.onkeydown = function() {
    var doc = document.hasFocus()
    console.log(doc)
    var types = document.getElementById('keylogger').textContent;
    document.getElementById('keylogger').textContent = doc
    //var types = document.getElementById('keylogger').textContent;
    //document.getElementById('keylogger').focus()
}
*/