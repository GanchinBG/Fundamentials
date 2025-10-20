function looking(input){
    let book = input.shift();
    let count =  0;

      while (book !== input[count]){
        if(input[count] === "No More Books"){
          console.log(`The book you search is not here!`);
          console.log(`You checked ${count} books.`);
          return;
        }
        count++;
      }
      console.log(`You checked ${count} books and found it.`);
}
looking(["The Spot",
"Hunger Games",
"Harry Potter",
"Torronto",
"Spotify",
"No More Books"])
