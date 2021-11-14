function verificaMaiorValor (array){
    let bigIndex = array[0];
    for (let index = 1; index < array.length; index += 1){
        if (array[index] > bigIndex){
            bigIndex = index
        } 
    } return console.log(bigIndex)
} 
verificaMaiorValor([2, 8, 19, 24, 1, 7, 26]);