// const readline = require('readline');
// const rl = readline.createInterface(process.stdin, process.stdout);

// function ask(questionText) {
//   return new Promise((resolve, reject) => {
//     rl.question(questionText, resolve);
//   });
// }

// start();

// async function start() {
//   console.log("Let's play a game where you (human) make up a number and I (computer) try to guess it.")
//   let secretNumber = await ask("What is your secret number?\nI won't peek, I promise...\n");
//   console.log('You entered: ' + secretNumber);
//   // Now try and complete the program.
//   process.exit();
// }

//   if(error){
//       console.log('Error reading file', error);
//  } else{
//       console.log(data);
// let randomNumber = Math.floor(Math.random()* 100) +1;

// let min =1;
// let max = 100;

// async function playGame(secretNumber){
//   while (true){
//     let guess = Math.floor((min + max) / 2);

//     let answer =await ask('Is your number $(guess)? (yes or no)\n');
// if (answer.toLowerCase()---'yes') 
// {
//   console.log('Horray! I guessed your number $(guess) correctly.');
//   break;

// }
//     else if (answer.toLowerCase()---'no')(
//       let feedback = await ask("Is my guess too high or too low? Enter h for too high, '1' for too low: ");
//     if (feedback.toLowerCase()---'h'){
//       max = adjustUpperBound(guess,max); //Adjust the upper bound.
//        }else if (feedback.toLowerCase())--- '1'{
//         min = adjustLowerBound(guess, min); }// Adjust to lower bound.
//     } else {
//       console.log("Invalid input. Please enter 'h or '1'.");
//     }
//    else {
//     console.log ("Ivalid input. Please enter 'yes' or 'no'.");
    
//   }
// }
const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);

function prompt(promptText) {
  return new Promise((resolve, reject) => {
    rl.question(promptText, resolve);
  });
}

async function start() {
  await guessTheNumber();
}
async function guessTheNumber() {

  // and there to be a conditional that
  // if (guesses === maxGuesses) then end the game (ran out of guesses)
  console.log(
    "Let's play a game where you (human) make up a number and I (computer) try to guess it."
  );
  let secretNumber = await prompt(
    "What is your secret number?\nI won't peek, I promise...\n"
  );
  console.log(`You entered: ${secretNumber}`);
  if (secretNumber < 0 || secretNumber > 100 || isNaN(secretNumber)) {
    console.log(
      "Please, make sure to input a number between 1 - 100. Start over!"
    );
    process.exit();
  } else {
    console.log("Let's begin!");
  }function getRandomNumberFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }let min = 1;
  let max = 100;
  const maxAttempts = Math.floor(Math.log2(max) + 1);

  let randomNumber = getRandomNumberFromRange(min, max);
  let attempts = 1;
  
  while (true) {
    if(attempts > maxAttempts){
      console.log('Out of attempts, play again');
      process.exit();
    } else {
    let guessResponse = await prompt(
      `Attempt Number ${attempts}/${maxAttempts}.\nI think your number is ${randomNumber}.\nIs this right? Is your number higher or lower?\n   (R) - Right\n   (H) - Higher\n   (L) - Lower\n`
    );
    let guess = guessResponse.toLowerCase();
    if (guess === "r") {
      console.log(`Yay! I guessed correctly!\n End of game.`);
      process.exit();
    } else if (guess === "h") {
      console.log(`Ok. The number is higher.`);
      min = randomNumber + 1;
      randomNumber = getRandomNumberFromRange(min, max);
    } else if (guess === "l") {
      console.log(`Ok. The number is lower.`);
      max = randomNumber - 1;
      randomNumber = getRandomNumberFromRange(min, max);
    } else {
      console.log(
        `Please answer (R) - Right\n   (H) - Higher\n   (L) - Lower\n `
      );
    }
    attempts++;
    }
  }
}async function reverseGuessTheNumber() {
  // code out functionality for this
}

start();
// to run this code, open Terminal and enter 'node index.js'