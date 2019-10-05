import getSecretNumber, { gameResults } from './compareNum.js';

const inputNum = document.getElementById('input-number');
const submitBtn = document.getElementById('btn');
const output = document.getElementById('output');
const triesLeftDisplay = document.getElementById('tries-left');
const youWin = document.getElementById('you-win');
const tryAgain = document.getElementById('try-again');
const gameOver = document.getElementById('game-over');
let triesLeft = 4;


const playGame = () => {
    const mySecretNumber = getSecretNumber();
    triesLeft--;
    triesLeftDisplay.textContent = triesLeft;
    const userGuess = parseInt(inputNum.value);  
    const getResults = gameResults(mySecretNumber, userGuess);

    if (getResults === 0) {
        youWin.classList.remove('hidden');
        tryAgain.classList.add('hidden');
        output.textContent = `Your number ${userGuess} was correct`;
        triesLeftDisplay.textContent = `You got it with ${triesLeft} tries left! Nice!`;
        submitBtn.disabled = true;
        triesLeftDisplay.disabled = true;
    }
    else if (getResults === -1 && triesLeft > 0) {
        tryAgain.classList.remove('hidden');
        output.textContent = `Your number ${userGuess} was too low`;
        triesLeftDisplay.textContent = `you have ${triesLeft} tries left`;
    }
    else if (getResults === 1 && triesLeft > 0) {
        tryAgain.classList.remove('hidden');
        output.textContent = `Your number ${userGuess} was too high`;
        triesLeftDisplay.textContent = `you have ${triesLeft} tries left`;
    }
    else {
        tryAgain.classList.add('hidden');
        gameOver.classList.remove('hidden');
        output.textContent = `You have no more tries left`;
        submitBtn.disabled = true;
    }
};

submitBtn.addEventListener('click', playGame); 


