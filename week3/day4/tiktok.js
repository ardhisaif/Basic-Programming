function songTitleFormatter(str) {
    let hasil = ''
    for(let i = 0 ; i < str.length ; i++){
        
        if(str[i] === '-'){
            hasil += ' '
        }else{
            hasil += str[i]
        }
    }
    let split = []
    let kata = ''

    for(let i = 0 ; i < hasil.length ; i++ ){
        if(i === hasil.length - 1){
            kata += hasil[i]
            split.push(kata)
        }
        else if(hasil[i] !== ' '){
            kata += hasil[i]
        }
        else if(hasil[i] === ' '){
            split.push(kata)
            kata = ''
        }
    }
    let string = ''
    let arr = []
    for(let i = 0 ; i < split.length ; i++){
        let result = ''
        
        for(let j = 1 ; j < split[i].length ; j++){
            result += split[i][j]

        }
        result = split[i][0].toUpperCase() + result + ' '
        arr.push(result)
    }
    for(let i = 0 ; i < arr.length ; i++){
        string += arr[i]
    }
    
    return string
}
// console.log(songTitleFormatter("awas-nanti-jatuh-cinta")); //Papi Chulo


function rankByView(obj) {
    if(obj["rank"] === undefined){
        obj["rank"] = ''
        if(obj.views >= 1000000){
            obj.rank = 'top'
        }
        else if(obj.views > 300000){
            obj.rank = 'middle'
        }
        else if(obj.views <= 300000){
            obj.rank = 'low'
        }
        
    }
    
    return obj
}
// console.log(
//     rankByView({
//       user: "chikakiku",
//       views: 200004,
//       song: "papi-chulo",
//     })
//   );/
function songTitleGrouping(data) {
    let output = {}
    for(let i = 0 ; i < data.length ; i++){
        let rank = rankByView(data[i])
        let songName = songTitleFormatter(data[i].song)
        if(output[songName] === undefined ){
            delete rank.song
            output[songName] = rank
        }   
    }
    console.log(output);
    
}
  // TEST CASE
  console.log(
    songTitleGrouping([
      {
        user: "chikakiku",
        views: 1000000,
        song: "papi-chulo",
      },
      {
        user: "lisa Stream",
        views: 155700,
        song: "saranghae",
      },
      {
        user: "mr_jack",
        views: 720000,
        song: "mipan-zuzuzu",
      },
      {
        user: "12yes",
        views: 500000,
        song: "papi-chulo",
      },
      {
        user: "dj_cuap",
        views: 150000,
        song: "saranghae",
      },
    ])
  );
  /*
  {
      "Papi Chulo" : 0,
      "Saranghae" : 0,
      "Mipan Zuzuzu" : 0
  }
//   */
//   console.log(songTitleGrouping([])); // [];
//   console.log(songTitleGrouping()); // Insert data