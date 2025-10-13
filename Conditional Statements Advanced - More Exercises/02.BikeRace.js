function cyclingRace(juniors, seniors, track){
  let total;
  let taxJuniors;
  let taxSenioirs;

  switch (track){
    case "trail":
      total = (juniors * 5.5) + (seniors * 7);
      total = total - (total * 0.05);
      break;

    case "cross-country":
      if ((juniors + seniors) >= 50){
        taxJuniors = 8 - (8 * 0.25);
        taxSenioirs = 9.5 - (9.5 * 0.25);
        total = (juniors * taxJuniors) + (seniors * taxSenioirs);
        total = total - (total * 0.05);
      }else {
        total = (juniors * 8) + (seniors * 9.5);
        total = total - (total * 0.05);
      }
    break;
    
    case "downhill":
      total = (juniors * 12.25) + (seniors * 13.75);
      total = total - (total * 0.05);
    break;
    
    case "road":
      total = (juniors * 20) + (seniors * 21.5);
      total = total - (total * 0.05);
    break;
    default:
      break;
  }
  console.log(`${total.toFixed(2)}`);
}
cyclingRace(10, 20 , "trail")