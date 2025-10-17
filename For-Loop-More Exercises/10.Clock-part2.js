function theTime(){
     for (let i = 0; i < 24;i++){
      for (let j = 0; j < 60;j++){
        for (let s = 0; s < 60;s++){
          console.log(`${i} : ${j} : ${s}`);
        }
      }
    }
}
theTime()