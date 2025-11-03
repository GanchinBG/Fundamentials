function bakery(flourPrice, flourAmount, sugarAmount, eggsAmount, yeastAmount){

  let sugarPrice = 0.75 * flourPrice;
  let eggsPrice = 1.10 * flourPrice;
  let yeastPrice = 0.20 * sugarPrice;

  let total = sugarAmount * sugarPrice + flourAmount * flourPrice + eggsAmount * eggsPrice + yeastAmount * yeastPrice;

  console.log(total.toFixed(2));
}

bakery(50, 10, 3.5, 6, 1)