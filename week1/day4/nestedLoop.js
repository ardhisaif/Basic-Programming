/*
row1 = 7

i = 7



output: 
*
*
*
*
*
*
*


*/

// let row1 = 7

// for (let i = 0 ; i < row1 ; i++) {
//     console.log("*");
// }


/*
row2 = 6

i = 1
i <= row2

star = ""

j = 2
j < 5

star = "*"



*/
// let row2 = 6

// for(let i = 1 ; i <= row2 ; i++){
//     let star = ""
//     for(let j = 0 ; j < i ; j++){
//         star = star + "*"
//     };
//     console.log(star)
// }


let row3 = 6
for(let i = 0 ; i < row3 ; i++){
    let star = ""
    for(let j = 0 ; j < row3 - i ; j++){
        star += "*";
    }console.log(star);
}
