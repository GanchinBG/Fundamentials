function restourant(chicken, fish, vegan){
  chicken = chicken * 10.35;
  fish = fish * 12.40;
  vegan = vegan * 8.15;
  let desert = (chicken + fish + vegan) * 20/100;
  let delivary = 2.5;

  let total = chicken + fish + vegan + desert + delivary;

  console.log(total);

}
restourant(2,4,3)