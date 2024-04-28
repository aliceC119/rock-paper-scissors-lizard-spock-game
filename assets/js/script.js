const choices = ["rock", "paper", "scissors", "lizard", "spock"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

function playGame(playerChoice){

    const computerChoice = choices[Math.floor(Math.random()* 5)];
    let result = "";

    if(playerChoice === computerChoice){
        result = "It's a DRAW!"
        
    }
    else{
        switch(playerChoice){
            case "scissors":
                result = (computerChoice === "paper") ? "You Win!" : "You Lose!";
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
    }
    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result;

    
}
