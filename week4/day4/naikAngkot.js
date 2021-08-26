function naikAngkot(arrPenumpang) {
    let awal = 0
    let akhir = 0
    let arr = []
    let rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    let obj = {
      penumpang : "",
      naikDari : "",
      tujuan : "",
      bayar : 0
    }
    for (let i = 0; i < arrPenumpang.length; i++) {
      const penumpang = arrPenumpang[i];
      obj.penumpang = penumpang[0]
      for (let j = 0; j < rute.length; j++) {
        const element = rute[j];
        if(element === penumpang[1] ){
          awal = j
          obj.naikDari = element
        }else if(element === penumpang[2]){
          akhir = j
          obj.tujuan = element
        }
        obj.bayar = (akhir - awal) * 2000
      }
      arr.push(obj)
    }
    console.log(arr);
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  // console.log(naikAngkot([])); //[]