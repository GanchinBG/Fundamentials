function school(pens,markers, ciff, percent){
   pens = pens * 5.80;
   markers = markers * 7.20;
   ciff = ciff * 1.20;

  let discount = (pens + markers + ciff) * percent/100;

  let sum = pens + markers + ciff - discount;
  console.log(sum);

}
school(2,3,4,25)
