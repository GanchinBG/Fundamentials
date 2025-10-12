function onTime(hourExam, minutesExam, hourArriving, minutesArriving){
  const examTime = (hourExam * 60) + minutesExam;
  const arrivingTime = (hourArriving * 60) + minutesArriving;

  if(examTime < arrivingTime){
    console.log(`Late`);
  }else if(examTime == arrivingTime || (arrivingTime + 30) >= examTime){
    console.log(`On time`);
  }else if(examTime > arrivingTime || (examTime - 60) >= arrivingTime){
    console.log(`Early`);
  }

  

  

}
onTime(9, 00, 10, 05)