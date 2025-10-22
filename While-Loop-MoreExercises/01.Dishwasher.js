function dishwasherCalculator(input){

  let bottles = 750 * Number(input.shift());
  let dishesh = 5;
  let pots = 15;
  let index = 0;
  let countPots = 0;
  let countDishesh = 0;

  while (index < input.length){
    
      if("End" === input[index] && bottles >= 0){
        console.log(`Detergent was enough!`);
        console.log(`${countDishesh} dishes and ${countPots} pots were washed.`);
        console.log(`Leftover detergent ${bottles} ml.`);
        return;
      }
      
      if((index + 1) % 3 === 0){
       
        bottles -= Number(input[index]) * pots;
        countPots += Number(input[index]);
      }else {
        bottles -= Number(input[index]) * dishesh;
        countDishesh += Number(input[index]);
      }
      
      
      index++;
       if (bottles < 0){
      console.log(`Not enough detergent, ${Math.abs(bottles)} ml. more necessary!`);
    }
    }
    
  
    
    
}
dishwasherCalculator(["1",
"10",
"15",
"10",
"12",
"13",
"30"])

