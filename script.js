//Function that gets the computer choice

function getComputerChoice() {
    let compChoice = Math.floor(Math.random() * 3)
    if (compChoice == 0) {
        return "rock"
    }
    else if ( compChoice == 1) {
       return "paper"
    }
    else {
        return "scissors"
    }
}

// Function that gets the player choice

function getHumanChoice() {
    let humanChoice = prompt("What is your choice?")
        return humanChoice.toLowerCase()
    }

//Variables required to keep track of the game

let humanScore = 0
let computerScore = 0
let roundsPlayed = 1

//Function that generates the logic to play one round

function playRound(humanSelection, computerSelection) {
    if ((humanSelection === "rock" && computerSelection === "scissors") || 
        (humanSelection === "scissors" && computerSelection === "paper") ||
        (humanSelection === "paper" && computerSelection ==="rock")) {
            console.log(`Player wins with ${humanSelection}, computer loses with ${computerSelection}`)
            humanScore++       
    }
    else if (humanSelection === computerSelection) {
        console.log(`It's a tie, player and computer both selected ${humanSelection}`)
    }
    else {
        console.log(`Computer wins with ${computerSelection}, player loses with ${humanSelection}`)
        computerScore++
        
}
console.log(`rounds played ${roundsPlayed}, player score: ${humanScore}, computer score ${computerScore}`)
}

//Function that plays the game with 5 rounds

function playGame() {
    if (roundsPlayed < 6){
        let humanSelection = getHumanChoice()
        let computerSelection = getComputerChoice()
        if (humanSelection !== "rock" && humanSelection !== "paper" && humanSelection !== "scissors" || humanSelection == "")
            console.log(`Please type rock, paper, or scissors, ${humanSelection} is not an option`)
        else {playRound(humanSelection, computerSelection);
        roundsPlayed++;
        }
            
    }
    else {
        console.log("Game Over")
        humanScore = 0
        computerScore = 0
        roundsPlayed = 0
    }
    
    playGame()
}

//Calling the play game function to initiate the game

playGame()