/**
 * PERKATA DIBALIK
 * ===============
 * 
 * Sebuah function yang menerima kalimat sebagai input. Output dari function ini adalah kalimat input yang setiap katanya telah dibalik.
 * Soal ini harus dikerjakan secara modular menggunakan fungsi-fungsi yang telah disediakan sebagai berikut:
 * 
 *   -  splitter : berfungsi memisahkan string menjadi array berdasarkan karakter spasi.
 *        - Input : 'Bella Goth gone
 *        - Output : ['Bella', 'Goth', 'gone']
 *   
 *   - to2Dimensi : berfungsi untuk mengubah array of string menjadi array multidimensi dengan isi array terdalam adalah huruf dari kata.
 *       - Input : ['Bella', 'Goth', 'gone']
 *       - Output : [
 *           [ 'B', 'e', 'l', 'l', 'a' ],
 *           [ 'G', 'o', 't', 'h' ],
 *           [ 'g', 'o', 'n', 'e' ]
 *         ]
 *   
 *   - reverseInner : berfungsi untuk membalikan value dari array terdalam yang merupakan huruf-huruf.
 *       - Input : [
 *           [ 'B', 'e', 'l', 'l', 'a' ],
 *           [ 'G', 'o', 't', 'h' ],
 *           [ 'g', 'o', 'n', 'e' ]
 *         ]
 *       - Output : [
 *           [ 'a', 'l', 'l', 'e', 'B' ],
 *           [ 'h', 't', 'o', 'G' ],
 *           [ 'e', 'n', 'o', 'g' ]
 *         ]
 * 
 * RULES : 
 *   - DILARANG menggunakan built-in function selain .push().
 *   - WAJIB menggunakan 3 function bantuan dengan input dan output yang sudah dijelaskan di atas.
 *   - Diperbolehkan untuk menambahkan kode program pada function perkataDibalik.
 * 
 * NOTE : 
 *   - Asumsi input perkataDibalik merupakan kalimat (string).
 */

function splitter(str) {
  let word = ''
  let arr = []
  for (let i = 0; i < str.length; i++) {
    if(i === str.length -1){
      word += str[i]
      arr.push(word)
    }
    else if(str[i] !== ' '){
      word += str[i]
    }
    else{
      arr.push(word)
      word = ''
    }
  }
  return arr
}

function to2Dimensi(array) {
  arr = []
  result = []
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    for (let j = 0; j < element.length; j++) {
      const huruf = element[j];
      arr.push(huruf)
    }
    result.push(arr)
    arr = []
  }
  return result
}

function reverseInner(array) {
  let arr = []
  let hasil = []
  for (let i = 0; i < array.length; i++) {
    for (let j = array[i].length - 1 ; j >= 0 ; j--) {
      arr.push(array[i][j]);
    }
    hasil.push(arr)
    arr = []
  }
  return hasil
}

function perkataDibalik(str) {
  let words = splitter(str);
  let wordCharc = to2Dimensi(words);
  let revCharc = reverseInner(wordCharc)
  let hasil = ''
  for (let i = 0; i < revCharc.length; i++) {
    for (let j = 0; j < revCharc[i].length; j++) {
      const element = revCharc[i][j];
      if(j !== revCharc[i].length - 1){
        hasil += element
      }else{
        hasil += element
        hasil += ' '
      }
    }
  }
  return hasil
}

console.log(perkataDibalik('Bella Goth gone')); // alleB htoG enog
console.log(perkataDibalik('aku makan nasi')); // uka nakam isan
console.log(perkataDibalik('teh atau kopi?')); //het uata ?ipok
console.log(perkataDibalik('AKU MAU AJA')); // UKA UAM AJA

module.exports = {
  splitter,
  to2Dimensi,
  reverseInner,
  perkataDibalik
};
