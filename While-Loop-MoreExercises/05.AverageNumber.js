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
numbersAvg

function average(input){
  let sum = 0;
  let wagers = Number(input.shift());
    for (let i = 0; i < input.length;i++){
      sum += Number(input[i]);
      
    }
    console.log((sum / wagers).toFixed(2));
}
average(["4",
"3",
"2",
"4",
"2"])
