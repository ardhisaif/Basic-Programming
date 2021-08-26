function splitting(str) {
    let arr = []
    let kata = ''
    for(let i = 0 ; i < str.length ; i++ ){
        if(i === str.length - 1){
            kata += str[i]
            arr.push(kata)
        }else if(str[i] !== ',' && str[i] !== '-'){
            kata += str[i]
        }else{
            arr.push(kata)
            kata = ''
        }
    }
    return arr
}

function meleeRangedGrouping (str) {
    let split = splitting(str)
    let arr1 = []
    let arr2 = []
    let result =[]
    result.push(arr1)
    result.push(arr2)

    if(str === ''){
        return []
    }else{
        for(let i = 0 ; i < split.length ; i++){
            if(split[i] === 'Ranged'){
                arr1.push(split[i - 1])
            }else if(split[i] === 'Melee'){
                arr2.push(split[i - 1])
            }
        }
        return result
    }

    
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []