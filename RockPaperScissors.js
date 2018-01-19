// Global variables
var computer = "";
var user = "";
var userPoints = 0;
var computerPoints = 0;

// Computer playing its turn by choosing a random number between 0, 1 and 2 (scissors, paper and rock)
function computerPlay() {
	  var randomChoice = Math.floor(Math.random() * Math.floor(3));
	  computer = (randomChoice === 2) ? "rock" : (randomChoice === 1) ? "paper" : "scissors";
	  return computer;
}

// Ask for user input, convert to lower case and check whether user input matches 3 strings; if not, exit programme
function askInput() {
		var userInput = prompt("Please enter rock, paper or scissors");
		user = userInput.toLowerCase(); 
		if ((user === "rock") || (user === "paper") || (user === "scissors")) {
		  return user;
		}
		else
		  console.log("Try again!");
		  exit();
}

// Possible winning conditions depending on computer and user input. Points are assigned to winner
function decision(user, computer) {
		if (user === "rock") {
		  if (computer === "paper") {
			console.log("You loose!");
			computerPoints++; }
		  if (computer === "scissors") {
			console.log("You win!");
			userPoints++; }
		  else 
			console.log("It's a tie!"); 
		}
		else if (user === "paper") {
			if (computer === "rock") {
			  console.log("You win!");
			  userPoints++; }
			if (computer === "scissors") {
			  console.log("You loose!"); 
			  computerPoints++; }
			else 
			console.log("It's a tie!"); 
		  }
		else if (user === "scissors") {
			if (computer === "paper") {
			  console.log("You win!");
			  userPoints++; }
			if (computer === "rock") {
			  console.log("You loose!");
			  computerPoints++; }
			else 
			console.log("It's a tie!");
		}
    }

// Function executing the game. Game consists of 5 turns where user is asked for input, computer makes its choice and the choice is shown to the user. Decision() gives points to whoever won the round, which is displayed to the user afterwards. After 5 turns, the final point score is evaluated and the winner of the game decided.
function game() {
	  console.log("Welcome to Rock, Paper, Scissors!");
		  var turn = 1;
		  while (turn <= 5) {
			askInput();
			computerPlay();
			console.log("You: "+ user, "Computer: "+ computer);  
			decision(user, computer);
			console.log("Your points: " + userPoints + ", Computer points: " + computerPoints);
			turn += 1;
			if (turn === 6) {
			  var end = ((userPoints < computerPoints) ? "You loose the Game!" : (computerPoints < userPoints) ? "You win the Game!" : "Nobody wins!");
			  console.log(end);
		  }
  }
}


//Execute Game
game();
