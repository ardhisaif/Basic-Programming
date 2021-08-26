function changeMe(arr) {
    if(arr[0] === []){
        console.log("");
    }

    
    for(let i = 0 ; i < arr.length ; i ++){
        let data = {
            firstName : arr[i][0] ,
            lastName : arr[i][1] ,
            gender : arr[i][2] ,
            age : 2020 - arr[i][3]           

        }
        if(arr[i][3] === undefined){
            data.age ='Invalid Data Birth' 
        }
        
        console.log(data);
        

    }
    
  }
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]);
  // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 38 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""

console.log();