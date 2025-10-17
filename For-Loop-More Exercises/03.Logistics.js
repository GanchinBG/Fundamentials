function logistics(input){
  // <=3 tons - bus (200lv * tons)
  // >= 4 tons <= 11 - truck (175 * tons)
  // >= 12 tons - train (120lv * tons)

  let parcels = Number(input.shift());
  let tonsTotal = 0;
  let busTons = 0;
  let truckTons = 0;
  let trainTons = 0;
  let busPrice = 200;
  let truckPrice = 175;
  let trainPrice = 120;
  let avarage = 0;
      
      for (let i = 0; i < parcels;i++){
        let tons = Number(input[i]);
        if (tons <= 3){
          busTons += tons;
        }else if(tons <= 11){
          truckTons += tons;
        }else if(tons >= 12){
          trainTons += tons;
        }
      }
        
        tonsTotal = busTons + truckTons + trainTons;
        avarage = (busPrice * busTons + truckPrice * truckTons + trainPrice * trainTons) / tonsTotal;
        console.log(avarage.toFixed(2));
        console.log(((busTons/tonsTotal)*100).toFixed(2) + "%");
        console.log(((truckTons/tonsTotal)*100).toFixed(2) + "%");
        console.log(((trainTons/tonsTotal)*100).toFixed(2) + "%");

}
logistics(["5",
"2",
"10",
"20",
"1",
"7"])
