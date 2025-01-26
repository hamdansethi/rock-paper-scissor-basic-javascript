let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const x = Math.random();
    return x < 0.333 ? 1 : x < 0.666 ? 2 : 3; // 1: Rock, 2: Paper, 3: Scissors
}

function eval(userChoice) {
    const a = getComputerChoice();
    const choices = ["Rock", "Paper", "Scissors"];
    const computerChoice = choices[a - 1];
    const userSelection = choices[userChoice - 1];

    let result = "";

    if (userChoice === a) {
        result = "It's a draw!";
    } else if (
        (userChoice === 1 && a === 3) ||
        (userChoice === 2 && a === 1) ||
        (userChoice === 3 && a === 2)
    ) {
        result = "You win!";
        humanScore += 1;
    } else {
        result = "You lose!";
        computerScore += 1;
    }

    // Display results
    resultDiv.textContent = `${result} You chose ${userSelection}, computer chose ${computerChoice}.`;
    scoreDiv.textContent = `Your Score: ${humanScore} | Computer Score: ${computerScore}`;
}

// DOM Setup
const body = document.querySelector("body");
body.style.display = "flex";
body.style.flexDirection = "column";
body.style.alignItems = "center";
body.style.gap = "20px";

const btnContainer = document.createElement("div");
btnContainer.style.display = "flex";
btnContainer.style.gap = "10px";

const buttons = [
    { label: "Rock", value: 1 },
    { label: "Paper", value: 2 },
    { label: "Scissors", value: 3 }
];

buttons.forEach((btnData) => {
    const cont =document.createElement("div");
    cont.style.display = 'flex';
    cont.style.flexDirection =  'column';
    cont.style.justifyContent = 'center';

    btnContainer.appendChild(cont);



    const btn = document.createElement("button");
    btn.textContent = btnData.label;
    btn.value = btnData.value;
    cont.appendChild(btn);

    const img = document.createElement("img");
    img.src =  `${btnData.label}.png`;
    cont.appendChild(img);

    // Add event listener
    btn.addEventListener("click", () => eval(Number(btn.value)));
});

body.appendChild(btnContainer);

// Display areas
const resultDiv = document.createElement("div");
resultDiv.style.marginTop = "20px";
resultDiv.style.fontSize = "18px";

const scoreDiv = document.createElement("div");
scoreDiv.style.marginTop = "10px";
scoreDiv.style.fontSize = "16px";

body.appendChild(resultDiv);
body.appendChild(scoreDiv);
