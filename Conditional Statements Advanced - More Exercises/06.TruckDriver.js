function truckDrive(season, monthKm){
  let kmPrice = 0;
  let tax = 0.10;
  let totalPrice = 0;

  switch (season){

    case "Spring":
    case "Autumn":
        if (monthKm <= 5000){
            kmPrice = 0.75;
            totalPrice = 4 * (monthKm * kmPrice) - ((4 * (monthKm * kmPrice)) * tax);
        }else if (monthKm <= 10000){
            kmPrice = 0.95;
            totalPrice = 4 * (monthKm * kmPrice) - ((4 * (monthKm * kmPrice)) * tax);
        }else if (monthKm <= 20000){
            kmPrice = 1.45;
            totalPrice = 4 * (monthKm * kmPrice) - ((4 * (monthKm * kmPrice)) * tax);
        }
    break;
    case "Summer":
        if (monthKm <= 5000){
            kmPrice = 0.90;
            totalPrice = 4 * (monthKm * kmPrice) - ((4 * (monthKm * kmPrice)) * tax);
        }else if (monthKm <= 10000){
            kmPrice = 1.10;
            totalPrice = 4 * (monthKm * kmPrice) - ((4 * (monthKm * kmPrice)) * tax);
        }else if (monthKm <= 20000){
            kmPrice = 1.45;
            totalPrice = 4 * (monthKm * kmPrice) - ((4 * (monthKm * kmPrice)) * tax);
        }
    break;
    case "Winter":
        if (monthKm <= 5000){
            kmPrice = 1.05;
            totalPrice = 4 * (monthKm * kmPrice) - ((4 * (monthKm * kmPrice)) * tax);
        }else if (monthKm <= 10000){
            kmPrice = 1.25;
            totalPrice = 4 * (monthKm * kmPrice) - ((4 * (monthKm * kmPrice)) * tax);
        }else if (monthKm <= 20000){
            kmPrice = 1.45;
            totalPrice = 4 * (monthKm * kmPrice) - ((4 * (monthKm * kmPrice)) * tax);
        }
    break;
    default:
      break;
  }
  console.log(totalPrice.toFixed(2));
}
truckDrive("Summer", 3455)