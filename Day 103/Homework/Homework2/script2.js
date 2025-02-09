const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const resultDiv = document.getElementById('result');

let playerScore = document.getElementById("player-scores");
let computerScore = document.getElementById("computer-scores");
const choices = ["ქვა", "მაკრატელი", "ფურცელი"];
const gameHistoryDiv = document.getElementById("game-history");

function getCurrentTime() {
    const now = new Date();
    return now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
}

document.getElementById("stats-button").onclick = function () {
    if (gameHistoryDiv.style.display === 'none') {
        gameHistoryDiv.style.display = 'flex';
    } else {
        gameHistoryDiv.style.display = 'none';
    }
};

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
    let result = "";
    if (userChoice === computerChoice) {
        result = "ფრე!";
    } else if (
        (userChoice === 'ქვა' && computerChoice === 'მაკრატელი') ||
        (userChoice === 'მაკრატელი' && computerChoice === 'ფურცელი') ||
        (userChoice === 'ფურცელი' && computerChoice === 'ქვა')
    ) {
        let playerCurrentValue = Number(playerScore.textContent);
        playerCurrentValue += 1;
        playerScore.textContent = playerCurrentValue;
        result = "შენ მოიგე!";
    } else {
        let computerCurrentValue = Number(computerScore.textContent);
        computerCurrentValue += 1;
        computerScore.textContent = computerCurrentValue;
        result = "კომპიუტერმა მოიგო!";
    }

    return result;
}

function addGameToHistory(playerChoice, computerChoice, result) {
    const historyEntry = document.createElement("div");
    historyEntry.classList.add("game-entry");

    historyEntry.innerHTML = `
        <span>მოთამაშე: ${playerChoice}</span>
        <span>კომპიუტერი: ${computerChoice}</span>
        <span>შედეგი: ${result}</span>
        <span>დრო: ${getCurrentTime()}</span>
    `;
    gameHistoryDiv.appendChild(historyEntry);
}

rockButton.onclick = function () {
    const userChoice = 'ქვა';
    const computerChoice = getComputerChoice();
    const result = determineWinner(userChoice, computerChoice);
    resultDiv.textContent = `შენ აირჩიე ქვა. კომპიუტერმა აირჩია ${computerChoice}. ${result}`;
    addGameToHistory(userChoice, computerChoice, result);
};

paperButton.onclick = function () {
    const userChoice = 'ფურცელი';
    const computerChoice = getComputerChoice();
    const result = determineWinner(userChoice, computerChoice);
    resultDiv.textContent = `შენ აირჩიე ფურცელი. კომპიუტერმა აირჩიახ ${computerChoice}. ${result}`;
    addGameToHistory(userChoice, computerChoice, result);
};

scissorsButton.onclick = function () {
    const userChoice = 'მაკრატელი';
    const computerChoice = getComputerChoice();
    const result = determineWinner(userChoice, computerChoice);
    resultDiv.textContent = `შენ აირჩიე მაკრატელი. კომპიუტერმა აირჩიახ ${computerChoice}. ${result}`;
    addGameToHistory(userChoice, computerChoice, result);
};