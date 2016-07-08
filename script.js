/* Variables */
var rangeSubmitButton = document.getElementById('range-submit');
var guessButton = document.getElementById('guess-button');
var clearButton = document.getElementById('clear-guess-button');
var resetButton = document.getElementById('reset-button');
var userGuess = document.getElementById('user-guess');
var userMin = document.getElementById('user-min');
var userMax = document.getElementById('user-max');
var recentGuessDisplay = document.getElementById('last-guess');
var hintMessage = document.getElementById('hint-message');
var computerChoice = getRandomNum(parseInt(userMin.value), parseInt(userMax.value));


/* Generates computer's choosen number, attaches it to variable. */
function getRandomNum(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function defaultRange(){
  if (computerChoice = "NaN"){
    userMin.value = 1;
    userMax.value = 100;
  };
  return userMin.value;
  return userMax.value;
}

defaultRange();
/* Updates min/max +/-10 if correct answer is given and writes new values to screen,
generates new random number with the new params */
function levelUp(min, max) {
  min = min-10;
  max = max +10;
  userMin.value = min;
  userMax.value = max;
  computerChoice = getRandomNum(parseInt(min), parseInt(max));
  return computerChoice;
}

/* Submit button for min/max which will feed the RNG & guessButton */
rangeSubmitButton.addEventListener('click', function() {
  if (parseInt(userMin.value) > parseInt(userMax.value)){
    hintMessage.textContent = "Your minimum can't be higher than your maximum! Pick new parameters."
  }
  computerChoice = getRandomNum(parseInt(userMin.value), parseInt(userMax.value));
  return computerChoice;
});

/*Wakes up clear button when text is entered into guess field*/
userGuess.addEventListener('input', function(){
  clearButton.disabled = false;
});

/*Clear button resets fields and then disables itself*/
clearButton.addEventListener('click', function(){
  recentGuessDisplay.textContent = "";
  userGuess.value="";
  clearButton.disabled = true;
});

/*resets game by re-defining computerChoice, clearing fields, and disables both buttons*/
resetButton.addEventListener('click', function(){
  recentGuessDisplay.textContent = "";
  userGuess.value="";
  resetButton.disabled=true;
  clearButton.disabled = true;
  computerChoice = getRandomNum(parseInt(userMin.value), parseInt(userMax.value));
  return computerChoice;
})

/*Displays the guess, triggers error messages and hints, applies LevelUp,
and initiates game by waking up reset button*/
guessButton.addEventListener('click', function(){

  computerChoice = getRandomNum(parseInt(userMin.value), parseInt(userMax.value));

  recentGuessDisplay.textContent = userGuess.value;

  resetButton.disabled = false;

  if ((parseInt(userGuess.value)) > (parseInt(userMax.value)) || (parseInt(userGuess.value)) < (parseInt(userMin.value))){
    hintMessage.textContent = "Error! Your guess is outside the range of potential answers.";

    }else if (parseInt(userGuess.value) === computerChoice){
      hintMessage.textContent = "Congrats! You guessed the number!";
      levelUp(parseInt(userMin.value), parseInt(userMax.value));

    }else if (isNaN(parseInt(userGuess.value)) === true){
      hintMessage.textContent = "Error! That's not a number, silly!";

    }else if (parseInt(userGuess.value) < computerChoice){
      hintMessage.textContent = "Sorry, that number is too low. Try again!";

    }else if (parseInt(userGuess.value) > computerChoice){
      hintMessage.textContent = "Sorry, that number is too high. Try again!";};

  });
