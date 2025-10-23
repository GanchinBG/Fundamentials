function combination(result){
  let countCorrect = 0;
    for(let l = 0; l <= result;l++){
      for (let m = 0; m <= result;m++){
        for (let r = 0; r <= result;r++){
          if ((l + m + r === result)){
            countCorrect++;
          }
        }
      }
    }
  console.log(countCorrect);
}
combination(25)