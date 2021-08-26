let angka = 1300870// 'Rp. 13.000.000,00'
let string = (angka).toString()
let result = ''
// for (let i = 0; i < string.length; i++) {
//     const element = string[i];
//     if((string.length -i ) % 3 !== 0){
//         result += element
//     }else{
//         result += '.'
//         result += element 
//     }
// }
// console.log(`Rp. ${result},00`);
let counter = 0
for (let i = string.length - 1; i >= 0; i--) {
   counter++
   console.log(counter,string[i]);
//    result = string[i] + result
   if (counter === 3) {
       counter = 0
    //    result = '.' + result
   }
}
console.log(result);