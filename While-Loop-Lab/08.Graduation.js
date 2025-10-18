function graduation(input){
  let name = input[0];
  let k = 0;
  let grade = 1;
  let total = 0;
  let fail = 0;

  while (grade <= 12){

    total += Number(input[grade]);
    
    
    if(Number(input[grade]) < 4) {
      fail++;
    }
      if(fail === 2) {
      console.log(`${name} has been excluded at ${grade - 1} grade`); 
      return;
    }
    grade++;
  }
  console.log(`${name} graduated. Average grade: ${(total / 12).toFixed(2)}`);
}
graduation(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"])





