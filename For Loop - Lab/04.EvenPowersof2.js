function evenPower2(number){
  for(let i = 0; i <= number;i++){
    let powerBynumber = Math.pow(2, i);
    
    if (i % 2 === 0){
      console.log(powerBynumber);
    }
  }

}
evenPower2(3)