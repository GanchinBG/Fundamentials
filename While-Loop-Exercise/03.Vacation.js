function calculatorVacation(input){
  let moneyForVacation = Number(input.shift());
  let pocket = Number(input.shift());
  let index = 0;
  let days = 0;
  let spend = 0;
  let transaction = 0;

  while(index < input.length){
    if("save" === input[transaction]){
      pocket += Number(input[transaction + 1]);
      spend = 0;
      days++;
      
    }else if ("spend" === input[transaction]){
      pocket -= Number(input[transaction + 1])
      days++;
      if(pocket <= 0){
        pocket = 0;
      }
      spend ++;
      if(spend === 5){
        console.log(`You can't save the money.`);
        console.log(spend);
        return;
      }
    }
    if(pocket >= moneyForVacation){
      
        console.log(`You saved the money for ${days} days.`);
        
        return;
      }
      
      transaction++;
      index++;
     
  }
}
calculatorVacation (["250",
"150",
"spend",
"50",
"spend",
"50",
"save",
"100",
"save",
"100"])

