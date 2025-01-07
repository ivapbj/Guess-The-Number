const gameContainer = document.getElementById("game-container");

let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const guessInput = document.createElement("input");
guessInput.type = "number";
guessInput.placeholder = "Enter your guess";

const submitButton = document.createElement("button");
submitButton.textContent = "Submit Guess";

const resultMessage = document.createElement("p");

gameContainer.appendChild(guessInput);
gameContainer.appendChild(submitButton);
gameContainer.appendChild(resultMessage);

submitButton.addEventListener("click", () => {
  attempts++;
  const userGuess = parseInt(guessInput.value);
  if (userGuess === randomNumber) {
    resultMessage.textContent = `Correct! You guessed it in ${attempts} attempts.`;
  } else if (userGuess < randomNumber) {
    resultMessage.textContent = "Too low! Try again.";
  } else {
    resultMessage.textContent = "Too high! Try again.";
  }
});
