function changeVocals (str) {
   let kata = ''
    for (let i = 0; i < str.length; i++) {
        switch (str[i]) {
            case 'a':
                kata += 'b'
                break;
            case 'i':
                kata += 'j'
                break
            case 'u':
                kata += 'v'
                break
            case 'e' :
                kata += 'f'
                break
            case 'o' :
                kata += 'p'
                break
            case 'A':
                kata += 'B'
                break;
            case 'I':
                kata += 'J'
                break
            case 'U':
                kata += 'V'
                break
            case 'E' :
                kata += 'F'
                break
            case 'O' :
                kata += 'P'
                break
            default:
                kata += str[i]
                break;
        }
    }return kata
  }
  
  function reverseWord (str) {
      let kata = ''
      for(let i = str.length - 1 ; i >= 0 ; i--){
          kata += str[i]
      }
      return kata
  }

  function setLowerUpperCase (str) {
      let kata = ''
      for(let i = 0 ; i < str.length ; i++){
          if(str[i] === str[i].toUpperCase()){
              kata += str[i].toLowerCase()
          }else{
              kata += str[i].toUpperCase()
          }
      }
      return kata
  }
  
  function removeSpaces (str) {
    let noSpasi = ''
    for(let i = 0 ; i < str.length ; i++){
        if(str[i] !== ' '){
            noSpasi += str[i]
        }
    }
    return noSpasi

  }
  function passwordGenerator (name) {
      if(name.length < 6){
          return 'Minimal karakter yang diinputkan adalah 5 karakter'
      }else{
          let hapusSpasi = removeSpaces(name)
          let kecilBesar = setLowerUpperCase(hapusSpasi)
          let balikKata = reverseWord(kecilBesar)
          let gantiVokal = changeVocals(balikKata)
          return gantiVokal
      }
  }

  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
//   console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
//   console.log(passwordGenerator('Alexei')); // 'JFXFLb'
//   console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'