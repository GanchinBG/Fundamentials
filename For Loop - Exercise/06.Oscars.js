function oscars(input){
  let actorPrice = input.shift();
  let actorPoints = Number(input.shift());
  let numberOfJury = Number(input.shift());
  let actorJury = [];
  let juryPoints = [];

  
   

    for (let i = 0; i < input.length;i+=2){
     actorJury.push(input[i].length);
    }
      for (let i = 1; i < input.length;i+=2){
      juryPoints.push(Number(input[i]));
    }
    //console.log(actorJury);
    //console.log(juryPoints);

    for (let i = 0; i < numberOfJury;i++){
      actorPoints += (actorJury[i] * juryPoints[i]) / 2;
      if (actorPoints >= 1250.5){
        console.log(`Congratulations, ${actorPrice} got a nominee for leading role with ${(actorPoints).toFixed(1)}!`);
        break;
      }
    }
    //console.log(actorPoints);
    if (actorPoints < 1250.5){
      console.log(`Sorry, ${actorPrice} you need ${(1250.5 - actorPoints).toFixed(1)} more!`);
    }

}
oscars(["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"])
