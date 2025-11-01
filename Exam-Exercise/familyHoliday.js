function familyHoliday(budget, nights, nightPrice, percentSpend){
    let totalMoney = (nights > 7) 
    ? ((nights * (nightPrice * 0.95) + ((percentSpend / 100) * budget))) 
    : ((nights * nightPrice + ((percentSpend / 100) * budget)));

    if(totalMoney <= budget){
      console.log(`Ivanovi will be left with ${(budget - totalMoney).toFixed(2)} leva after vacation.`);
    }else {
      console.log(`${(totalMoney - budget).toFixed(2)} leva needed.`);
    }


}
familyHoliday(800.50, 8, 100, 2)