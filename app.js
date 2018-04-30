/*
GAME FUNCTION:
    - Player must guess a number between a min and max
    - Player gets a certain amount of guesses
    - Notify player of the guesses remaining
    - Notify the player of the correct answer if lost
    - Let the player choose to play again
 */

// Define the game values
let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

// Define the UI elements
const game = document.getElementById('game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessInput = document.getElementById('guess-input'),
      guessButton = document.getElementById('guess-btn'),
      message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Listen for guess
guessButton.addEventListener('click', function() {
  let guess = parseInt(guessInput.value);

  if(isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}.`, 'red');
  }

  // Check if won
  if(guess === winningNum) {
    //Disable input
    guessInput.disabled = true;
    guessInput.style.borderColor = 'green';
    setMessage(`Congratulations! ${winningNum} is correct!`, 'green');
  } else {

  }
});

// Set message function
function setMessage(error, color) {
    message.style.color = color;
    message.textContent = error;
}
