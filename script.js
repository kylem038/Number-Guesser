//Variables//
var recentGuessDisplay = document.getElementById('last-guess');
var userGuess = document.getElementById('user-guess');
var guessButton = document.getElementById('guess-button');
var clearButton = document.getElementById('clear-guess-button');
var resetButton = document.getElementById('reset-button');
var rangeSubmitButton = document.getElementById('range-submit');
var hintMessage = document.getElementById('hint-message');
var userMin = document.getElementById('user-min');
var userMax = document.getElementById('user-max');
var computerChoice = getRandomNum(parseInt(userMin.value), parseInt(userMax.value));

/*Generates computer's choosen number, attaches it to variable.
(I used used the 'Math.floor +1' method because it gives a better
distribution of randomness than 'Math.ceil')*/
function getRandomNum(min,max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function which update RNG min/max +/-10 if correct answer is given, as well as updates input fields with innerText call

function levelUp(min, max) {
  min = min-10;
  max = max +10;
  userMin.value = min;
  userMax.value = max;
  computerChoice = getRandomNum(parseInt(min), parseInt(max));
  return computerChoice;
}

// Submit button for min/max which will feed the RNG & guessButton
rangeSubmitButton.addEventListener('click', function() {
  computerChoice = getRandomNum(parseInt(userMin.value), parseInt(userMax.value));
  return computerChoice;
});

/*Wakes up clear button when text is entered*/
userGuess.addEventListener('input', function(){
  clearButton.disabled = false;
});

/*Clear button resets fields and then disables itself*/
clearButton.addEventListener('click', function(){
  recentGuessDisplay.textContent = "";
  userGuess.value="";
  clearButton.disabled = true;
});

/*resets game by re-defining computerChoice,
clearing fields, and disables both buttons*/
resetButton.addEventListener('click', function(){
  recentGuessDisplay.textContent = "";
  userGuess.value="";
  resetButton.disabled=true;
  clearButton.disabled = true;
  computerChoice = getRandomNum(parseInt(userMin.value), parseInt(userMax.value));
  return computerChoice;
})

/*guess button displays the guess, triggers error messages and hints,
and initiates game by waking up reset button*/
guessButton.addEventListener('click', function(){
  recentGuessDisplay.textContent = userGuess.value;
  resetButton.disabled= false;
    if ((parseInt(userGuess.value)) > (parseInt(userMax.value)) ||
      (parseInt(userGuess.value)) < (parseInt(userMin.value))){
      hintMessage.textContent = "Error! Your guess is outside the range of potential answers."
    } else if (parseInt(userGuess.value) < computerChoice){
      hintMessage.textContent = "Sorry, that number is too low. Try again!"
    } else if (parseInt(userGuess.value) === computerChoice){
      hintMessage.textContent = "Congrats! You guessed the number!"
      levelUp(parseInt(userMin.value), parseInt(userMax.value));
    } else if (isNaN(parseInt(userGuess.value)) === true){
      hintMessage.textContent = "Error! That's not a number, silly!"
    } else if (parseInt(userGuess.value) > computerChoice){
      hintMessage.textContent = "Sorry, that number is too high. Try again!"
    };

});
