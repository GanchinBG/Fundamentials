function birthday(input){
  let witdh = Number(input.shift());
  let length = Number(input.shift());
  let cakeSize = witdh * length;
  let piece = 0;
  let index = 0;

  while (piece < cakeSize){
    if("STOP" === input[index]){
        if (piece < cakeSize){
          console.log(`${cakeSize - piece} pieces are left.`)
        } else {
            console.log(`No more cake left! You need ${piece - cakeSize} pieces more.`);
          }
          return;
    }
    piece += Number(input[index]);
    index++;
    
  }
 if (piece < cakeSize){
          console.log(`${cakeSize - piece} pieces are left.`)
        } else {
            console.log(`No more cake left! You need ${piece - cakeSize} pieces more.`);
          }

}
birthday(["10",
"10",
"20",
"20",
"20",
"20",
"21"])

