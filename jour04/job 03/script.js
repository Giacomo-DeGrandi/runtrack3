'use_strict'

$(document).ready( function () {
    var types = [] // <-- my table for types menu
    // fetch JSON
    async function lookForPokemon () {
        const response = await fetch('pokemon.json')
        const pokemons = await response.json()
        return pokemons;
    }
//extract types
    lookForPokemon().then(pokemons => {

        const pokemonsTwo = pokemons
        // get my pokemon list
        for(i=0;i<pokemonsTwo.length;i++){
            //push all the different types to an array
            types.push(pokemonsTwo[i].type)
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
            myoption.innerText = unique[t];
            select1.append(myoption);
        }

    })

    // select my vars to exploit JSON
    const pokeclick = document.querySelector('#filtrer')
    const pokelist = lookForPokemon ();

    pokeclick.addEventListener('click', myFunc , false);

    function myFunc (){
        // reinit my cards
        var myemptycards = $('#cards').empty()
        // get my PROMISE to be exploited by THEN (gimme my promise!)

        pokelist.then(function(result) {
            // get the result of my promise (my pokemon list)
            const pokemonlist = result
            // get the values of my input  ( NB  this is ppossible just after the resolution of the first promise
            // otherwise the results will be undefined inside the scope of the then function of the second resolution
            // but the would be available inside the first one
            const myoptionpoke =document.querySelector('#select').value;
            var pokeid = $('#myNumber').val()
            const pokenom = document.querySelector('#nom').value

            console.log(pokemonlist[0]['type'])

            for(i=0;i< pokemonlist.length; i++){
                if(pokemonlist[i]['id'] === pokeid ){
                    var myoption = document.createElement('div');
                    var mycards = $('#cards')
                    myoption.className = 'card p-3'
                    myoption.style = 'width: 18rem; border: solid 1px black;'
                    myoption.innerHTML = JSON.stringify(pokemonlist[i])
                    mycards.append(myoption);
                } else if(pokemonlist[i]['name']['english'] === pokenom ){
                    var myoption = document.createElement('div');
                    var mycards = $('#cards')
                    myoption.className = 'card p-3'
                    myoption.style = 'width: 18rem; border: solid 1px black;'
                    myoption.innerHTML = JSON.stringify(pokemonlist[i])
                    mycards.append(myoption);
                } else if(pokemonlist[i].type.includes(myoptionpoke)){
                    var myoption = document.createElement('div');
                    var mycards = $('#cards')
                    myoption.className = 'card p-3'
                    myoption.style = 'width: 18rem; border: solid 1px black;'
                    myoption.innerHTML = JSON.stringify(pokemonlist[i])
                    mycards.append(myoption);
                }
            }
        })


    }


})




/*


                if(pokeid){
                    if(pokemonlist[i].id === $('#myNumber').val() )  {
                        var myoption = document.createElement('div');
                        var mycards = $('#cards')
                        myoption.className = 'card p-3'
                        myoption.style = 'width: 18rem'
                        myoption.innerHTML = JSON.stringify(pokemonlist[i])
                        mycards.append(myoption);
                    }
                } else if(pokenom){
                } else if (myoptionpoke){
                    if(myPokemonsList[i].type.includes(myoptionpoke.value)) {
                        var myoption = document.createElement('div');
                        var mycards = $('#cards')
                        myoption.className = 'card p-3'
                        myoption.style = 'width: 18rem'
                        myoption.innerHTML = JSON.stringify(myPokemonsList[i])
                        mycards.append(myoption);
                    }
                }
 */

