function bills(input){
  let electricityBill = 0;
  let electricityBillTotal = 0;
  let months = Number(input.shift());
  const waterBill = 20;
  const internetBill = 15;
  let othersBills = 0


  for(let i = 0; i < months;i++){
    electricityBillTotal += Number(input[i]);
    electricityBill = Number(input[i]);
    othersBills += electricityBill + waterBill + internetBill + (electricityBill + waterBill + internetBill) * 0.2;

  }
  let avg = (othersBills + electricityBillTotal + (waterBill * months) + (internetBill * months)) / months;


  console.log(`Electricity: ${electricityBillTotal.toFixed(2)} lv`);
  console.log(`Water: ${(waterBill * months).toFixed(2)} lv`);
  console.log(`Internet: ${(internetBill * months).toFixed(2)} lv`);
  console.log(`Other: ${othersBills.toFixed(2)} lv`);
  console.log(`Average: ${avg.toFixed(2)} lv`);

}
bills(["5",
"68.63",
"89.25",
"132.53",
"93.53",
"63.22"])
