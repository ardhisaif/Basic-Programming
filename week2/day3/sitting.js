function sittingArrangement(person, column) {
  let result = []
  let arr = []
  let last = 0
  if(column === 0){
    console.log('invalid number');
  }else{
    for(let i = 0 ; i < person.length ; i++){
      arr.push(person[i])
      if(i % column === column - 1){
        result.push(arr)
        arr = []
      }
    }
    if(person.length % column !== 0){
      for(let i = 0 ; i < column -1 ; i++){
        if(arr.length > 0){
          arr.push('kursi kosong')
        }
      }
      result.push(arr)
    }
  }
  return result
}
  
  //DRIVER CODE
  
  console.log(sittingArrangement(['A', 'B', 'C'], 0 )); //Invalid number
  console.log(sittingArrangement([ 'Juli', 'Nisa', 'Desi', 'Ulfa', 'Puji' ], 2)); //[ [ 'Juli', 'Nisa' ], [ 'Desi', 'Ulfa' ], [ 'Puji', 'Kursi Kosong' ] ]
  console.log(sittingArrangement([ 'Yosia', 'Asrawi', 'Andru' ], 3)); //[ [ 'Yosia', 'Asrawi', 'Andru' ] ]
  console.log(sittingArrangement([ 'Lukman', 'Adam', 'Dimas', 'Hansin', 'Orion' ], 4));// [
//   [ 'Lukman', 'Adam', 'Dimas', 'Hansin' ],
//   [ 'Orion', 'Kursi Kosong', 'Kursi Kosong', 'Kursi Kosong' ]
// ]

//