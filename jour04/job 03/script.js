

$(document).ready( function() {

    // get my select values
    const myoption = $("#select");
    var types = [] // <-- my table for types menu

    // fetch JSON
    async function lookForPokemon () {
        const response = await fetch('pokemon.json')
        const pokemons = await response.json()
        return pokemons;
    }

    //extract types
    lookForPokemon().then(pokemons => {

        // get my pokemon list
        for(i=0;i<pokemons.length;i++){
            //push all the different types to an array
            types.push(pokemons[i].type)
            //sort them by alphabetic order
            types.sort()
        }
        // merge all the resultant arrays in one
        var merged = [].concat.apply([], types);
        // function for unique values
        function onlyUnique(value, index, self) {
            return self.indexOf(value) === index;
        }
        // filter unique values
        var unique = merged.filter(onlyUnique)
        // get them in order
        unique.sort()
        console.log(unique)
        for(t=0;t<unique.length;t++){
            var myoption = document.createElement('option');
            var select1 = $('#select');
            myoption.value = unique[t];
            myoption.innerHTML = unique[t];
            select1.append(myoption);
        }

        $('#filtrer').on('click', function (){
            // get my input values
            const id = document.querySelector('#id')
            const nom = document.querySelector('#nom')
            // reinitialise album at every re-click
            var myemptycards = $('#cards').empty()
            var myval = select.value
            var mynames = JSON.parse((JSON.stringify(pokemons[i]['name']['english'])))
            console.log(nom)
            for(i=0;i<pokemons.length;i++){
                if(pokemons[i].type.includes(myval)){
                    var myoption = document.createElement('div');
                    var mycards = $('#cards')
                    myoption.className = 'card p-3'
                    myoption.style = 'width: 18rem'
                    myoption.innerHTML = JSON.stringify(pokemons[i])
                    mycards.append(myoption);
                } else if (JSON.parse((JSON.stringify(pokemons[i]['name']['english'])).includes(nom))){
                    var mycards = $('#cards')
                    myoption.className = 'card p-3'
                    myoption.style = 'width: 18rem'
                    myoption.innerHTML = JSON.parse((JSON.stringify(pokemons[i]['name']['english'])))
                    mycards.append(myoption);
                }

            }
        })
    });


})

