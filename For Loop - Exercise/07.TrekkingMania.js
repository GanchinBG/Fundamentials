function trekking(input){
  let groups = input.shift();
  let musala = 0;
  let monblan = 0;
  let kiliman = 0;
  let k2 = 0;
  let everest = 0;
  let totalpeople = 0;
    
     for(let i = 0; i < groups; i++){
      totalpeople += Number(input[i]);
      if(Number(input[i]) <= 5){
        musala += Number(input[i]);
      }else if(Number(input[i]) <= 12){
        monblan += Number(input[i]);
      }else if(Number(input[i]) <= 25){
        kiliman += Number(input[i]);
      }else if(Number(input[i]) <= 40){
        k2 += Number(input[i]);
      }else if(Number(input[i]) >= 41){
        everest += Number(input[i]);
      }
     }
  
  console.log(((musala / totalpeople) * 100).toFixed(2) + "%");
  console.log(((monblan / totalpeople) * 100).toFixed(2) + "%");
  console.log(((kiliman / totalpeople) * 100).toFixed(2) + "%");
  console.log(((k2 / totalpeople) * 100).toFixed(2) + "%");
  console.log(((everest / totalpeople) * 100).toFixed(2) + "%");
}
trekking(["10",
"10",
"5",
"1",
"100",
"12",
"26",
"17",
"37",
"40",
"78"])
