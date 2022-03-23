<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="style.css"  type="text/css">
    <script>

        document.addEventListener('DOMContentLoaded', () => {

            let check = document.body.clientWidth
            var btn = document.querySelector('#btn')
            var show = 0 ;


            btn.addEventListener('click', function(e) {
                show++;
                if( check <= 767 ) {
                    var mesa = document.querySelectorAll('a')
                    console.log(mesa)
                    for(i = 0 ; i < mesa.length ; i++){
                        mesa[i].style.display = 'block'
                    }
                }
                if(show % 2 === 0){
                    show = 0
                }
                if(show === 0){
                    var mesaX = document.querySelectorAll('a')
                    for(i = 0 ; i < mesaX.length ; i++){
                        mesaX[i].style.display = 'none'
                    }
                }
            })


            console.log(show)


        })

    </script>
</head>
<body>
<main>
    <header>
       <button id="btn"><img src="menu.svg" alt="menu"></button><a href="">Accueil</a><a href="">Présentation</a><a href="">Contact</a>
    </header>
</main>
</body>
</html>