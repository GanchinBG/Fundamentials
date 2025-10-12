function greening(area){
  let discount = (area * 7.61) * 0.18;
  let total = area * 7.61 - discount;
  console.log(`The final price is: ${total} lv.`);
  console.log(`The discount is: ${discount} lv.`);

}