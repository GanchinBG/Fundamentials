function building(floors, rooms){

    for(let i = 1; i <= floors;i++){
      for(let r = 0; r < rooms;r++){
        if (i === floors){
          console.log(`L${i}${r}`);
         
        }
        if(i % 2 === 0 && i !== floors){
          console.log(`O${i}${r}`);
        }else if (i % 2 !== 0 && i !== floors){
          console.log(`A${i}${r}`);
        }
      }
    }
}
building(6,4)