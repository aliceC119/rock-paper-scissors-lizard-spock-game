
const choices = ["rock", "paper", "scissors", "lizard", "spock"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

let player = 0;
let computer = 0;
let numOfRound = 0;


function playTurn(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random()* 5)];
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

   
    
    let result = "";


    if(playerChoice === computerChoice){
        result = "It's a DRAW!"
        
    }
    else{
        switch(playerChoice){
            case "scissors":
                result = (computerChoice === "paper") ? "You Win" : "You Lose!";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "You Win!" : "You Lose!";
                break; 
            case "rock":
                result = (computerChoice === "lizard") ? "You Win!" : "You Lose!";
                break;     
            case "lizard":
                result = (computerChoice === "spock") ? "You Win!" : "You Lose!";
                break; 
            case "spock":
                result = (computerChoice === "scissors") ? "You Win!" : "You Lose!";
                break;  
            case "scissors":
                result = (computerChoice === "lizard") ? "You Win!" : "You Lose!";
                break; 
            case "lizard":
                result = (computerChoice === "paper") ? "You Win!" : "You Lose!";
                break; 
            case "paper":
                result = (computerChoice === "spock") ? "You Win!" : "You Lose!";
                break;   
            case "spock":
                result = (computerChoice === "rock") ? "You Win!" : "You Lose!";
                break;
            case "rock":
                result = (computerChoice === "scissors") ? "You Win!" : "You Lose!";
                break;           
        }
    


    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result;

    playerOptions.forEach(option => {
        option.addEventListener('click',function(){

            const movesLeft = document.querySelector('.movesleft');
            moves++;
            movesLeft.innerText = `Moves Left: ${10-moves}`;
            

            const choiceNumber = Math.floor(Math.random()*3);
            const computerChoice = computerOptions[choiceNumber];

            // Function to check who wins
            winner(this.innerText,computerChoice)
            
            // Calling gameOver function after 10 moves
            if(moves == 10){
                gameOver(playerOptions,movesLeft);
            }
        })
    })
    
}
}