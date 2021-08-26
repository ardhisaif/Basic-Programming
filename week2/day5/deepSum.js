function deepSum (arr) {
  let hasil = 0
    for(let i = 0 ; i < arr.length ; i++){
        for (let j = 0; j < arr[i].length; j++) {
          for (let k = 0; k < arr[i][j].length; k++) {
            hasil += arr[i][j][k]
            
          }
          
        }
    }
    return hasil
  }


console.log(deepSum([
    [
      [1, 2, 3],
      [1, 2, 3]
    ],
    [
      [1, 2, 3],
      [1, 2],
      [1]
    ]
  ]))
