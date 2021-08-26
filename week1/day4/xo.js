var kata = 'xoxxoo'
let jumlahX = 0
let jumlahO = 0
let jumlahLain = 0
/*
kata = xoxxoxoxoxooox

i = 0
i < 10

*/

for(let i = 0 ; i < kata.length ; i++){
    if(kata[i] == "x"){
        jumlahX ++
    }else if(kata[i] == "o"){
        jumlahO ++
    }
}
console.log(jumlahX);
console.log(jumlahO);

if(jumlahX == jumlahO){
    console.log("true");
}else{
    console.log("false");
}
// console.log(kata[0]);
// console.log(kata[1]);
// console.log(kata[2]);
// console.log(kata[3]);
// console.log(kata[4]);
// console.log(kata[5]);
// console.log(kata[6]);
// console.log(kata[7]);
/*
x
o
x
x
o
x
o
x
*/