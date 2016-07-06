// Functionality - pull input into guess display box //

var recentGuessDisplay = document.getElementById('last-guess');

var userGuess = document.getElementById('user-guess');

var guessButton = document.getElementById('guess-button');

var hintMessage = document.getElementById('hint-message');

var guessCount = 0;
//clear button//
var clearButton = document.getElementById('clear-guess-button');

userGuess.addEventListener('input', function(){
  clearButton.disabled = false;
});

clearButton.addEventListener('click', function(){
  recentGuessDisplay.innerText = "";
  userGuess.value="";
  clearButton.disabled = true;
});

guessButton.addEventListener('click', function(){

   recentGuessDisplay.innerText = userGuess.value;
    if ((parseInt(userGuess.value) > 100) || (parseInt(userGuess.value) < 1)){
      hintMessage.innerText = "Error! Your guess is outside the range of potential answers."
    } else if (parseInt(userGuess.value) < computerChoice){
      hintMessage.innerText = "Sorry, that number is too low. Try again!"
    } else if (parseInt(userGuess.value) === computerChoice){
    hintMessage.innerText = "Congrats! You guessed the number!"
  } else if (isNaN(parseInt(userGuess.value)) === true){
    hintMessage.innerText = "Error! That's not a number, silly!"
  } else if(parseInt(userGuess.value) > computerChoice){
    hintMessage.innerText = "Sorry, that number is too high. Try again!"
  }

  resetButton.disabled= false;
  // guessCount += 1;
  // return guessCount;

});

//Functionality - clears last guess from display area and the input box


//Functionality - generates computer's choosen number, attaches it to variable
//I used used the 'Math.floor +1' method because it gives a better distribution of randomness than 'Math.ceil'


var computerChoice = getRandomNum();

function getRandomNum(){
  return Math.floor(Math.random() * 100) + 1;
}

//resets game by re-doing the definition of computerChoice, which re-runs getRandomNum

var resetButton = document.getElementById('reset-button');

resetButton.addEventListener('click', function(){
  recentGuessDisplay.innerText = "";
  userGuess.value="";
  computerChoice = getRandomNum();
  resetButton.disabled=true;
  clearButton.disabled = true;
})
