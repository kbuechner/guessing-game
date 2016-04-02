/* **** Global Variables **** */
// try to elminate these global variables in your project, these are here just to start.

var playersGuess,
    winningNumber



/* **** Guessing Game Functions **** */

// Generate the Winning Number
function getRandomInt(min, max) {
  		return Math.floor(Math.random() * (max - min)) + min;
}

function generateWinningNumber(){
	// return a number between 1-100
	// 	return Math.random();
	playersGuess=0;
	return getRandomInt(1, 100);
}
winningNumber = generateWinningNumber();
console.log(winningNumber);

// Fetch the Players Guess

function playersGuessSubmission(){
	//if (submission NAN) do a 
	// add code here
	return 2;
}

// Determine if the next guess should be a lower or higher number

function lowerOrHigher(){

	if( playerGuessSubmission() > winningNumber)
		console.log("higher");

	else if (playerGuessSubmission() < winningNumber)
		console.log("lower");

	else if (playerGuessSubmission === winningNumber)
		console.log("you win");

}

// Check if the Player's Guess is the winning number 

function checkGuess(){
	// add code here
}

// Create a provide hint button that provides additional clues to the "Player"

function provideHint(){
	var min;
	var max;
	if(playersGuess > 0){
		var hintRange = 5*playersGuess;
		if (winningNumber > hintRange) {
			min = winningNumber - hintRange;
		}
	
		else
		min = 0;
		if (winningNumber < (100-hintRange)){
			max = winningNumber + hintRange;
		}
		else
			max = 100;
		console.log("The number is between " + getRandomInt(min, winningNumber) + " and "+ getRandomInt(winningNumber, max) + "! And the hint range is " + min + " to " + max + "!");
		--playersGuess;
	}
	else
		//put in an "out of hints" dialogue
		console.log("Out of hints, you clown.");
}

// Allow the "Player" to Play Again

function playAgain(){
	// add code here
}
provideHint();
provideHint();
provideHint();

/* **** Event Listeners/Handlers ****  */
