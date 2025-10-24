function numberPyramid(n){
  let current = 1;
  let isBigger = false;
  let printC = "";
  for (let rows = 1; rows <= n; rows++){
    for (let cols = 1; cols <= rows; cols++){
      if(current > n){
        isBigger = true;
        break;
      }
      printC += current + " ";
      current++;
    }
    console.log(printC);
    printC = "";
    if(isBigger){
      break;
    }
  }
  }

numberPyramid(7)