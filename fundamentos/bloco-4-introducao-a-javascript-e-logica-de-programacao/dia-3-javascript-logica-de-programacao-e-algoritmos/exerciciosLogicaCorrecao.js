// EXERCICIO 1 

// let n = 5;
// let symbol = '*'
// let inputLine = '';
// for (let index = 0; index < n; index += 1){
//     inputLine = inputLine + symbol;
// }
// for(let index = 0; index <n; index += 1){
//     console.log(inputLine)
// }

// EXERCICIO 2 

// let size = 5;
// let symbol = '*';
// let inputLine = '';
// for (let index = 0; index <= size; index += 1){
//     console.log(inputLine);
//     inputLine = inputLine + symbol
// }

// EXERCICIO 3

// let size = 5;
// let symbol = '*';
// let inputLine = '';
// let inputPosition = size;
// for (let lineIndex = 0; lineIndex <= size; lineIndex += 1){
//     for (let columnIndex = 0; columnIndex <= size; columnIndex += 1){
//         if (columnIndex < inputPosition){
//             inputLine = inputLine + ' ';
//         } else {
//             inputLine = inputLine + symbol;
//         }
//     }
//     console.log(inputLine);
//     inputLine = '';
//     inputPosition -= 1;
// }

// EXERCICIO 4
// let size = 5;
// let symbol = '*';
// let inputLine = '';
// let midOfMatrix = (size + 1) / 2
// let controlLeft = midOfMatrix;
// let controlRight = midOfMatrix;
// for (let lineIndex = 0; lineIndex <= midOfMatrix; lineIndex += 1){
//     for (let columnIndex = 0; columnIndex <= size; columnIndex += 1){
//         if (columnIndex > controlLeft && columnIndex < controlRight){
//             inputLine = inputLine + symbol;
//         } else {
//             inputLine = inputLine + ' ';
//         }
//     }
//     console.log(inputLine);
//     inputLine = '';
//     controlRight += 1;
//     controlLeft -= 1;
// }

// EXERCICIO BONUS 5

// let n = 7;
// let middle = (n + 1) / 2;
// let controlLeft = middle;
// let controlRight = middle;
// let symbol = '*';
// for (let line = 1; line <= middle; line += 1) {
//   let outputLine = '';
//   for (let col = 1; col <= n; col += 1) {
//     if (col == controlLeft || col == controlRight || line == middle) {
//       outputLine += symbol;
//     } else {
//       outputLine += ' ';
//     }
//   }
//   controlLeft -= 1;
//   controlRight += 1;
//   console.log(outputLine);
// }

// BONUS 6
// let divisors = 1;
// let numberToCheck = 31;

// for (let number = 2; number <= numberToCheck; number += 1) {
//   if (numberToCheck % number === 0) divisors += 1;
// }

// if (divisors === 2) console.log(numberToCheck + ' é primo');
// else console.log(numberToCheck + ' não é primo');