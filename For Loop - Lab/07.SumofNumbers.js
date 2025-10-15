function numberSum(text){
  let sum = 0;
  for (let i = 0; i < text.length;i++){
     sum += Number(text.charAt(i));
       
  }
  console.log(`The sum of the digits is:${sum}`);
}
numberSum("1234")