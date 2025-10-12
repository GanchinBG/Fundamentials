function aqua(lenght, width, high, percent){

    let volume = (lenght * width * high) / 1000;
    volume = volume - (volume * percent/100);

    console.log(volume);


}
aqua(85,75,47,17)