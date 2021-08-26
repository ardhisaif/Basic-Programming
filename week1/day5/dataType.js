var kata = 0

if(kata === 0 || Number.isNaN(kata) || kata === "" || kata === undefined || kata === null ){
    console.log("invalid data");
}else if(typeof kata === "string"){
    console.log("username " + kata);
}else if(typeof kata === 'number'){
    console.log("age " + kata);
}else if(typeof kata === 'boolean'){
    if(kata === true){
        console.log("thankyou for agreeing");
    }else{
        console.log("cannot proceed without ageement");
    }
}