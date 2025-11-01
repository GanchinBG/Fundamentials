function fruitShop(strawberryPrice, bananas, oranges, berry, strawberies){
     
    let berryPrice = strawberryPrice / 2;
    let orangePrice = berryPrice - (berryPrice * 0.4);
    let bananaPrice = berryPrice - (berryPrice * 0.8);

    let totalMoney = ((strawberies * strawberryPrice) + (bananaPrice * bananas) + (berry * berryPrice) + (orangePrice * oranges));

    console.log(totalMoney.toFixed(2));
}
fruitShop(48, 10, 3.3, 6.5, 1.7)