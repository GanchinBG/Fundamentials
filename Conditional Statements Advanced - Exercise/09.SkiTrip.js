function skiTrip(days, room, grade){
  let total = 0;
  const roomOnePerson = 18;
  const apartment = 25;
  const apartmentVip = 35;
  switch (room){
    case "room for one person":
      total = (days - 1) * roomOnePerson;
        if (grade === "positive"){
          total = total + (total * 0.25);
        } else {
          total = total - (total * 0.10);
        }
    break;
    case "apartment":
      total = (days - 1) * apartment;
        if (days < 10){
          total = total - (total * 0.3);
        }else if(days >= 10 && days <= 15){
          total = total - (total * 0.35);
        }else if(days > 15){
          total = total - (total * 0.5);
        }
        if (grade === "positive"){
          total = total + (total * 0.25);
        } else {
          total = total - (total * 0.10);
        }
    break;
    case "president apartment":
        total = (days - 1) * apartmentVip;
        if (days < 10){
          total = total - (total * 0.1);
        }else if(days >= 10 && days <= 15){
          total = total - (total * 0.15);
        }else if(days > 15){
          total = total - (total * 0.2);
        }
        if (grade === "positive"){
          total = total + (total * 0.25);
        } else {
          total = total - (total * 0.10);
        }
    break;
    default:
      break;
  }
  console.log(total.toFixed(2));
}