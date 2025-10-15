function numbersByNine(number1, number2){
  let sum = 0;
  let numbers = [];
    for (let i = number1; i <= number2;i++){
      if (i % 9 === 0){
      numbers.push(i);
      sum += i;
      
      }
      
    }
    console.log(`The sum: ${sum}`);
    for (let num of numbers){
    console.log(num);
    }
    
}
numbersByNine(100, 200)