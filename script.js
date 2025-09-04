let randomNumber;
let guessCount = 0;

const guessInput = document.getElementById("guessInput");
const submitGuess = document.getElementById("submitGuess");
const resetGame = document.getElementById("resetGame");
const message = document.getElementById("message");
const guessCountDisplay = document.getElementById("guessCount");

function generateRandomNumber() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  guessCount = 0;
  guessCountDisplay.textContent = "Guesses: 0";
  message.textContent = "";
  guessInput.value = "";
  guessInput.disabled = false;
  submitGuess.disabled = false;
  resetGame.style.display = "none";
}

submitGuess.addEventListener("click", function() {
  const userGuess = Number(guessInput.value);

  if (userGuess < 1 || userGuess > 100) {
    message.textContent = "Please enter a number between 1 and 100.";
    message.classList.remove("message-low", "message-high", "message-correct");
    return;
  }

  guessCount++;
  guessCountDisplay.textContent = `Guesses: ${guessCount}`;

  // Reset color classes
  message.classList.remove("message-low", "message-high", "message-correct");

  if (userGuess === randomNumber) {
    message.textContent = `Correct! You guessed it in ${guessCount} tries!`;
    message.classList.add("message-correct");
    endGame();
  } else if (userGuess < randomNumber) {
    message.textContent = "Too low! Try again.";
    message.classList.add("message-low");
  } else {
    message.textContent = "Too high! Try again.";
    message.classList.add("message-high");
  }

  guessInput.value = "";
  guessInput.focus();
});


resetGame.addEventListener("click", generateRandomNumber);

function endGame() {
  guessInput.disabled = true;
  submitGuess.disabled = true;
  resetGame.style.display = "inline-block";
}

generateRandomNumber();