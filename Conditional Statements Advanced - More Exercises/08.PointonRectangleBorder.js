function inOurBorder(x1, y1, x2, y2, x, y){
    let border
  
    border = ((x == x1 || x == x2) && (y >= y1 && y <= y2)) ||
                ((y == y1 || y == y2) && (x >= x1 && x <= x2));
    

    if (border) {
      console.log(`Border`);
    }else {
      console.log(`Inside / Outside`);
    }
}
inOurBorder(2, -3, 12, 3, 2, 3)
