function sumOfNumbers(numbers){

  let number = numbers.shift();
  let sum = 0;
  let count = 0;

  while (sum < number){
    sum += Number(numbers[count]);
    count++;
    
  }
  
  console.log(sum);
}
sumOfNumbers(["20",
"1",
"2",
"3",
"4",
"5",
"6"])

