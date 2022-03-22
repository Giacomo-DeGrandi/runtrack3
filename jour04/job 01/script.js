
$(document).ready(function(){

    $('#button').on('click', function (){

        showNow();

        async function showNow () {

            const response = await fetch('expression.txt')
            const myTxt = await response.text()
            document.querySelector('#box' ).innerHTML= myTxt
            
        }
    })

})

/*

fetch('expression.txt').then(response => {
     response.text().then(function (text)
            document.querySelector('#box' ).innerHTML= text
     })
})

 */