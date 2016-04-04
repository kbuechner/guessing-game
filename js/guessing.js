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
	return getRandomInt(1, 100);
}

winningNumber = generateWinningNumber();
playersGuess = 5;
//	console.log(winningNumber);

// Fetch the Players Guess

function playersGuessSubmission(){
	--playersGuess;
	//if submission > 100, not an int, or >100, text that says "you broke the rules and wasted a turn. was it worth it?" 
	// add code here
}

// Determine if the next guess should be a lower or higher number

function lowerOrHigher(){

	if( playerGuessSubmission() > winningNumber){
	//	console.log("higher");
	//	popup that says "nope! higher!";
	}
	else if (playerGuessSubmission() < winningNumber){
	//	console.log("lower");
	//	popup that says "nope! lower!";
	}

	else if (playerGuessSubmission === winningNumber){}
	//	console.log("you win");
	// popup that says "you guessed it! you should put this on your resume."

}

// Check if the Player's Guess is the winning number 

function checkGuess(){
	if (playersGuess>0){
		lowerOrHigher(guessInput);
	}	// add code here
	else{
		//popup: sorry! try again? y/n
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
		else{
			max = 100;
		
//		console.log("The number is between " + getRandomInt(min, winningNumber) + " and "+ getRandomInt(winningNumber, max) + "! And the hint range is " + min + " to " + max + "!");
		--playersGuess;
		}
	}
	else{
		//popup: you only get 5 hints");
	}
}

// Allow the "Player" to Play Again

//function playAgain(){
	// add code here
//}
//provideHint();
//provideHint();
//provideHint();

/* **** Event Listeners/Handlers ****  */
