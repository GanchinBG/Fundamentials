function  cinematMovie(input){
  let movieName = "";
  let spaces = 0;
  let standardCount = 0;
  let kidCount = 0;
  let studentCount = 0;
  let i = 0;
  let soldTickets = 0;

    while(input[i] !== "Finish"){
      
      soldTickets = 0;

      movieName = input[i];
      i++;
      spaces = Number(input[i]);
      i++;
      while(input[i] !== "End" && input[i] !== "Finish"){
        if(input[i] === "standard"){
          standardCount++;
          
        }else if(input[i] === "kid"){
          kidCount++;
          
        }else if(input[i] === "student"){
          studentCount++;
          }

        soldTickets ++;
        i++;
        if(soldTickets === spaces) break;
        
      }
      
      console.log(`${movieName} - ${(((soldTickets) / spaces) * 100).toFixed(2)}% full.`);
      if(input[i] === "End") i++;
    }
    console.log(`Total tickets: ${standardCount + studentCount + kidCount}`);
    console.log(`${((studentCount / (standardCount + studentCount + kidCount)) * 100).toFixed(2)}% student tickets.`);
    console.log(`${((standardCount / (standardCount + studentCount + kidCount)) * 100).toFixed(2)}% standard tickets.`);
    console.log(`${((kidCount / (standardCount + studentCount + kidCount)) * 100).toFixed(2)}% kids tickets.`);

}
cinematMovie(["Taxi","10",
"standard",
"kid",
"student",
"student",
"standard",
"standard",
"End",
"Scary Movie",
"6",
"student",
"student",
"student",
"student",
"student",
"student",
"Finish"])