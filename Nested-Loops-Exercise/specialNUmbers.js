function specialNumber(number){
let goldenNumbers = "";
let currentNumber = "";
let index = 0;
  for (let i = 1111; i <= 9999;i++){
      currentNumber = i.toString();
      if(number % Number(currentNumber[0]) === 0 && number % Number(currentNumber[1]) === 0 && number % Number(currentNumber[2]) === 0 && number % Number(currentNumber[3]) === 0 ){
        goldenNumbers += " " + currentNumber;
      }
          
      }
      console.log(goldenNumbers);
}
specialNumber(3)