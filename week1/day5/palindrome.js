var kata = "katak"

let hasil = ""
for(let i = kata.length - 1 ; i >= 0 ; i-- ){
    hasil += kata[i]
}
if( kata === hasil){
    console.log(true);
}else{
    console.log(false);
}

