function gradeStatistic(input){

  let students = Number(input.shift());
  let grades2 = 0;
  let grades3 = 0;
  let grades4 = 0;
  let grades5 = 0;
  let avg = 0;
  let total = 0;
  for (let i = 0; i < students;i++){
    let grade = Number(input[i]);
    
    total += grade;
    if (grade < 3){
      grades2 ++;
    }else if (grade < 4){
      grades3++;
    }else if(grade < 5){
      grades4++;
    }else if(grade >= 5){
      grades5++;
    }
  }
  avg = total / students;
  console.log(`Top students: ${((grades5 / students) * 100).toFixed(2)}%`);
  console.log(`Between 4.00 and 4.99: ${((grades4 / students) * 100).toFixed(2)}%`);
  console.log(`Between 3.00 and 3.99: ${((grades3 / students) * 100).toFixed(2)}%`);
  console.log(`Fail: ${((grades2 / students) * 100).toFixed(2)}%`);
  console.log(`Average: ${avg.toFixed(2)}`);

}
gradeStatistic(["6",
"2",
"3",
"4",
"5",
"6",
"2.2"])

