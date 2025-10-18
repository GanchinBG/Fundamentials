function oddEven(input){
    let numbers = input.shift();
    let oddSum = 0.00;
    let oddMax = Number(input[0]);
    let oddMin = Number(input[0]);
    let evenSum = 0.00;
    let evenMax = Number(input[1]);
    let evenMin = Number(input[1]);
    let oddValue;
    let evenValue;

    for (let i = 0; i < numbers;i++){
      if(i % 2 === 0){
        oddSum += Number(input[i]);
        oddValue = Number(input[i]);
      }else{
        evenSum += Number(input[i]);
        evenValue = Number(input[i]);
      }
      
      

      
      if(oddValue > oddMax){
        oddMax = oddValue;
        
      } else if(oddValue < oddMin) {
        oddMin = oddValue;
      }
      if(evenValue > evenMax){
        evenMax = evenValue;
        
      } else if (evenValue < evenMin){
        evenMin = evenValue;
      }

      
    }
      
    
    console.log(`OddSum=${oddSum.toFixed(2)},`);
    if (oddSum === 0){
      oddMin = "No";
      oddMax = "No";
    console.log(`OddMin=${oddMin},`);
    console.log(`OddMax=${oddMax},`);
    } else {
    console.log(`OddMin=${oddMin.toFixed(2)},`);
    console.log(`OddMax=${oddMax.toFixed(2)},`);
    }
    console.log(`EvenSum=${evenSum.toFixed(2)},`);
    if(evenSum === 0){
      evenMin = "No";
      evenMax = "No";
    console.log(`EvenMin=${evenMin},`);
    console.log(`EvenMax=${evenMax}`);
    }else {
    console.log(`EvenMin=${evenMin.toFixed(2)},`);
    console.log(`EvenMax=${evenMax.toFixed(2)}`);
    }
  }
oddEven(["3",
"-1",
"-2",
"-3"])


