function multipleTable(number){
  let arr = number.toString();

  for (let i = 1; i <= Number(arr[2]) ;i++){
    for (let j = 1; j <= Number(arr[1]);j++){
      for (let k = 1; k <= Number(arr[0]);k++){
        console.log(`${i} * ${j} * ${k} = ${i * j * k};`)
      }
    }
  }
}
multipleTable(324)