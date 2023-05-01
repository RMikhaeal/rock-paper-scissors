function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();
    let result;

    if (player == computerSelection) {
        result = "Tie! Both used " + player;
        return result;
    }

    switch(computerSelection) {
        case "rock":
            (player == "paper") ? result = "You Win! Paper beats rock" : result = "You lose! Rock beats scissors";
            break;
        case "paper":
            (player == "scissors") ? result = "You Win! Scissors beats paper" : result = "You lose! Paper beats rock";
            break;
        case "scissors":
            (player == "rock") ? result = "You Win! Rock beats scissors" : result = "You lose! Scissors beats paper";
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
   
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));