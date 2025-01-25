let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let x = Math.random();
    let choice = 0;

    if(x <0.333){
        choice = 1;
    } else if(x<0.666){
        choice = 2;
    }else{
        choice = 3;
    }

    return choice;
}

function eval(userChoice){
    let a = getComputerChoice();
    if(userChoice===a){
        console.log("draw");
    }
    else if((userChoice===1 && a===2)||(userChoice===2 && a===3)||(userChoice===3 && a===1)){
        console.log("You win.");
        humanScore += 1;
    }else{
        console.log("You Lose");
        computerScore += 1;
    }
    console.log(`Your Score: ${humanScore}\nComputer Score: ${computerScore}`)
}

function getHumanChoice(){
    return parseInt(prompt("What is your choice:\n1. Rock\n2. Paper\n3. Scissor"))
}

function playGame(){
    let x = getHumanChoice();
    eval(x);
}