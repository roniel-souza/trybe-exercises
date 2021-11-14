let numeros = [2, 3, 2, 5, 8, 2, 3];
let contador = 0
for (let index in numeros){
    if (numeros[index] == numeros[index + 1]){
        contador = 
    }
}

function numeroQueMaisRepete (numeros){
    let contador;
    for (let index in numeros){
        if (numeros[index] == numeros[index + 1]){
            contador += 1;
        }
    } return contador;
}