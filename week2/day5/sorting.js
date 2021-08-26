function sorting(arrNumber) {
    return arrNumber.sort()
  }
  
  function getTotal(numbers) {
      let jumlah = 0
      for(let i = 0 ; i < numbers.length ; i++){
          if (numbers[i] === numbers[numbers.length - 1]) {
              jumlah += 1
          }
      }return jumlah
  }
  
  function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    if (arrNumber.length === 0) {
        console.log('datanya kosong')
    }else{
        return `angka paling besar adalah ${listSort[listSort.length - 1]} dan jumlah kemunculan sebanyak ${countHighest} kali`
    }
    
    
  }
  
  console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4])); // [2,4,5,6,8,8,8]
//   //'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
  
//   console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//   //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'
  
//   console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//   //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'
  
  console.log(mostFrequentLargestNumbers([]));
  //'datanya kosong'

  let angka = 0