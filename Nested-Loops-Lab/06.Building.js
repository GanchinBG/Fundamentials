function building(floors, rooms){
  

    for(let i = 1; i <= floors;i++){
      let output = "";
      for(let r = 0; r < rooms;r++){
        if (i === floors){
          output += `L${i}${r} `;
         }else if(i % 2 === 0 && i !== floors){
          output += `O${i}${r} `;
        }else if (i % 2 !== 0 && i !== floors){
          output += `A${i}${r} `;
        }
      }
      console.log(output.trim());
    }
    
}
building(6,4)