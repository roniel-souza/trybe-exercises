let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for(let number of numbers){
    // console.log(number);
}
let soma = 0;
for (let index = 0; index < numbers.length; index += 1) {
    soma += numbers[index]
}
// console.log(soma);
let mediaAritmetica = soma / (numbers.length - 1);
// console.log(mediaAritmetica);
if (mediaAritmetica > 20){
    // console.log("valor maior que 20");
} else {
    // console.log("valor menor ou igual a 20");
}
let bigNumber = numbers[0];
for (let index = 1; index < numbers.length; index += 1) {
    if (numbers[index] > bigNumber){
        bigNumber = numbers[index]
    }
}
// console.log(bigNumber)
let cont = 0
for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 != 0) {
        cont = cont + 1;
        }
}
if (cont > 0){
    // console.log(cont)
} else {
    // console.log("nenhum valor ímpar encontrado")
}
let smallNumber = numbers[0]
for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] < smallNumber){
        smallNumber = numbers[index]
    }
}
// console.log(smallNumber);
let array = [];
for (index = 1; index < 26; index += 1){
    // array.push(index);
    array.push(index / 2);
}
console.log(array);

