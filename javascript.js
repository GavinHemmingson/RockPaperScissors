let playerSelection = "";
let computerSelection = "";

let playWin = 0;
let compWin = 0;


function getComputerChoice()
{
    let choice = (Math.random()*3) + 1;
    if(choice >= 3)
        {
            computerSelection = "Rock";
        }

    else if(choice >= 2)
        {
            computerSelection = "Paper";
        }

    else if(choice >= 1)
        {
            computerSelection = "Scissors";
        }
    // console.log(computerSelection);
    return computerSelection;
}



function getPlayerChoice()
{
    let choice = prompt("Rock, Paper, or Scissors?");

    let answer = choice.toLowerCase();
    answer = answer.split("");
    // for(let i = 0; i == choice.length - 1; i++)
    // {
    //     answer[i] = answer[i].toLowerCase();
    // }
    
    answer[0] = answer[0].toUpperCase();
    // console.log(answer);
    answer = answer.join("");
    // console.log(answer);
    return playerSelection = answer;

}



function results(playerSelection, computerSelection)
{    
    if(playerSelection === computerSelection)
    {
        return "Stalemate"
    }

    else if(playerSelection === "Rock" && computerSelection === "Scissors" ||
      playerSelection === "Scissors" && computerSelection === "Paper" ||
      playerSelection === "Paper" && computerSelection === "Rock")
    {
        playWin++;
        return "You Win!!!" 
    }
    else
    {
        compWin++;
        return "You Lose"
    }
}

function playRound()
{

    for(let i = 0; i < 5; i++)
    {
        getComputerChoice();
        getPlayerChoice();
        alert(results(playerSelection, computerSelection));
    }

    if(compWin > playWin)
    {
        compWin = 0;
        playWin = 0;
        return "Computer Wins"
        
    }

    else if(playWin > compWin)
    {
        compWin = 0;
        playWin = 0;
        return "Player Wins"
    }
}