function repainting(nylon, paint, paintThinner, hours){
  let bags = 0.40;
  
  nylon = (nylon + 2) * 1.5;
  paint = ((paint * 10/100) + paint) * 14.5;
  paintThinner = paintThinner * 5.00;
  let sumWorkers = ((nylon + paint + paintThinner + bags) * 30/100) * hours;

  let total = bags + nylon + paint + paintThinner + sumWorkers;
  console.log(total);
}
repainting(10,11,4,8)