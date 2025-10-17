function hospital(input){
  let days = Number(input.shift());
  let doctors = 7;
  let treated = 0;
  let untreated = 0;
  let patientPerDay = 0;
 
  for(let i = 0;i < days;i++){
    patientPerDay = Number(input[i]);
     
     if ((i+1) % 3 === 0 && untreated > treated){
        doctors ++;
  }
     if (patientPerDay > doctors){
      untreated += patientPerDay - doctors;
      treated += doctors;
      
    } else {
      treated += patientPerDay;
            

    }
  
  }
   
    
  
  console.log(`Treated patients: ${treated}.`);
  console.log(`Untreated patients: ${untreated}.`);

}
hospital(["6",
"25",
"25",
"25",
"25",
"25",
"2"])