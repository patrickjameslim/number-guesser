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
    winningNum = getWinningNumber(1, 10),
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

// Add game listener
game.addEventListener('mousedown', function(e){
  if(e.target.className === 'play-again') {
    window.location.reload();
  }
})

// Listen for guess
guessButton.addEventListener('click', function() {
  let guess = parseInt(guessInput.value);

  if(isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}.`, 'red');
  } else {
    // Check if won
    if(guess === winningNum) {
      // Game over - won
      gameOver(true, `${winningNum} is correct. You win!`);
    } else {
        guessesLeft -= 1;
        if(guessesLeft === 1) {
          setMessage(`Wrong number. You have ${guessesLeft} guess left.`, 'red');
        } if(guessesLeft === 0) {
          gameOver(false, `Game over. The correct number is ${winningNum}`);
        } else {
          setMessage(`Wrong number. You have ${guessesLeft} guesses left.`, 'red');
        }
    }
  }
});

// Game over
function gameOver(won, msg) {
  let color;
  won === true ? color = 'green' : color = 'red';
  guessInput.style.borderColor = color;
  guessInput.disabled = true;
  message.style.color = color;
  setMessage(msg);

  guessButton.value = 'Play Again';
  guessButton.className += 'play-again';
}

// Set random number
function getWinningNumber(min, max) {
  return Math.floor(Math.random()*(max-min)+min);
}

// Set message function
function setMessage(error, color) {
    message.style.color = color;
    message.textContent = error;
}
