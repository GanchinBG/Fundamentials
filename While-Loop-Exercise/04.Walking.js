function stepsCalculator(input){
  let steps = 0;
  let index = 0;
  let target = 10000;

    while(steps < target){
      
      
      if (steps >= target){
          console.log(`Goal reached! Good job!`);
          console.log(`${steps - target} steps over the goal!`);
      }
      if("Going home" === input[index]){
        steps += Number(input[index + 1]);
        
        if (steps >= target){
          console.log(`Goal reached! Good job!`);
          console.log(`${steps - target} steps over the goal!`);
          
        }else{
          console.log(`${target - steps} more steps to reach goal.`);
          
        }
        return;
      }
      steps += Number(input[index]);
      index++;
    }
    console.log(`Goal reached! Good job!`);
    console.log(`${steps - target} steps over the goal!`);
}
stepsCalculator(["1000",
"1500",
"2000",
"6500"])


