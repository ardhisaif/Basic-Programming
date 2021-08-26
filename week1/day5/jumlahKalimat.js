let kata = ' '
let jumlahSpasi = 0
if(kata === "" || kata === " "){
    console.log("kata kosong");
}else{
    for(let i = 0 ; i < kata.length ; i++){
        if(kata[i] == " "){
            jumlahSpasi ++
        }
    }
    console.log(jumlahSpasi + 1);
    
}


// Contoh 1:
// let kalimat = 'I have a dream'

// maka output yang dihasilkan adalah 4

// Contoh 2:
// let kalimat = 'I believe I can code'

// maka output yang dihasilkan adalah 5

// Contoh 3:
// let kalimat = 'I'

// maka output yang dihasilkan adalah 1