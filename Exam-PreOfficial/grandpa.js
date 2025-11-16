function grandpaStavri (information){
  let days = Number(information.shift());
  let degrees = 0;
  let liters = 0;
  let statment = "";
    for (let i = 0; i < information.length;i++){
      if (i % 2 !== 0){
        degrees += Number(information[i - 1]) * Number(information[i]);
      }else {
        liters += Number(information[i]);
      }
    }
    if (degrees / liters > 42){
      statment = `Dilution with distilled water!`;
    } else if(degrees / liters >= 38) {
      statment = `Super!`;
    } else {
      statment = `Not good, you should baking!`;
    }

    console.log(`Liter: ${liters.toFixed(2)}`);
    console.log(`Degrees: ${(degrees / liters).toFixed(2)}`);
    console.log(statment);
}
grandpaStavri ((["3",
"100",
"45",
"50",
"55",
"150",
"36"])
)