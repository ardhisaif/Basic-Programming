function findAirline(day) {
    const airline = [
      {
        name: "lion air",
        flight: ["senin", "rabu", "jumat"],
        destination: "bali",
        code: "la1",
      },
      {
        name: "batik air",
        flight: ["sabtu", "minggu"],
        destination: "bali",
        code: "ba1",
      },
      {
        name: "garuda",
        flight: ["selasa", "kamis"],
        destination: "bali",
        code: "g1",
      },
    ];
    for(let i = 0 ; i < airline.length ; i++){
        for(let j = 0 ; j < airline[i]['flight'].length ; j++){
            if(airline[i]['flight'][j] === day){
                return airline[i]
            }
        }
    }
  }
//   console.log(findAirline("selasa"));
        // { name: "batik air", 
        // flight: ["sabtu", "minggu"], 
        // destination: "bali", 
        // code: "ba1", },
  
  
  function getTicket(codeTicket, time) {
    const tickets = [
      {
        codeTicket: "la1",
        time: ["08.00", "10.00", "12.00", "14.00"],
        price: 120000,
      },
      {
        codeTicket: "la1",
        time: ["16.00", "18.00", "20.00", "22.00"],
        price: 180000,
      },
      {
        codeTicket: "ba1",
        time: ["08.00", "10.00", "12.00", "14.00"],
        price: 140000,
      },
      {
        codeTicket: "ba1",
        time: ["16.00", "18.00", "20.00", "22.00"],
        price: 200000,
      },
      {
        codeTicket: "g1",
        time: ["08.00", "10.00", "12.00", "14.00"],
        price: 160000,
      },
      {
        codeTicket: "g1",
        time: ["16.00", "18.00", "20.00", "22.00"],
        price: 220000,
      },
    ];
    for(let i = 0 ; i < tickets.length ; i++){
        if(tickets[i]['codeTicket'] === codeTicket){
            for(let j = 0 ; j < tickets[i]['time'].length ; j++){
                if(tickets[i]['time'][j] === time){
                    return tickets[i]
                }
            }
        }
    }
  }
//   console.log(getTicket("g1", "08.00"));

  function getDiscount(passenger, price) {
      if(passenger >= 10){
        return price * (1-(50/100))
      }else if(passenger >= 5){
        return price * (1-(20/100))
      }else if(passenger < 5){
        return price
      }
  }
//   console.log(getDiscount(2, 200000 ));
  
  function selectedTicket(user) {
      let obj = {
          name : '',
          codeTicket : '',
          totalPrice : '',
          airline : '' 
      }
    let airline = findAirline(user.day)
    let tickets = getTicket(airline.code, user.time)
    let discount = getDiscount(user.passenger, tickets.price)
    
    obj.name += user.name
    obj.codeTicket += airline.code
    obj.totalPrice += discount
    obj.airline += airline.name
    return obj
  }
  
  /* TEST CASE */
  
  const user = {
    name: "didi",
    day: "selasa",
    time: "20.00",
    passenger: 11,
  };
  
  console.log(selectedTicket(user));
  
  /*
    {
      name: 'didi',      
      codeTicket: 'g1',
      totalPrice: 1210000,
      airline: 'garuda'  
    }
    */
  
//   const user2 = {
//     name: "andi",
//     day: "senin",
//     time: "10.00",
//     passenger: 2,
//   };
  
//   console.log(selectedTicket(user2));
//   // Dear andi tiket lion air tidak tersedia pada hari senin pukul 08.10
  
//   const user3 = {
//     name: "budi",
//     day: "sabtu",
//     time: "16.00",
//     passenger: 6,
//   };
  
//   console.log(selectedTicket(user3));
  
//   /*
//     {
//       name: 'budi',
//       codeTicket: 'ba1',
//       totalPrice: 960000,
//       airline: 'batik air'
//     }
//   */