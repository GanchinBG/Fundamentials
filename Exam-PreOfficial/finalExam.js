function finalExam (dancers, points, season, places){
  
  let total = 0;
  let donation = 0;
  let result = 0;
  switch (places){
    case "Bulgaria":
      result = dancers * points;
        if(season === "summer"){
          result *= 0.95;
        } else { 
          result *= 0.92;
        }
        donation = result * 0.75;
        total = result - donation;
        break;

    case "Abroad":
      result = dancers * points * 0.50 + dancers * points;
        if(season === "summer"){
          result *= 0.90;
        } else { 
          result *= 0.85;
        }
        donation = result * 0.75;
        total = result - donation;
    break;
    default:
      break;
  }
    console.log(`Charity - ${donation.toFixed(2)}`);
    console.log(`Money per dancer - ${(total / dancers).toFixed(2)}`);
}
finalExam(1,
89.5,
"summer",
"Abroad"
)