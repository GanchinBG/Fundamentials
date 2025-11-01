function eggFight(data){
  let playerOneEggs = Number(data[0]);
  let playerTwoEggs = Number(data[1]);
  let index = 2;
  while(data[index] !== "End"){
    if (data[index] === "one"){
      playerTwoEggs--;
    }else{
      playerOneEggs--;
    }
    if(playerOneEggs === 0){
      console.log(`Player one is out of eggs. Player two has ${playerTwoEggs} eggs left.`);
      return;
    }else if(playerTwoEggs === 0){
      console.log(`Player two is out of eggs. Player one has ${playerOneEggs} eggs left.`);
      return;
    }
    index++;
  }
  console.log(`Player one has ${playerOneEggs} eggs left.`);
  console.log(`Player two has ${playerTwoEggs} eggs left.`);
}
eggFight(["2",

"6",

"one",

"two",

"two"])