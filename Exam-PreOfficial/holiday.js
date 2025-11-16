function holidayCost (peopleAmount, nights, transportCards, museumTickets){

  let total = (peopleAmount * ((nights * 20) + (transportCards * 1.60) + (museumTickets * 6))) * 0.25 + (peopleAmount * ((nights * 20) + (transportCards * 1.60) + (museumTickets * 6))) ;

  console.log(total.toFixed(2));
}
holidayCost(20,
14,
30,
6
)