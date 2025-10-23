function traveling(input){
  let destination = "";
  let total = 0;
  let budget = 0;
  let index = 0;

    while("End" !== input[index]){
      destination = input[index];
      index++;
      budget = Number(input[index]);
      index++;

      while(budget > total){
        total += Number(input[index]);
        index++;
      }
      total = 0;
      console.log(`Going to ${destination}!`);
    }
    
      
    
    
  }


traveling(["Greece",
"1000",
"200",
"200",
"300",
"100",
"150",
"240",
"Spain",
"1200",
"300",
"500",
"193",
"423",
"End"])
