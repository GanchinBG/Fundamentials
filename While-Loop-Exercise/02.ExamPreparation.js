function exam(input){
  let poorGrade = Number(input.shift());
  let task = 0;
  let grade = 1;
  let total = 0;
  let bad = 0;
    while("Enough" !== input[task]){
      if(4 >= Number(input[grade])){
        bad++;
        if(poorGrade === bad){
          console.log(`You need a break, ${bad} poor grades.`);
          return;
        }
      }
      total += Number(input[grade]);
      task += 2;
      grade += 2;

      
    }
    console.log(`Average score: ${(total / (task /2)).toFixed(2)}`);
    console.log(`Number of problems: ${task/2}`);
    console.log(`Last problem: ${input[task  - 2]}`);
}
exam(["3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"])
