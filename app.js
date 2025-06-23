let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const usersScores = document.querySelector("#user-score");
const compsScores = document.querySelector("#comp-score");

const genCompChoice = () => {      //way to write the function
    // rock , paper, scissor
    const options = ["rock", "paper","scissor"];
    const randomIndex = Math.floor(Math.random()*3);
    return options[randomIndex];
};
const drawGame = () =>{
    msg.innerText = "Game was Draw, Play Again!!";
    msg.style.backgroundColor = "#252A34";
};
const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        usersScores.innerText = userScore;
        msg.innerText = `You win!! your ${userChoice} beats ${compChoice}.`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compsScores.innerText = compScore;
        msg.innerText = `You lose!! ${compChoice} beats your ${userChoice}.`;
        msg.style.backgroundColor = "red";
    }
};
const playGame = (userChoice) => {
    // Generate computer choice
    const compChoice = genCompChoice();
    
    if(userChoice === compChoice){
       //Draw Game 
       drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            //scissor, paper
            userWin = compChoice === "paper" ? false : true; 
        }
        else if(userChoice === "paper"){
            //rock, scissor
            userWin = compChoice === "scissor" ? false : true;
        }
        else{
            // rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};
choices.forEach((choice) => {
      choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
      });
});