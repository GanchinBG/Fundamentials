function barcodeGen(start, end){
  
  let currentNumber = "";
  let result = "";
  for (let i = start; i <= end; i++){
    currentNumber = i.toString();
    let numberOne = Number(currentNumber[0]);
    let numberTwo = Number(currentNumber[1]);
    let numberThree = Number(currentNumber[2]);
    let numberFour = Number(currentNumber[3]);
    
    if(numberOne % 2 !== 0 && numberTwo % 2 !== 0 && numberThree % 2 !== 0 && numberFour % 2 !== 0) result += Number(currentNumber) + " ";

  }

  console.log(result);
}
barcodeGen(3256, 6579)