/*

i = 2
i < length

plat[i] === ";"
plat[i - 1] % 2 === 0


output =

*/


function ganjilGenap(plat) {
    let genap = 0
    let ganjil = 0
    if(plat === undefined){
        return `invalid data`
    }
    for(let i = 0 ; i < plat.length ; i++ ){
        if(plat[i] === ';'){
             if(plat[i - 1] % 2 === 0 ){
                genap ++
            }else{
                ganjil++
            }  
        }
    }
    if(plat[plat.length - 1] % 2 === 0 ){
        genap ++
    }else{
        ganjil ++
    }
    if(plat === ''){
        return `plat tidak ditemukan`
    }else if(genap === 0){
        return `plat ganjil sebanyak ${ganjil} dan plat genap tidak ditemukan`
    }else if(ganjil === 0){
        return `plat genap sebanyak ${genap} dan plat ganjil tidak ditemukan`
    }else{
        return `plat genap sebanyak ${genap} dan plat ganjil sebanyak ${ganjil}`
    }
    

}


  console.log(ganjilGenap('2341;3429;864;1309;1276')) //plat genap sebanyak 2 dan plat ganjil sebanyak 3
  console.log(ganjilGenap('2347;3429;1305')) //plat ganjil sebanyak 3 dan plat genap tidak ditemukan
  console.log(ganjilGenap('864;1308;1276;1432')) //plat genap sebanyak 4 dan plat ganjil tidak ditemukan
  console.log(ganjilGenap('')) //plat tidak ditemukan
  console.log(ganjilGenap()) //invalid data