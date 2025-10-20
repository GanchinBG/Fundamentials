function rent(input){
  let witdh = Number(input.shift());
  let length = Number(input.shift());
  let hight = Number(input.shift());
  let index = 0;
  let volume = witdh * length * hight;
  let packets = 0;

  while(packets <= volume){
    if("Done" === input[index]){
      if (volume >= packets){
        console.log(`${volume - packets} Cubic meters left.`);
        return;
      }
    }
    packets += Number(input[index]);
    index++;
  }
  console.log(`No more free space! You need ${packets - volume} Cubic meters more.`);
}
rent(["10", 
"1",
"2",
"4", 
"6",
"Done"])

