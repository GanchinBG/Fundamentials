function streamOfLetters(input) {
  let index = 0;
  let command = input[index];
  let word = "";
  let result = "";

  let hasC = false;
  let hasO = false;
  let hasN = false;

  while (command !== "End") {
    let char = command;

    // Проверка дали е латинска буква
    if ((char >= "A" && char <= "Z") || (char >= "a" && char <= "z")) {
      if (char === "c" && !hasC) {
        hasC = true;
      } else if (char === "o" && !hasO) {
        hasO = true;
      } else if (char === "n" && !hasN) {
        hasN = true;
      } else {
        word += char;
      }

      // Ако трите са намерени → приключваме дума
      if (hasC && hasO && hasN) {
        result += word + " ";
        word = "";
        hasC = false;
        hasO = false;
        hasN = false;
      }
    }

    index++;
    command = input[index];
  }

  console.log(result);
}