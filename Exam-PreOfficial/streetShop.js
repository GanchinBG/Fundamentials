function streetShop (dailyCash, dailyMoneyWin, expenses, giftPrice){

    let total = (5 * dailyCash) + (5 * dailyMoneyWin) - expenses;

    if (total >= giftPrice){
      console.log(`Profit: ${total.toFixed(2)} BGN, the gift has been purchased.`);
    } else {
      console.log(`Insufficient money: ${(giftPrice - total).toFixed(2)} BGN.`);
    }

}
streetShop(5.12,
32.05,
15,
150
)