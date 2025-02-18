
//Function that gets the computer choice
const rockButton = document.getElementById("rock")
const paperButton = document.getElementById("paper")
const scissorsButton = document.getElementById("scissors")
//Selection display divs
const playerSelection = document.getElementById("player-selection")
const compSelection = document.getElementById("computer-selection")
//Result declarations
const result = document.getElementById("result")
//Score Keeping and end game
const score = document.getElementById("score")
const endGame = document.getElementById("end-game")

//Variables required to keep track of the game

let humanScore = 0
let computerScore = 0
let roundsPlayed = 1


//Function that gets computer choice

function getComputerChoice() {
    let compChoice = Math.floor(Math.random() * 3)
    if (compChoice == 0) {
        compSelection.textContent = "Computer has chosen Rock"
        return "rock"
    }
    else if ( compChoice == 1) {
        compSelection.textContent = "Computer has chosen Paper"
       return "paper"
    }
    else {
        compSelection.textContent = "Computer has chosen Scissors"
        return "scissors"
}
}

//Function that generates the logic to play one round

function playRound(humanSelection, computerSelection) {
    if ((humanSelection === "rock" && computerSelection === "scissors") || 
        (humanSelection === "scissors" && computerSelection === "paper") ||
        (humanSelection === "paper" && computerSelection ==="rock")) {
            result.innerText = `Player wins with ${humanSelection}, computer loses with ${computerSelection}`
            humanScore++
    }
    else if (humanSelection === computerSelection) {
        result.innerText = `It's a tie, player and computer both selected ${humanSelection}`  
    }
    else {
        result.innerText = `Computer wins with ${computerSelection}, player loses with ${humanSelection}`
        computerScore++
        
}
    score.innerText = `Rounds played ${roundsPlayed}, Player score: ${humanScore}, Computer score: ${computerScore}`
    endGame.innerText = ""
}

//Function to check if the game is over

function checkEndGame() {
    if (humanScore > computerScore) {
        endGame.innerText = "Player wins! Game Over"
        humanScore = 0
        computerScore = 0
        roundsPlayed = 1
    }
    else {
        endGame.innerText = "Computer wins! Game Over"
        humanScore = 0
        computerScore = 0
        roundsPlayed = 1
    }
}

// Event listeners that initiate game and handle clicks

rockButton.addEventListener('click', function() {
    if (roundsPlayed < 6) {
    playRound("rock", getComputerChoice())
    playerSelection.textContent = "Player has chosen Rock"
    roundsPlayed++
    } else checkEndGame()
})  
paperButton.addEventListener('click', function() {
    if (roundsPlayed < 6) {
    playRound("paper", getComputerChoice())
    playerSelection.textContent = "Player has chosen Paper"
    roundsPlayed++
    }
    else checkEndGame()
})
scissorsButton.addEventListener('click', function() {
    if (roundsPlayed < 6) {
    playRound("scissors", getComputerChoice())
    playerSelection.textContent = "Player has chosen Scissors"
    roundsPlayed++
    }
    else checkEndGame()
})
