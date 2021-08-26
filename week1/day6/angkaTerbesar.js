/*
var angka = 18392898998
var angka2 = String(angka)

looping





 */
var angka = 18392898998
var angka2 = String(angka)
var angka3 = ''
var terbesar = 0
for(let i = 0 ; i < angka2.length - 1 ; i++ ){
    angka3 = angka2[i] + angka2[i+1];
    angka3 = Number(angka3)
    if(angka3 > terbesar){
        terbesar = angka3
    }
}

console.log(terbesar);


// let angkaNum = Number(angka2[i] + angka2[i+1])
// console.log(angkaNum);