function footballGame(input){

  let stadiumCapacity = Number(input.shift());
  let fans = Number(input.shift());
  let countA = 0;
  let countB = 0;
  let countV = 0;
  let countG = 0;

    for (let i = 0; i < fans;i++){
      let sector = input[i];
      if(sector === "A") {
        countA++;
      }else if(sector === "B") {
        countB++;
      }else if(sector === "V") {
        countV++;
      }else if(sector === "G") {
        countG++;
      }
    }
  
    console.log(`${((countA / fans) * 100).toFixed(2)}%`);
    console.log(`${((countB / fans) * 100).toFixed(2)}%`);
    console.log(`${((countV / fans) * 100).toFixed(2)}%`);
    console.log(`${((countG / fans) * 100).toFixed(2)}%`);
    console.log(`${((fans / stadiumCapacity) * 100).toFixed(2)}%`);
}
footballGame(["93",
"16",
"A",
"V",
"G",
"G",
"B",
"B",
"G",
"B",
"A",
"B",
"B",
"B",
"A",
"B",
"B",
"A"])
