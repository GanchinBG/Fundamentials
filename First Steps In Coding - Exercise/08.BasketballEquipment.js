function basketball (yearPayment){
  let shoes = yearPayment - (yearPayment * 40/100);
  let jersey = shoes - (shoes * 20/100);
  let ball = jersey * 1/4;
  let acces = ball * 1/5;

  let total = shoes + jersey + ball + acces + yearPayment;
  console.log(total);

}
basketball (365)
