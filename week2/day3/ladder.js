/*
word 
kata = []
let i = 1
i < 8

    let j = 0
    j < 8 - 1
    push word[0]
 */

function ladder(word) {
   let hasil = []
   
    for(let i = 0 ; i < word.length ; i++){
        let kata = []

        for(let j = 0 ; j < word.length - i ; j++){
            kata.push(word[j])
        }
        hasil.push(kata)

    }
    return hasil

    
  }
  

  console.log(ladder('hacktiv8'));

