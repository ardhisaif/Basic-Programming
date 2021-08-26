/**
 * jika kata 1 != kata 2, 3, 4, 5 dst
 * 
 *           
 */

function cariModus(arr) {
    let sama = 0
    let obj = {

    }
    let modus = 0
    let nomer = 0
    let hasil = 0

    

    for(let i = 0 ; i < arr.length ; i++){
        let nomor = arr[i]

        if (obj[nomor] === undefined) {
            obj[nomor] = 1
        } else {
            obj[nomor] ++
        }
    }

    for(let number in obj){
        if(obj[number] > modus){
            modus = obj[number]
            nomer = number
        }
    }
    if(modus === arr.length || modus === 1){
        for(let i = 0 ; i < arr.length -1 ; i ++){
            for(let j = i + 1 ; j < arr.length ; j ++){
                if(arr[i] === arr[j]){
                    sama += 1
                }else{
                    sama += 1
                }
            }
        }
        if(sama === arr.length*2){
            return -1
        }
    }else{
        return Number(nomer)
    }

    

}
  


  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1

/*
{
    1: 1,
    2: 1,
    3: 2,
    4: 1,
    5: 1
}
*/

// var Cities = {City1:"Tokyo",City2:"Paris",City3:"Dubai",City3:"Rome",City4:"London"}
// for(var city in Cities)
// {
//     console.log(city,":",Cities[city]);
// }