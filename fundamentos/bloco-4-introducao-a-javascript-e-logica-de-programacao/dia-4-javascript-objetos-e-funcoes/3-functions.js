function verificaMenorValor (array){
    let smallIndex = array[0];
    for (let index = 1; index < array.length; index += 1){
        if (array[index] < smallIndex){
            smallIndex = index
        } 
    } return console.log(smallIndex)
} 
verificaMenorValor([2, 4, 6, 7, 10, 0, -3]);