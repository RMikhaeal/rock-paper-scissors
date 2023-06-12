let winner;
let player = 0, comp = 0;

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
	button.addEventListener('click', () => {
		winner = playRound(button.id, getComputerChoice());
	});
});

function playRound(playerSelection, computerSelection) {
	const playerChoice = playerSelection.toLowerCase();
	let result;

	if (playerChoice == computerSelection) {
		result = "Tie! Both used " + playerChoice + ".";
		document.getElementById('result').innerHTML = result + " Pick again!";
		return result;
	}

	switch(computerSelection) {
		case "rock":
			(playerChoice == "paper") ? result = "You win! Paper beats rock." : result = "You lose! Rock beats scissors.";
			break;
		case "paper":
			(playerChoice == "scissors") ? result = "You win! Scissors beats paper." : result = "You lose! Paper beats rock.";
			break;
		case "scissors":
			(playerChoice == "rock") ? result = "You win! Rock beats scissors." : result = "You lose! Scissors beats paper.";
	}

	if (result.includes("win")) {
		player += 1;
	} else if (result.includes("lose")) {
		comp += 1;
	}

	document.getElementById('result').innerHTML = result + " Pick again!";
	document.getElementById('playerscore').innerHTML = "Player score: " + player;
	document.getElementById('computerscore').innerHTML = "Computer score: " + comp;

	if (player == 5) {
		setTimeout(function() {
			alert("Player wins!");
			resetScores();
		},10)
	} else if (comp == 5) {
		setTimeout(function() {
			alert("Computer wins!");
			resetScores();
		},10)
	}

	return result;
}

function getComputerChoice() {
	let cpu = Math.floor(Math.random() * 3);
	let choice;
	
	switch(cpu) {
		case 0:
			choice = "rock";
			break;
		case 1:
			choice = "paper";
			break;
		case 2:
			choice = "scissors"
	}

	return choice;
}

function resetScores() {
	player = 0; 
	comp = 0;
	document.getElementById('result').innerHTML = "Rock, Paper, or Scissors?";
	document.getElementById('playerscore').innerHTML = "Player score: " + player;
	document.getElementById('computerscore').innerHTML = "Computer score: " + comp;
}