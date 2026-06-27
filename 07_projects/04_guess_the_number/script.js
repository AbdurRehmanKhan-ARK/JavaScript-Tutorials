let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const guessRemaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

let prevGuess = [];
let guessCount = 1;
let playGame = true;

submit.addEventListener("click", function (e) {
  e.preventDefault();
  if (!playGame) return;
  const guess = parseInt(userInput.value);
  validateGuess(guess);
});

function validateGuess(guess) {
  if (isNaN(guess)) {
    displayMessage("Please enter a valid number between 1 and 100");
  } else if (guess < 1) {
    displayMessage("Please enter a number greater than 1");
  } else if (guess > 100) {
    displayMessage("Please enter a number less than 100");
  } else {
    prevGuess.push(guess);
    cleanUpGuess(guess);
    analyzeGuess(guess);
  }
}

function analyzeGuess(guess) {
  if (guessCount > 10) {
    displayMessage(`Game Over! Number was ${randomNumber}`);
    endGame();
    return;
  }
  if (guess === randomNumber) {
    displayMessage(`You got it in ${guessCount - 1} guesses!`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage("Too low, try higher");
  } else {
    displayMessage("Too high, try lower");
  }
}

function cleanUpGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML += `${guess} | `;
  guessCount++;
  guessRemaining.innerHTML = `${11 - guessCount}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  playGame = false;
  userInput.setAttribute("disabled", "");
  submit.setAttribute("disabled", "");

  const btn = document.createElement("button");
  btn.textContent = "Play Again";
  btn.className = "guessSubmit";
  btn.style.marginTop = "12px";
  btn.addEventListener("click", newGame);
  startOver.appendChild(btn);
}

function newGame() {
  randomNumber = parseInt(Math.random() * 100 + 1);
  prevGuess = [];
  guessCount = 1;
  playGame = true;
  guessSlot.innerHTML = "";
  guessRemaining.innerHTML = "";
  lowOrHi.innerHTML = "";
  userInput.removeAttribute("disabled");
  submit.removeAttribute("disabled");

  const btn = startOver.querySelector("button");
  if (btn) startOver.removeChild(btn);
}
