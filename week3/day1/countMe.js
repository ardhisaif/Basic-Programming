function countMe(arr) {
    
    let obj = {
    }
    for(let i = 0 ; i < arr.length ; i++){
        let nama = arr[i]
        if (obj[nama] === undefined) {
            obj[nama] = 1
        }
        else{
            obj[nama] += 1
        }
    }

    console.log(obj);
}
  
  console.log(countMe(['Sofyan', 'Ricky', 'Sofyan', 'Semmi', 'Semmi', 'Wika']));
  // { Sofyan: 2,
//    Ricky: 1, 
//    Semmi: 2, 
//    Wika: 1 }
  
  console.log(countMe([ 1, 15, 9, 10, 8, 1, 12, 15, 10, 3 ]));
  // { '1': 2,
//    '3': 1, 
//    '8': 1, 
//    '9': 1, 
//    '10': 2, 
//    '12': 1, 
//    '15': 2 }

// let data = {
//     Sofyan:1
// }
// if(data.Sofyan === undefined){
//     data.Sofyan = 1
// }else{
//     data.Sofyan += 1
// }

// data.Andi += 1
// console.log(data);