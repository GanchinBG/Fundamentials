function minimun(input){
  let min = Number.MAX_SAFE_INTEGER;
  let stop = "Stop";
  let k = 0;
  let num = 0;
  while (stop !== input[k]){
    num = Number(input[k]);
    if (min > num) min = num;
    k++;
    
  }
  console.log(min);
}
minimun(["100",
"99",
"80",
"70",
"Stop"])
