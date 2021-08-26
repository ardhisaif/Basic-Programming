var kata1 = "Hello"
var kata2 = "World"
// output : Kalimatnya adalah : Hello World



/*
 Cek jika angkanya tidak lebih dari nilai Maximum

 5 -> angkanya 5

 100 -> angkanya 100

 101 -> angkanya melebihi nilai maksimum
*/
console.log(kata1 +" "+ kata2);

var input=200
var maximumNilai=100
if (input > maximumNilai) {
   console.log( "angakanya melebihi ninlai maksimum" );
}



//----------------------------------------


/*
ada remote tv yang memiliki 5 tombol
tombol pertama -> menyalakan TV
tombol kedua -> mematikan TV
tombol 3 -> menyalakan channel 3
tombol 4 -> menyalakan channel 4
tombol 5 -> menyalakan channel 5

jika inputnya selain 5 tombol itu -> tombol tidak tersedia
*/

var tombol = 2
//Your Code here
if (tombol === 1 ) {
    console.log("menyalakan TV");
}else if(tombol === 2){
    console.log("mematikan TV");
}else if(tombol === 3){
    console.log("menyalakan channel 3");
}else if(tombol === 4){
    console.log("menyalakan channel 4");
}else if(tombol === 5){
    console.log("menyalakan channel 5");
}

switch (tombol) {
    case 1:
        console.log("menyalakan TV");
        break
    case 2:
        console.log("mematikan TV");
        break;
    case 3:
        console.log("menyalakan channel 3");
        break
    case 4:
        console.log("menyalakan channel 4");
        break
    case 5:
        console.log("menyalakan channel 5");
        break

    default:
        console.log("tombol tidak tersedia");
        break;
}
