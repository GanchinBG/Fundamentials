function numbersAvg(input){
  let wagers = Number(input.shift()); 
  let index = 0;
  let sum = 0;

  while (index < input.length){
    sum += Number(input[index]);
    index++;
  }
  if (wagers === 0){
  }else {
  console.log((sum / wagers).toFixed(2));
  }
}
numbersAvg(["1",
"95",
"23",
"76",
"23"])

function average(input){
  
}
