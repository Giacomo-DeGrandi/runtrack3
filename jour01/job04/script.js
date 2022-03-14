
var année;
année = 2021;

function bissextile(année){
    if(année % 4 === 0 || année % 100 === 0 || année % 400 === 0 ){
        return 'est bissextile'
    } else {
        return 'n\'est pas bissextile'
    }
}

window.alert(bissextile(année))