
var numbers = [1,37,11,89,3,67,2]
var order = 'asc'

function tri ( numbers , order) {
    if( order == 'asc'){
        for(let i = 0; i < numbers.length ; i++ ){
            for(let i = 0; i < numbers.length - 1 ; i++){
                if(numbers[i] > numbers[i+1]){
                    var alias = numbers [i+1]
                    numbers [i+1] =  numbers [i]
                    numbers [i]  = alias
                }
            }
        }
        return numbers
    } else if (order == 'desc') {
        for (let i = 0; i < numbers.length; i++) {
            for (let i = 0; i < numbers.length - 1; i++) {
                if (numbers[i] < numbers[i + 1]) {
                    var alias = numbers [i + 1]
                    numbers [i + 1] = numbers [i]
                    numbers [i] = alias
                }
            }
        }
        return numbers
    }
}

let check = tri(numbers,order);

console.log(check)