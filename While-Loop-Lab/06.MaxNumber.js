function biggest(input){
  let max = Number.MIN_SAFE_INTEGER;
  let stop = "Stop";
  let k = 0;
  let num = 0;
  while (stop !== input[k]){
    num = Number(input[k]);
    if (max < num) max = num;
    k++;
    
  }
  console.log(max);
}
biggest(["100",
"99",
"80",
"70",
"Stop"])
