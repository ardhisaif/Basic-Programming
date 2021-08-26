var nama = "asep"
var umur = 18
var uang = 100000
var hargaJus = 50000
var hargaAnggur = 300000
if (nama === "" ) {
    console.log("anda tidak boleh masuk");
}else{
    if (umur < 17 ) {
        console.log("anda hanya memesan jus");
        if(hargaJus > uang){
            console.log("uang tidak cukup anda harus pulang");
        }else{
            console.log("anda bisa pesan minum");
            console.log("sisa uang anda adalah ");
            console.log(uang - hargaJus);
        }
        ;
    }else{
        console.log("anda boleh memesan anggur");
        if(hargaAnggur > uang ){
            console.log("uang tidak cukup anda harus pulang");
        }else{
            console.log("anda bisa memesan anggur");
            console.log("sisa uang anda adalah");
            console.log(uang - hargaAnggur);
        }
    }
}