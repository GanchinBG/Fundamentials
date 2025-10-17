function gamePoints(input){
  let turns = Number(input.shift());
  let points = 0;
  let count9 = 0;
  let count19 = 0;
  let count29 = 0;
  let count39 = 0;
  let count49 = 0;
  let invalid = 0;
    
    for (let i = 0; i < turns;i++){
        let number = Number(input[i]);
        if(number >= 0 && number <= 9){
          count9++;
          points += (number * 0.2);
        }else if(number >= 10 && number <= 19){
          count19++;
          points += (number * 0.3);
        }if(number >= 20 && number <= 29){
          count29++;
          points += (number * 0.4);
        }if(number >= 30 && number <= 39){
          count39++;
          points += 50;
        }if(number >= 40 && number <= 50){
          count49++;
          points += 100;
        }if(number < 0 || number > 50){
          invalid++;
          points /= 2;
        }
      }
        console.log(points.toFixed(2));
        console.log(`From 0 to 9: ${((count9 / turns) * 100).toFixed(2)}%`);
        console.log(`From 10 to 19: ${((count19 / turns) * 100).toFixed(2)}%`);
        console.log(`From 20 to 29: ${((count29 / turns) * 100).toFixed(2)}%`);
        console.log(`From 30 to 39: ${((count39 / turns) * 100).toFixed(2)}%`);
        console.log(`From 40 to 50: ${((count49 / turns) * 100).toFixed(2)}%`);
        console.log(`Invalid numbers: ${((invalid / turns) * 100).toFixed(2)}%`);
    
    }
    gamePoints(["10",
"43",
"57",
"-12",
"23",
"12",
"0",
"50",
"40",
"30",
"20"])
