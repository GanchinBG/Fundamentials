function backToThePast(money, yearLived){
  let yearEvenMoney = 12000;
  let age = 17;
  
    for (let i = 1800;i <= yearLived;i++){
      age++;
      if (i % 2 === 0){
        money -= yearEvenMoney;
      } else {
        money -= yearEvenMoney + (age * 50);
      }
    }
      if (money >= 0){
        console.log(`Yes! He will live a carefree life and will have ${money.toFixed(2)} dollars left.`);
      } else {
        console.log(`He will need ${Math.abs(money).toFixed(2)} dollars to survive.`);
      }
}
backToThePast(100000.15,
1808)