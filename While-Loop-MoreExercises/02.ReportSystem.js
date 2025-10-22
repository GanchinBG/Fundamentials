function systemTransactionReport(input){
let target = Number(input.shift());
let cashCount = 0;
let cashMoney = 0;
let cardCount = 0;
let cardMoney = 0;
let index = 0;
  while(index < input.length){
    
    if("End" === input[index]){
      console.log(`Failed to collect required money for charity.`);
      return;
     }
    if (index % 2 === 0) {
        if(Number(input[index]) > 0 && Number(input[index]) <= 100){
        console.log(`Product sold!`);
        cashCount++;
        cashMoney += Number(input[index]);
    }else {
      console.log(`Error in transaction!`);
     }
    }else {
        if(Number(input[index]) > 0 && Number(input[index]) >= 10){
      console.log(`Product sold!`);
      cardCount++;
      cardMoney += Number(input[index]);
     }else{
      console.log(`Error in transaction!`);
     }
    }
     if (cashMoney + cardMoney >= target){
      console.log(`Average CS: ${(cashMoney / cashCount).toFixed(2)}`);
      console.log(`Average CC: ${(cardMoney / cardCount).toFixed(2)}`);
      return;
     }
    
     index++;

  }
   if (cashMoney + cardMoney < target){
    console.log(`Failed to collect required money for charity.`);
   }
}
systemTransactionReport(["5", "00", "12", "0", "8", "63", "256", "78", "317"])
//600, 86, 150, 98, 227, End
//["5", "00", "12", "0", "8", "63", "256", "78", "317"]
