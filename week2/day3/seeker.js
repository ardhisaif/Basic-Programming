function vocalSeeker(data) {
    let jumlah = 0
    let vokal = ""
    for(let i = 0 ; i < data.length ; i++){
      for(let j = 0 ; j < data[i].length ; j++){
        if(data[i][j] === 'a' || data[i][j] === 'i' || data[i][j] === 'u' || data[i][j] === 'e' || data[i][j] === 'o' ){
          jumlah += 1
          vokal += data[i][j]
        }
      }
    }return(`vokal ditemukan sebanyak ${jumlah} dan kumpulan vokal adalah ${vokal}`)
  }
  
  //DRIVER CODE
  
  let board = [
    ['*', '*', '*', 10],
    ['*', '*', -5, -10, '*', 100],
    ['a', 'A', 'o', 'b']
  ]
  
  console.log(vocalSeeker(board)); // vokal ditemukan 3 dan kumpulan vokal adalah aao

