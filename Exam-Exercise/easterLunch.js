
function shopList (kozunakAmount, eggsAmount, sweetAmount){

let kozunakPrice = 3.20;
let eggsPrice = 4.35;
let sweetsPrice = 5.40;
let eggsPaintPrice = 0.15;


let total = kozunakAmount * kozunakPrice + eggsAmount * eggsPrice + sweetAmount * sweetsPrice + ((eggsAmount * 12) * eggsPaintPrice);
console.log(total.toFixed(2));

}shopList (3, 2, 3)
