/**
 * CALCULATE TAX
 *
 * Buathlah sebuah function yang akan membagi mobil berdasarkan pajak, dan menghitung pajak,
 * mobil tersebut.
 *
 * pajak di tentukan dari harga mobil tersebut , berikut listnya:
 *  1. dibawah 250 jt = 10%
 *  2. dibawah 400 jt = 20%
 *  3. 400 jt ke atas = 30 %
 *
 *  Contoh bisa liat di test case
 *
 *  RULES:
 *  - Dilarang menggunakan .reduce .filter .map .regex .split .set
 *
 *
 */

function calculateTax(cars) {
  let obj = {
    
  }
  for (let i = 0; i < cars.length; i++) {
    const element = cars[i];
    if(element.price < 250000000){
      if(obj["10%"] === undefined){
        obj["10%"] = [element]
      }else{
        obj["10%"].push(element)
      }
    }else if(element.price < 400000000){
      if(obj["20%"] === undefined){
        obj["20%"] = []
        obj["20%"].push(element)
      }else{
        obj["20%"].push(element)
      }
    }else if(element.price >= 400000000){
      if(obj["30%"] === undefined){
        obj["30%"] = []
      }

      obj["30%"].push(element)
    }
  }
  return obj
}
  
  console.log(
    calculateTax([
      {brand: 'BMW', merk: 'I8', type: 'Coupe', price: 500000000},
      {brand: 'TOYOTA', merk: 'Yaris', type: 'Coupe', price: 250000000},
      {brand: 'HONDA', merk: 'Civic', type: 'Sedan', price: 220000000},
      {brand: 'HONDA', merk: 'City', type: 'Sedan', price: 300000000},
      {brand: 'MITSUBISHI', merk: 'Pajero', type: 'SUV', price: 600000000},
      {brand: 'SUZUKI', merk: 'Ertiga', type: 'SUV', price: 180000000}
    ])
  )
  // {
  //   '30%': [
  //     { brand: 'BMW', merk: 'I8', type: 'Coupe', tax: 'Rp. 150.000.000,00' },
  //     { brand: 'MITSUBISHI', merk: 'Pajero', type: 'SUV', tax: 'Rp. 180.000.000,00' }
  //   ],
  //   '20%': [
  //     { brand: 'TOYOTA', merk: 'Yaris', type: 'Coupe', tax: 'Rp. 50.000.000,00' },
  //     { brand: 'HONDA', merk: 'City', type: 'Sedan', tax: 'Rp. 60.000.000,00' }
  //   ],
  //   '10%': [
  //     { brand: 'HONDA', merk: 'Civic', type: 'Sedan', tax: 'Rp. 22.000.000,00' },
  //     { brand: 'SUZUKI', merk: 'Ertiga', type: 'SUV', tax: 'Rp. 18.000.000,00' }
  //   ],
  // }
  
  console.log(
    calculateTax([
      {brand: 'DAIHATUS', merk: 'AYLA', type: 'Coupe', price: 130000000},
      {brand: 'TOYOTA', merk: 'AGYA', type: 'Coupe', price: 150000000},
      {brand: 'HONDA', merk: 'JAZZ', type: 'Coupe', price: 280000000},
      {brand: 'TOYOTA', merk: 'AVANZA', type: 'SUV', price: 300000000}
    ])
  )
  // {
  //   '10%': [
  //     { brand: 'DAIHATUS', merk: 'AYLA', type: 'Coupe', tax: 'Rp. 13.000.000,00' },
  //     { brand: 'TOYOTA', merk: 'AGYA', type: 'Coupe', tax: 'Rp. 15.000.000,00' }
  //   ],
  //   '20%': [
  //     { brand: 'HONDA', merk: 'JAZZ', type: 'Coupe', tax: 'Rp. 56.000.000,00' },
  //     { brand: 'TOYOTA', merk: 'AVANZA', type: 'SUV', tax: 'Rp. 60.000.000,00' }
  //   ]
  // }