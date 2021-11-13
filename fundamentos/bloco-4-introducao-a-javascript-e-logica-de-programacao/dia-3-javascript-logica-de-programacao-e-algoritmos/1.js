let n = 5;
let array = "*";
// for (let index = 1; index <= n; index += 1){
for (let index = 1; index <= n; index += 2){
    // console.log("*****")
    // console.log(array.repeat(index))
    console.log(' '.repeat(index + 2) + array.repeat(index));
}
// for (let i = 0; i < array.length; i += 1) {
//     text += cars[i] + " ";
// }