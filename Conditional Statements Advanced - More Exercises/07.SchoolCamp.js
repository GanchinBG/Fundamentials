function schoolCamp(season, group, students, days,){

  let sportType,
      discount = 0,
      totalPrice,
      nightPrice;

  if(students >= 10 && students < 20){
    discount = 0.05;
  }else if(students >= 20 && students < 50){
    discount = 0.15;
  }else if(students >= 50){
    discount = 0.50;
  }

  switch (season){

    case "Winter":
      nightPrice = (group === "boys" || group === "girls") ? 9.60 : 10;
      totalPrice = nightPrice * days * students;
      
      if (group === "boys") {
        sportType = "Judo";
      }else if(group === "girls"){
        sportType = "Gymnastics"
      }else {
        sportType = "Ski"
      }
      
      break;
    case "Spring":
      nightPrice = (group === "boys" || group === "girls") ? 7.20 : 9.50;
      totalPrice = nightPrice * days * students;
      //console.log(totalPrice)
      if (group === "boys") {
        sportType = "Tennis";
      }else if(group === "girls"){
        sportType = "Athletics"
      }else {
        sportType = "Cycling"
      }
      break;
    case "Summer":
      nightPrice = (group === "boys" || group === "girls") ? 15 : 20;
      totalPrice = nightPrice * days * students;
      if (group === "boys") {
        sportType = "Football";
      }else if(group === "girls"){
        sportType = "Volleyball"
      }else {
        sportType = "Swimming"
      }
      break;  
    default:
      break;
  }

    totalPrice = totalPrice - (totalPrice * discount);
    console.log(`${sportType} ${totalPrice.toFixed(2)} lv.`);
}
schoolCamp ("Summer", "boys", 60, 7)
