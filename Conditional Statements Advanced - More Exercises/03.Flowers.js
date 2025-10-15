function flowersShop (amountChrys, amountRose, amountTulipa, season, holiday){
  let chrysPrice,
      rosePrice,
      tulipaPrice;
  let tax = (holiday === "Y") ? 0.15 : 0;
  let total;

  switch (season){
      case "Spring":
      case "Summer":
        chrysPrice = 2.00;
        rosePrice = 4.10;
        tulipaPrice = 2.50;
        total = chrysPrice * amountChrys + rosePrice * amountRose + tulipaPrice * amountTulipa;
        total = total + (total * tax);
        
      break;

      case "Autumn":
      case "Winter":
        chrysPrice = 3.75;
        rosePrice = 4.50;
        tulipaPrice = 4.15;
        total = chrysPrice * amountChrys + rosePrice * amountRose + tulipaPrice * amountTulipa;
        total = total + (total * tax);
      break;
      default:
        break;
  }
      if (season === "Spring" && amountTulipa > 7) total = total - (total * 0.05);
      if (season === "Winter" && amountRose >= 10) total = total - (total * 0.1);
      if ((amountChrys + amountRose + amountTulipa) > 20) total = total - (total * 0.2);

      console.log ((total + 2.00).toFixed(2));
      


}
flowersShop(3,10,9,"Winter","N")