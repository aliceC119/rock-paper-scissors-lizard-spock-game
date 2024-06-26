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

/* Set up the game logic */

function playTurn(playerChoice, computerChoice) {
    let resultInt = 0;

/* When playerChoice and computerChoice are the same, then both sides gained 0 point */

    if(playerChoice === computerChoice){
        resultInt = 0;   
    }
/*  Otherwise the chosen choice beats the relative two choices */

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

/*  Allow the player and the computer to play the game, 
the computer can choose randomly within the 5 choices */

function playGame(playerChoice){
    let computerChoice = choices[Math.floor(Math.random()* 5)];

/*  Link the relative images to computerChoice and playerChoice when play button is clicked */

    document.getElementById("computer-choice").src = imagePath + computerChoice + ".png";
    document.getElementById("player-choice").src = imagePath + playerChoice + ".png";
    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;  

/* Different results and point will be showed and added if the result conditions are met */

    let resultInt = playTurn(playerChoice, computerChoice);
    let result = "";
    if (resultInt > 0) {
        result = "You Win!";
        playerScore++;
    } else if (resultInt < 0) {
        result = "You Lose!";
        computerScore++;
    } else {
        result = "It's a DRAW!";
    }
    playerScoreDisplay.textContent = "Score: " + playerScore.toString();
    computerScoreDisplay.textContent = "Score: " + computerScore.toString();
    resultDisplay.textContent = result;

    /* Set the logic of moves left,
    the number of moves will be deducted after each click */

    moves++;
    movesLeft.innerText = `Moves Left: ${numOfTurn - moves}`;
    
    if(moves >= numOfTurn || meetEndGameCondition){
        
        endGame();
    }
}
/* Set the logic for the winner */

function endGame() {
    
    let winner = "It's a Tie Game";
    if (playerScore > computerScore) {
        winner =  "The winner is " + "You";
    } else if (computerScore > playerScore) {
        winner =  "The winner is " + "Computer";
    }
    resultDisplay.textContent = winner;

/* Set the display page to the result page once the 10 moves are up. */

    document.querySelector('.choices').style.display = 'none';
    document.querySelector('.move').style.display = 'none';
}
/* Display the calculation of Moves Left when the choice button is being clicked,
and return to the choice display page after the reset button is being clicked. */

function clearDisplay(){
    playerScore = 0;
    computerScore = 0;
    moves = 0;

    movesLeft.innerText = `Moves Left: ${10-moves}`;
    playerScoreDisplay.textContent = "Score: " + playerScore.toString();
    computerScoreDisplay.textContent = "Score: " + computerScore.toString();
    resultDisplay.textContent = "";    

    document.querySelector('.choices').style.display = 'block';
    document.querySelector('.move').style.display = 'block';
}