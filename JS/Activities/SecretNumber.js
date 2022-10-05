let secretNumber = Math.floor(Math.random() * 100); // Agarrar un numero al azar entre 0 y 100
console.log(secretNumber)

while (true) {
  let input = Number(prompt("Guess what is the secret number (The number is between 0 and 100)"));

  if (secretNumber === input) {
    alert("You have guessed the secret number!");
    break;
  } else {
    alert("Your number is " + (input > secretNumber ? "greater" : "less") + " than the secret number");
  }
}
