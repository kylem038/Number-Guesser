// Functionality - pull input into guess display box //

var recentGuessDisplay = document.getElementById('last-guess');

var userGuess = document.getElementById('user-guess');

var guessButton = document.getElementById('guess-button');

var hintMessage = document.getElementById('hint-message');

guessButton.addEventListener('click', function(){
   recentGuessDisplay.innerText = userGuess.value;
    if (parseInt(userGuess.value) > computerChoice){
      hintMessage.innerText = "Sorry, that number is too high. Try again!"
    } else if (parseInt(userGuess.value) < computerChoice){
      hintMessage.innerText = "Sorry, that number is too low. Try again!"
    } else (parseInt(userGuess.value) === computerChoice){
    hintMessage.innerText = "Congrats! You guessed the number!"}
});


//Functionality - clears last guess from display area and the input box

var clearButton = document.getElementById('clear-guess-button');

clearButton.addEventListener('click', function(){
  recentGuessDisplay.innerText = "";
  userGuess.value="";
});

//Functionality - generates computer's choosen number, attaches it to variable
//I used used the 'Math.floor +1' method because it gives a better distribution of randomness than 'Math.ceil'


var computerChoice = getRandomNum();

function getRandomNum(){
  return Math.floor(Math.random() * 100) + 1;
}
