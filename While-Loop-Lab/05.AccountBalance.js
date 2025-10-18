function balance(input){
  let noMoreMoney = "NoMoreMoney";
  let total = 0;
  let add = 0;
    while (noMoreMoney !== input[add]){
      if (Number(input[add]) < 0){
        console.log(`Invalid operation!`);
        console.log(`Total: ${total.toFixed(2)}`);
        return;
      } 
      total += Number(input[add]);
      console.log(`Increase: ${Number(input[add]).toFixed(2)}`)
      add++;
      
    }
    console.log(`Total: ${total.toFixed(2)}`);
}
balance(["5.51", 
"69.42",
"100",
"NoMoreMoney"])

