const container = document.querySelector("#container");
const rock = document.querySelector("#Rock");
const scissors = document.querySelector("#Scissors");
const paper = document.querySelector("#Paper");
const score = document.createElement("div");



score.classList.add("score");
container.appendChild(score);
score.textContent = "Your wins = " + playWin + " " + "Comp wins = " + compWin;

paper.addEventListener("click",choice1);
rock.addEventListener("click",choice2);
scissors.addEventListener("click",choice3);

playWin = 0;
compWin = 0;

console.log(rock)
console.log(paper)
console.log(scissors)
console.log(playWin)
console.log(compWin)