let score=0;
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
  
}
// console.log(getComputerChoice());

function rock(){

play("rock");       
}
function paper(){
play("paper")
}
function scissors(){
play("scissors");
}

function playRound(playerSelection, computerSelection) {

  if (playerSelection == computerSelection) {
    return "It's tie " + playerSelection + " equals  " + computerSelection;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
    ) {
      return "You win";
    } else {
      return "You lose";
      
    }
  }
function play(playerSelection){

var computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));      
let result= playRound(playerSelection, computerSelection);      

document.getElementById('result').innerHTML=result;   

scorcode(playerSelection,computerSelection);

}
function scorcode(playerSelection,computerSelection){
if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ){
    score++;
  }
  document.getElementById('count').innerHTML=score;
  console.log(score);
}

