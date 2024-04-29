const choices = ["rock", "paper", "scissors", "lizard", "spock"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScore");
const computerScoreDisplay = document.getElementById("computerScore");
const movesLeft = document.querySelector('.movesleft');
const imagePath = "assets/images/";
const numOfTurn = 10;

let playerScore = 0;
let computerScore = 0;
let moves = 10;
let meetEndGameCondition = false;


/**
 * Set up the game logic */

function playTurn(playerChoice, computerChoice) {
    
    
    let resultInt = 0;

    if(playerChoice === computerChoice){
        resultInt = 0;
        
    }
    else{
        switch(playerChoice){
            case "scissors":
                resultInt = (computerChoice === "paper" || computerChoice ==="lizard") ? 1 : -1;
                break;
            case "paper":
                resultInt = (computerChoice === "rock" || computerChoice ==="spock") ? 1 : -1;
                break; 
            case "rock":
                resultInt = (computerChoice === "lizard"|| computerChoice ==="scissors") ? 1 : -1;
                break;     
            case "lizard":
                resultInt = (computerChoice === "spock" || computerChoice ==="paper") ? 1 : -1;
                break; 
            case "spock":
                resultInt = (computerChoice === "scissors"|| computerChoice ==="rock") ? 1 : -1;
                break;  
                  
        }
    }

    return resultInt;
}

function playGame(playerChoice){

    let computerChoice = choices[Math.floor(Math.random()* 5)];
    document.getElementById("computer-choice").src = imagePath + computerChoice + ".png";
    document.getElementById("player-choice").src = imagePath + playerChoice + ".png";
    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;

    let resultInt = playTurn(playerChoice, computerChoice);
  
    let result = "";

    if (resultInt > 0) {
        result = "You Win!";
        playerScore++;
    } else if (resultInt < 0) {
        result = "You Lose!";
        computerScore++;
    } else {
        result = "It's a Draw!"
    }
    playerScoreDisplay.textContent = "Score: " + playerScore.toString();
    computerScoreDisplay.textContent = "Score: " + computerScore.toString();
    resultDisplay.textContent = result;

    moves++;
    movesLeft.innerText = `Moves Left: ${numOfTurn - moves}`;

    if(moves >= numOfTurn || meetEndGameCondition){
        endGame();
    }

    function endGame() {
        let winner = "It's a Tie Game";
        if (playerScore > computerScore) {
            winner = "The winner is" + "You"; 
        } else if (computerScore > playerScore) {
            winner = "The winner is " + "Computer";
        }
        resultDisplay.textContent = winner;

        document.querySelector('.choice').style.display = 'none';
        document.querySelector('.move').style.display = 'none';
    }
    function clearDisplay() {
        playerScore = 0;
        computerScore = 0;
        moves = 0;

        movesLeft.innerText = `Moves Left: ${10-moves}`;
        playerScoreDisplay.textContent = "Score: " + playerScore.toString();
        computerScoreDisplay.textContent = "Score: " + computerScore.toString();
        resultDisplay.textContent = "";

        document.querySelector('.choices').style.display = 'block';
        document.querySelector('.move').style.display = 'block;'
    }

}


 