function game() {
    let winner, gameWinner;
    let player = 0, comp = 0;
    
    for (let i = 0; i < 5; i++) {
        winner = (playRound(getPlayerChoice(), getComputerChoice()));
        console.log(winner);

        if (winner.includes("win")) {
            player += 1;
        } else if (winner.includes("lose")) {
            comp += 1;
        }
    }

    if (player > comp) {
        gameWinner = "Player wins!";
    } else if (comp > player) {
        gameWinner = "Computer wins!";
    } else {
        gameWinner = "Tie game!";
    }

    console.log(player);
    console.log(comp);
    return gameWinner;
}

function playRound(playerSelection, computerSelection) {
    const playerChoice = playerSelection.toLowerCase();
    let result;

    if (playerChoice == computerSelection) {
        result = "Tie! Both used " + playerChoice;
        return result;
    }

    switch(computerSelection) {
        case "rock":
            (playerChoice == "paper") ? result = "You win! Paper beats rock" : result = "You lose! Rock beats scissors";
            break;
        case "paper":
            (playerChoice == "scissors") ? result = "You win! Scissors beats paper" : result = "You lose! Paper beats rock";
            break;
        case "scissors":
            (playerChoice == "rock") ? result = "You win! Rock beats scissors" : result = "You lose! Scissors beats paper";
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

function getPlayerChoice() {
    let pchoice;

    do {
        pchoice = prompt("Rock, paper, or scissors?").toLowerCase();
    }
    while (pchoice != "rock" && pchoice != "paper" && pchoice != "scissors");

    return pchoice;
}

console.log(game());