function somaTudo(numeros){
    let total = 0;
    for (let index = 1; index <= numeros; index += 1){
        total = total + index
    }
    return total;
}
console.log(somaTudo(5));