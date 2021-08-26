var waktu = 125
var menit = Math.floor(waktu / 60)
var detik = waktu % 60

console.log(menit);
console.log(detik);
if(detik < 10){
    detik ="0" + detik
}

console.log(`${menit}:${detik}`);
