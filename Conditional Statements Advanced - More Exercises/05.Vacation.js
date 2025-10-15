function vacationAdvasior(budget, season){
  let location;
  let type;
  let tax;
  let totalPrice;

    if (budget <= 1000) {
      type = "Camp";
      location = (season === "Summer") ? "Alaska" : "Morocco";
      tax = (season === "Summer") ? 0.65 : 0.45;
      totalPrice = tax * budget;
    
    }else if(budget <= 3000) {
      type = "Hut";
       location = (season === "Summer") ? "Alaska" : "Morocco";
      tax = (season === "Summer") ? 0.80 : 0.60;
      totalPrice = tax * budget;

    }else{
      type = "Hotel";
       location = (season === "Summer") ? "Alaska" : "Morocco";
      tax = (season === "Summer") ? 0.90 : 0.90;
      totalPrice = tax * budget;
    }

    console.log(`${location} - ${type} - ${totalPrice.toFixed(2)}`);
  }
  vacationAdvasior (800, "Summer")