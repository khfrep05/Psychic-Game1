var computersChoice = "";
var wins = 0;
var losses = 0;
var guesses = 9;
var lettersUsed = [];
var choices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
't', 'u', 'v', 'w', 'x', 'y', 'z'];

function randomLetter() {

	//This generates a random number in the choices array
	var randomNumber = Math.floor(Math.random() * choices.length);
	
	//This selects the strings random generated index.
	return choices[randomNumber]
}
console.log(randomLetter())

var computerGuess = randomLetter()
console.log(computerGuess)

window.onkeyup = function(event) {

	

	var usersChoice = event.key.toLowerCase();

	lettersUsed.push(usersChoice)

	//This line is to validate the users key presses between A & Z.
	if(choices.indexOf(usersChoice) > -1) {
		console.log("UpickedValidkey")

		// if the user and computer is the same, then we declare a win.
		if(usersChoice === computerGuess) {
			wins++
			gameReset()
			
		}

		//User loses, a guess.
		else {
			guesses--
		}

		//if the user guesses more than 9 times game is over.
		if(guesses < 1){
			gameReset()
			losses++	
		}
	}
	document.getElementById('Losses').innerHTML = losses;
	document.getElementById('Wins').innerHTML = wins;
	document.getElementById('GuessesLeft').innerHTML = guesses;
	document.getElementById('LettersUsed').innerHTML = lettersUsed;
};

function gameReset(){
	guesses= 9;
	lettersUsed=[];
	
};

