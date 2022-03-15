
let myDate = new Date('January 4, 1975 23:15:30')

function jourtravaille(myDate){

    var jour = myDate.getDate()
    var mois = myDate.getMonth() + 1
    var année = myDate.getFullYear()


    if( jour == 1 && mois == 1 ||
        jour == 13 && mois == 4 ||
        jour == 1 && mois == 5 ||
        jour == 8 && mois == 5 ||
        jour == 21 && mois == 5 ||
        jour == 14 && mois == 7 ||
        jour == 15 && mois == 8 ||
        jour == 1 && mois == 11 ||
        jour == 11 && mois == 11 ||
        jour == 25 && mois == 12 ){

        return 'Le '+ jour +' '+ mois  +' '+ année +' est un jour férié.'

    } else if (myDate.getDay()==6 || myDate.getDay()== 7 ){

        return 'Non, '+ jour +' '+ mois +' '+ année +' est un week-end'

    } else {
        return 'Oui, '+ jour +' '+ mois +' '+ année +' est un jour travaillé'
    }
}

console.log(jourtravaille(myDate))
