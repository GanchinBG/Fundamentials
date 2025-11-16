function travelSales (information){
  let seaAmount = Number(information.shift());
  let mountainAmount = Number(information.shift());
  let total = 0;
    for (let i = 0; i < information.length; i++){
      if (0 === (seaAmount + mountainAmount) || information[i] === "Stop") break;
      if (information[i] === "sea" && seaAmount > 0){
        total += 680;
        seaAmount--;
      } else if ((information[i] === "mountain" && mountainAmount > 0)){
        total += 499;
        mountainAmount--;
      }
    }
    if (0 === (seaAmount + mountainAmount)){
      console.log(`Good job! Everything is sold.`);
      console.log(`Profit: ${total} leva.`);
    }else {
      console.log(`Profit: ${total} leva.`);
    }


}
travelSales(["2",
"2",
"sea",
"mountain",
"sea",
"sea",
"mountain"])
