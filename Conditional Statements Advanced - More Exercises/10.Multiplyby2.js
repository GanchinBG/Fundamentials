function multiplyByTwo(input){
  for (let line of input){
    let number = Number(line);

    if (number < 0){
      console.log(`Negative number!`);
    } else {
      console.log(`Result: ${(number * 2).toFixed(2)}`);
    }
  }
}