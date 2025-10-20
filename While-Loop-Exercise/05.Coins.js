function vending(change){
  //Монетите може да са от 2 лева, 1 лев, 50 стотинки, 20 стотинки, 10 стотинки, 5 стотинки, 2 стотинки или 1 стотинка 
  change = Math.round(change * 100);
  let coins = 0;
  
    while(0 < change){
      if(change >= 200){
        change -= 200;
        
        coins++;
      }else if(change >= 100){
        change -= 100;
        
        coins++;
      }else if(change >= 50){
        change -= 50;
        
        coins++;
      }else if(change >= 20){
        change -= 20;
        
        coins++;
      }else if(change >= 10){
        change -= 10;
        
        coins++;
      }else if(change >= 5){
        change -= 5;
       
        coins++;
      }else if(change >= 2){
        change -= 2;
        
        coins++;
      }else if(change >= 1){
        change -= 1;
        
        coins++;
      }
      
    }
  
    console.log(coins);
}
vending(0.02)