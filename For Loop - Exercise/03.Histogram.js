function histogram(numbers){
  let p1 = [];
  let p2 = [];
  let p3 = [];
  let p4 = []; 
  let p5 = [];
  numbers.shift();
    for (let num of numbers){
      if (num < 200){
        
        p1.push(num);
      }else if (num <= 399){
        
        p2.push(num);  
      }else if (num <= 599){
        
        p3.push(num);
      }else if (num <= 799){
        
        p4.push(num);
      }else if (num >= 800){
        
        p5.push(num);
      }      
    } 

    
    
    console.log(`${((p1.length / numbers.length) * 100).toFixed(2)}%`);
    console.log(`${((p2.length / numbers.length) * 100).toFixed(2)}%`);
    console.log(`${((p3.length / numbers.length) * 100).toFixed(2)}%`);
    console.log(`${((p4.length / numbers.length) * 100).toFixed(2)}%`);
    console.log(`${((p5.length / numbers.length) * 100).toFixed(2)}%`);
}
histogram([3,1,2,999])