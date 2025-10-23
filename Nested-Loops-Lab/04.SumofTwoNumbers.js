function sumOfTwoNumbers(firsNumber,secondNumber,magicNumber){
  let sum = 0;
  let count = 0;

     for(let l = firsNumber; l <= secondNumber;l++){
      for(let r = firsNumber; r <= secondNumber;r++){
        sum = l + r;
        if(sum === magicNumber){
        count++;
        console.log(`Combination N:${count} (${l} + ${r} = ${magicNumber})`);
        return;
        }else{
          count++;
        }
      }
     }
     console.log(`${count} combinations - neither equals ${magicNumber}`);
}
sumOfTwoNumbers(1,
10,
5
)
