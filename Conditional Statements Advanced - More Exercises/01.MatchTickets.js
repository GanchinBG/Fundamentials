function euroGames(budget, ticketCategory,  fans){
  let vipTicket = 499.99;
  let normalTicket = 249.99;
  let travelCost = 0;
  let total = 0;
  
  switch(ticketCategory){
    case "VIP":
    if (fans >= 1 && fans <= 4){
      travelCost = (budget * 0.75);
    }else if(fans >= 5 && fans <= 9){
      travelCost = (budget * 0.60);
    }else if(fans >= 10 && fans <= 24){
      travelCost = (budget * 0.50);
    }else if(fans >= 25 && fans <= 49){
      travelCost = (budget * 0.40);
    }else if(fans >= 50){
      travelCost = (budget * 0.25);
    }
    total = (fans * vipTicket) + travelCost;
    if (total <= budget) {
      console.log(`Yes! You have ${(budget - total).toFixed(2)} leva left.`);
    } else {
      console.log(`Not enough money! You need ${(total - budget).toFixed(2)} leva.`);
    }
    break;
    case "Normal":
      if (fans >= 1 && fans <= 4){
      travelCost = (budget * 0.75);
    }else if(fans >= 5 && fans <= 9){
      travelCost = (budget * 0.60);
    }else if(fans >= 10 && fans <= 24){
      travelCost = (budget * 0.50);
    }else if(fans >= 25 && fans <= 49){
      travelCost = (budget * 0.40);
    }else if(fans >= 50){
      travelCost = (budget * 0.25);
    }
    total = (fans * normalTicket) + travelCost;
    
    if (total <= budget) {
      console.log(`Yes! You have ${(budget - total).toFixed(2)} leva left.`);
    } else {
      console.log(`Not enough money! You need ${(total - budget).toFixed(2)} leva.`);
    }
    break;
    default:
      break;
  }
}
euroGames(1000, "Normal", 1)