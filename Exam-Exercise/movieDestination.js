function movieDestination(budget, destination, season, days){

let dayPrice = 0;
let totalMoney = 0;

    switch (destination){
      case "Dubai":
        if(season === "Winter") {
          dayPrice = 45000;
        }else {
          dayPrice = 40000;
        }
          totalMoney = (dayPrice * days) * 0.70;
          console.log(totalMoney <= budget 
            ? `The budget for the movie is enough! We have ${(budget - totalMoney).toFixed(2)} leva left!`
            : `The director needs ${(totalMoney - budget).toFixed(2)} leva more!`); 
      break;

      case "Sofia":
         if(season === "Winter") {
          dayPrice = 17000;
        }else {
          dayPrice = 12500;
        }
          totalMoney = (dayPrice * days) * 1.25;
          console.log(totalMoney <= budget 
            ? `The budget for the movie is enough! We have ${(budget - totalMoney).toFixed(2)} leva left!`
            : `The director needs ${(totalMoney - budget).toFixed(2)} leva more!`);    
      break;

      case "London":
        if(season === "Winter") {
          dayPrice = 24000;
        }else {
          dayPrice = 20250;
        }
          totalMoney = (dayPrice * days);
          console.log(totalMoney <= budget 
            ? `The budget for the movie is enough! We have ${(budget - totalMoney).toFixed(2)} leva left!`
            : `The director needs ${(totalMoney - budget).toFixed(2)} leva more!`); 
      break;
      default:
        break;
    }
}
movieDestination(400000, "Sofia", "Winter", 20)