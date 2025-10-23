function tableMulti(){
  for (let l = 1; l < 11 ;l++){
    for (let r = 1; r < 11;r++){
      let multi = l * r;
      console.log(`${l} * ${r} = ${multi}`);
    }
  }
}
tableMulti()