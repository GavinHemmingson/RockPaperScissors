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

function choice1 ()
    {
        playerSelection = "Paper";
        playGame();
    }
function choice2 ()
    {
        playerSelection = "Rock";
        playGame();
    }
function choice3 ()
    {
        playerSelection = "Scissors";
        playGame();
    }


// function getPlayerChoice(x)
// {
//     let choice = x;

//     let answer = choice.toLowerCase();
//     answer = answer.split("");
//     // for(let i = 0; i == choice.length - 1; i++)
//     // {
//     //     answer[i] = answer[i].toLowerCase();
//     // }
    
//     answer[0] = answer[0].toUpperCase();
//     // console.log(answer);
//     answer = answer.join("");
//     // console.log(answer);
//     return playerSelection = answer;

// }





function results(playerSelection, computerSelection)
{    



    if(playerSelection === computerSelection)
    {
        score.textContent = "Your wins = " + playWin + " " + "Comp wins = " + compWin;
        return "Stalemate"
    }

    else if(playerSelection === "Rock" && computerSelection === "Scissors" ||
      playerSelection === "Scissors" && computerSelection === "Paper" ||
      playerSelection === "Paper" && computerSelection === "Rock")
    {
        playWin++;
        
        if (playWin == 5)
            {
                compWin = 0;
                playWin = 0;
                score.textContent = "Your wins = " + playWin + " " + "Comp wins = " + compWin;
                return "You won 5 rounds"
            }
        score.textContent = "Your wins = " + playWin + " " + "Comp wins = " + compWin;
        console.log(playWin)
        return "You Win!!!" 
    }
    else
    {
        compWin++;
        

        if (compWin == 5)
            {
                compWin = 0;
                playWin = 0;
                score.textContent = "Your wins = " + playWin + " " + "Comp wins = " + compWin;
                return "Comp won 5 rounds"
            }
        score.textContent = "Your wins = " + playWin + " " + "Comp wins = " + compWin;
        console.log(compWin)
        return "You Lose"
    }

}

function playGame()
{
    // getPlayerChoice();
    getComputerChoice();
    alert(results(playerSelection, computerSelection));
}

function playRound()
{

    for(let i = 0; i < 5; i++)
    {
        playGame();
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