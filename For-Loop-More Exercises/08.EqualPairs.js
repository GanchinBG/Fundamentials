function pairs(input){
  let numberOfPairs = 2 * Number(input.shift());
  let number1 = [];
  let number2 = [];
  let value = [];
  let eqaul = true;
  let maxDiff = 0;
 
  for (let i = 0; i < numberOfPairs;i+=2){
    number1.push(Number(input[i]));
    }
  for (let i = 1; i < numberOfPairs;i+=2){
    number2.push(Number(input[i]));
  }
  for (let i = 0; i < (numberOfPairs / 2); i++){
    let firstNumber = Number(number1[i]);
    let secondNumber = Number(number2[i]);
    value.push(firstNumber + secondNumber);
  } 
  if (value.length <= 1){
    console.log(`Yes, value=${value[0]}`);
    return;
    }
  for (let i = 1; i < (numberOfPairs / 2); i++){
    if(value[i] !== value[i - 1]){
      eqaul = false;
    }
    diff = Math.abs(value[i] - value[i - 1]);
    if (diff > maxDiff){
      maxDiff = diff;
    }
    
  }
  if (eqaul){
    console.log(`Yes, value=${value[1]}`);
  }else {
    console.log(`No, maxdiff=${maxDiff}`);
  }
}
pairs(["2",
"-1",
"0",
"0",
"-1"])
