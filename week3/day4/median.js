function cariMedian(arr) {
    if(arr.length % 2 === 0){
        return (arr[arr.length / 2] + arr[arr.length / 2 -1]) / 2
    }else{
        return arr[(arr.length-1) / 2]
    }
  }
  
  // TEST CASES
  console.log(cariMedian([5, 4, 3, 2, 1])); // 3
  console.log(cariMedian([13, 4, 3, 10, 12, 1])); // 7
  console.log(cariMedian([4, 3, 7, 6, 10])); // 6
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([8, 7, 8, 7])); // 7.5