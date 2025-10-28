function primeNonPrime(input) {
  let sumPrime = 0;
  let sumNonPrime = 0;
  let i = 0;

  while (input[i] !== "stop") {
    let num = Number(input[i]);

    if (num < 0) {
      console.log("Number is negative.");
      i++;
      continue; // минаваме на следващото
    }

    let isPrime = true;

    if (num < 2) {
      isPrime = false;
    } else {
      for (let j = 2; j <= Math.sqrt(num); j++) {
        if (num % j === 0) {
          isPrime = false;
          break;
        }
      }
    }

    if (isPrime) {
      sumPrime += num;
    } else {
      sumNonPrime += num;
    }

    i++;
  }

  console.log(`Sum of all prime numbers is: ${sumPrime}`);
  console.log(`Sum of all non prime numbers is: ${sumNonPrime}`);
}
primeNonPrime(["3",
"9",
"0",
"7",
"19",
"4",
"stop"])
