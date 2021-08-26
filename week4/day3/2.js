/**
 * KOMPILASI NOMOR INSTRUKTUR
 * ==========================
 * 
 * Untuk suatu keperluan, H8 melakukan pendataan dan pengelompokkan nomor telepon para instruktur.
 * Nomor-nomor telepon yang terkumpul kemudian dikelompokkan berdasarkan 4 digit pertama.
 * Berikut adalah daftar pola nya. D1 adalah digit ke 1, D2 adalah digit ke 2, dst
 * [
 *   ['D1', 'D2', 'D3', 'D4', 'Operator'],
 *   ['0' , '8' , '1' , '2' , 'SimTapi'],
 *   ['0' , '8' , '1' , '5' , 'Menrati'],
 *   ['0' , '8' , '5' , '6' , 'IM5'],
 *   ['0' , '8' , '1' , '7' , 'X-R'],
 *   ['0' , '8' , '3' , '8' , 'Axios'],
 * ]
 * 
 * Buatlah fungsi kompilasi dengan parameter pola dan data hasil pengumpulan nomor telepon, dan hasilkan
 * output objek seperti contoh di bawah
 */

function kompilasi(pola, data) {
  let obj = {}
  for (let l = 1; l < pola.length; l++) {
    let hasilPola = pola[l][0] + pola[l][1] + pola[l][2] + pola[l][3];
    let operator = pola[l][4]
    for (let i = 0; i < data.length; i++) {
      let nomer = data[i].hp[0] + data[i].hp[1] + data[i].hp[2] + data[i].hp[3]
      if(nomer === hasilPola){
        if(obj[operator ]=== undefined){
          obj[operator] = [data[i].nama]
        }else{
          obj[operator].push(data[i].nama)
        }
      }
    }
  }
  console.log(obj);
}

let pattern = [
  ['D1', 'D2', 'D3', 'D4', 'Operator'],
  ['0', '8', '1', '2', 'SimTapi'],
  ['0', '8', '1', '5', 'Menrati'],
  ['0', '8', '5', '6', 'IM5'],
  ['0', '8', '1', '7', 'X-R'],
  ['0', '8', '3', '8', 'Axios'],
];

let input = [
  {
    nama: 'Fiqi',
    hp: '08123456789'
  },
  {
    nama: 'Daniel',
    hp: '0856542187'
  },
  {
    nama: 'Zulkifli',
    hp: '08153456789'
  },
  {
    nama: 'Afifah',
    hp: '08123456789'
  },
  {
    nama: 'Devita',
    hp: '08173456789'
  },
];

console.log(kompilasi(pattern, input));
// {
//   SimTapi: [ 'Fiqi', 'Afifah' ],
//   IM5: [ 'Daniel' ],
//   Menrati: [ 'Zulkifli' ],
//   'X-R': [ 'Devita' ]
// }

input = [];

// console.log(kompilasi(pattern, input));
// Tidak ada data untuk diolah

module.exports = kompilasi;
