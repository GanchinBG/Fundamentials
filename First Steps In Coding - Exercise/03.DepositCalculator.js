function depositCalculator(deposit, time, percent){

let sum = deposit + time * ((deposit * percent/100)/12);
console.log(sum);

}
depositCalculator(200,3,5.7)