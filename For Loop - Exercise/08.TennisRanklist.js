function ranklist(input){
 let pointsWin = 2000;
 let pointsFinal = 1200;
 let pointsSemiFinal = 720;
 let tournaments = input.shift();
 let startPoints = Number(input.shift());
 let winsCount = 0;
 let points = 0;

  for (let i = 0;i < input.length;i++){
      if("W" === input[i]){
        points += pointsWin;
        winsCount++;
      }else if("F" === input[i]){
        points += pointsFinal;
      }else if("SF" === input[i]){
        points += pointsSemiFinal;
      }
  }
  console.log(`Final points: ${startPoints + points}`);
  console.log(`Average points: ${Math.floor(points / tournaments)}`);
  console.log(`${((winsCount / tournaments) * 100).toFixed(2)}%`);
   
}
ranklist(["5",
"1400",
"F",
"SF",
"W",
"W",
"SF"])
