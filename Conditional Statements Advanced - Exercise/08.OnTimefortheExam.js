function onTime(hourExam, minutesExam, hourArriving, minutesArriving){
  const examTime = (hourExam * 60) + minutesExam;
  const arrivingTime = (hourArriving * 60) + minutesArriving;
  let diff = examTime - arrivingTime;
  let hour = 0;
  
  if(diff < 0) {
    console.log(`Late`);
  }else if(diff >= 0 && diff <= 30){
      console.log(`On Time`);
    } else if (diff > 30){
      console.log(`Early`);
    }
     
    if(diff >= 0 && diff <= 59){
      console.log(`${diff} minutes before the start`);
    } else if(diff > 59){
      if (diff % 60 < 10){
        hour = Math.trunc (diff / 60);
        console.log(`${hour}:0${(diff % 60)} hours before the start`);
    }else{
      hour = Math.trunc (diff / 60);
      console.log(`${hour}:${(diff % 60)} hours before the start`);
    }
  }
    
    if(diff < 0 && diff >= -59){
      diff = Math.abs(diff)
      console.log(`${diff} minutes after the start`);
    } else  if (diff < -59){
      diff = Math.abs(diff)
      if (diff % 60 < 10){
        hour = Math.trunc (diff / 60);
        console.log(`${hour}:0${(diff % 60)} hours after the start`);
    }else{
      hour = Math.trunc (diff / 60);
      console.log(`${hour}:${(diff % 60)} hours after the start`);
    }
  }

}
onTime(9,0,10,9)

