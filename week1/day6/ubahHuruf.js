var kata = "i love javascript"
var kata2 = ""
/*
var kata = "i love javascript"
var kata2 = "$"

i = 0
i < kata.length

kata[0] = vokal
kata2 += "$"
*/
for(let i = 0 ; i < kata.length ; i++){
    if(kata[i] === "a" || kata[i] === "i" || kata[i] === "u" || kata[i] === "e" || kata[i] === "o" ){
        kata2 += "9"
    }else{
        kata2 += kata[i]
    }   
}
console.log(kata2);