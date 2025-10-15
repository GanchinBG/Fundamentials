function rentCar(budget, season){
  let carPrice = 0;
  let tax = 0;
  let carType;

  if (budget <= 100) {
    carType = (season === "Summer") ? "Cabrio" : "Jeep";
    tax = (season === "Summer") ? 0.35 : 0.65;
    carPrice = tax * budget;
      console.log (`Economy class`);
      console.log (`${carType} - ${carPrice.toFixed(2)}`);

   }else if(budget <= 500){
    carType = (season === "Summer") ? "Cabrio" : "Jeep";
    tax = (season === "Summer") ? 0.45 : 0.80;
    carPrice = tax * budget;
      console.log (`Compact class`);
      console.log (`${carType} - ${carPrice.toFixed(2)}`);

   }else{
    carType = "Jeep";
    tax = 0.90;
    carPrice = tax * budget;
    console.log (`Luxury class`);
    console.log (`${carType} - ${carPrice.toFixed(2)}`);
   }
  
}
rentCar (450 ,"Summer")