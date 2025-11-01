function petFood(input){
  let dogFood = 0;
  let catFood = 0;
  let biscuits = 0;
  let days = Number(input.shift());
  let totalFood = Number(input.shift());
  let eatenFood = 0;

  for (let i = 0; i < input.length;i++){
    if (i % 2 === 0) {
      dogFood += Number(input[i]);
    }else {
      catFood += Number(input[i]);
    }
    if(i % 2 === 0 && i !== 0){
      biscuits = Math.round((Number(input[i]) + Number(input[i + 1])) * 0.1);
    }
  
}
  eatenFood = dogFood + catFood;
  console.log(`Total eaten biscuits: ${biscuits}gr.`);
  console.log(`${((eatenFood / totalFood) * 100).toFixed(2)}% of the food has been eaten.`);
  console.log(`${((dogFood / eatenFood) * 100).toFixed(2)}% eaten from the dog.`);
  console.log(`${((catFood / eatenFood) * 100).toFixed(2)}% eaten from the cat.`);
}
petFood(["3",

"500",

"100",

"30",

"110",

"25",

"120",

"35"])