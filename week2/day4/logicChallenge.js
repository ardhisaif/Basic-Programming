/*
MENCARI JARAK TERDEKAT ANTARA 'X' & 'O'
    jika index ke i = o maka 
    jika index ke i = x maka


*/





function targetTerdekat(arr) {
    let o = []
    let x = []
    let hasil = []

    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] === "o"){
            o.push(i)
        }else if(arr[i] === "x"){
            x.push(i)
        }
    }
    // console.log(x, o);
    for(let i = 0 ; i < x.length ; i++){
        hasil.push(Math.abs(x[i] - o));
    };
    let terkecil = hasil[0]
    for(let i = 0 ; i < hasil.length ; i++){

        if(terkecil > hasil[i]){
            terkecil = hasil[i]
        }
    }
    
    console.log(terkecil);
    console.log(hasil);
  }
  
  /* 


  */
  console.log(targetTerdekat(['x', 'x', 'o', ' ', 'x', 'x', ' ', 'x',])); // 3
//   console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
//   console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
//   console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
//   console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2


// // crate a javscript array
// let numbers_array = [1,2,3,4,5]

// // javascript math max function with spread operator
// let max_value = Math.max(...numbers_array)
// let min_value = Math.min(...numbers_array)

// console.log(max_value)
// // result => 5

// console.log(min_value)
// // result => 1