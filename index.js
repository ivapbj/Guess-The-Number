const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);

function prompt(promptText) {
  return new Promise((resolve, reject) => {
    rl.question(promptText, resolve);
  });
}

function getRandomNumberFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function start() {
  await guessTheNumberGame();
}

async function guessTheNumberGame() {
  let minNumber = 1;
  let attempts = 1;

  console.log(
    "Let's play a game where you (human) make up a number and I (computer) try to guess it."
  );

  let maxNumber = await prompt("Choose your range greater than 1 \n");
  console.log(`Your range will be between 1 - ${maxNumber}`);

  const maxAttempts = Math.floor(Math.log2(maxNumber) + 1);

  let randomNumber = getRandomNumberFromRange(minNumber, maxNumber);

  let secretNumber = await prompt(
    "What is your secret number?\nI won't peek, I promise...\n"
  );
  console.log(`You entered: ${secretNumber}`);

  if (secretNumber < 1 || secretNumber > maxNumber || isNaN(secretNumber)) {
    console.log(
      `Please, make sure you input a number, Your range will be between 1 - ${maxNumber} Start over!`
    );
    process.exit();
  } else {
    console.log("Let's begin!");
  }
  //games asks you to guess number
  while (true) {
    if (attempts > maxAttempts) {
      console.log("But I've run out of attempts... play again");
      process.exit();
    }
    let guessResponse = await prompt(
      `Attempt Number ${attempts}/${maxAttempts}.\nI think your number is ${randomNumber}.\nIs this right? Is your number higher or lower?\n   (R) - Right\n   (H) - Higher\n   (L) - Lower\n`
    );

    let guess = guessResponse.toLowerCase();

    if (guess === "r") {
      console.log(`Yay! I guessed correctly in {attempts}!\n End of game.`);
      process.exit();
    } else if (
      //logic for if random number contradicts secret number
      (guess === "l" && randomNumber < secretNumber) ||
      (guess === "h" && randomNumber > secretNumber)
    ) {
      console.log(`Invalid entry: contradictory response. Start over`);
      process.exit();
    } else if (guess === "h") {
      // logic for if secret number is higher than random number
      console.log(`Ok. The number is higher.`);
      minNumber = randomNumber + 1;
      randomNumber = getRandomNumberFromRange(minNumber, maxNumber);
    } else if (guess === "l") {
      //logic for is secret number is lower than random number
      console.log(`Ok. The number is lower.`);
      maxNumber = randomNumber - 1;
      randomNumber = getRandomNumberFromRange(minNumber, maxNumber);
    } else {
      console.log(
        `Please answer (R) - Right\n   (H) - Higher\n   (L) - Lower\n `
      );
    }
    attempts++; // increment attempts by 1
  }
}

start();
// ~ to run this code, open Terminal and enter 'node index.js'
