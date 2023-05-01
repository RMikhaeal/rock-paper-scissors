function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toLower();
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