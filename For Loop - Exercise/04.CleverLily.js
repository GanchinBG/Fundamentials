function moneySaved(age, washMachine, toyPrice){
  let money = 0;
  let total = 0;
  let sumToyPrice = 0;
  let brotherMoney = 0;
    for (let i = 1; i <= age; i++){
      if (i % 2 === 0){
        
        total += 10 * i / 2;
      }
      sumToyPrice += (i % 2 === 0) ? 0 : toyPrice;
      }
    
    if(age % 2 === 0){
      brotherMoney = age / 2;
    }else {
      brotherMoney = (age - 1) / 2;
    }
    money = total + sumToyPrice - brotherMoney;
    if (money >= washMachine){
    console.log(`Yes! ${(money - washMachine).toFixed(2)}`);
  }else {
    console.log(`No! ${(washMachine - money).toFixed(2)}`);
  }
}
moneySaved(21,1570.98,3)