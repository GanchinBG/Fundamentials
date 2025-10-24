function sumoOfEvenOdd(firstNumber,secondNumber){
  let printLine = '';
  for (let i = firstNumber; i <= secondNumber;i++){
    let current = "" + i;
    let oddSum = 0;
    let evenSum = 0;
    for (let j = 0; j < current.length;j++){
      let currentDig = Number(current.charAt(j));
      if(j % 2 === 0){
        evenSum += currentDig;
      }else{
        oddSum += currentDig;
      }
    }
    if (oddSum === evenSum){
      printLine += `${i} `;
    }
  }
  console.log(printLine);
}
sumoOfEvenOdd(100000,
100050)