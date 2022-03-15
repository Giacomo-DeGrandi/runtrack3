
var x = 11
var y = 14

function isPrimeNum(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    for(let i = num -1; i>=2; i--) {
        if(num %i === 0) isPrimeNum = false;
    }
    return isPrimeNum;
}


function sommenombrespremiers( x, y )
{
    if( isPrimeNum(x) && isPrimeNum(y)) {
        console.log(x + y);
    }
    else {
        console.log(false);
    }
}

sommenombrespremiers( x, y );
