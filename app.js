import compareNumbers from '../compareNumbers.js';

const inputNum = document.getElementById('input-number');
const submitBtn = document.getElementById('btn');
const output = document.getElementById('output');
const triesLeftDisplay = document.getElementById('tries-left');
const youWin = document.getElementById('you-win');
const tryAgain = document.getElementById('try-again');
const gameOver = document.getElementById('game-over');
let triesLeft = 4;
// let userGuess = ('');
let correctNumber = 9;

submitBtn.addEventListener('click', () => {
    triesLeft--;
    triesLeftDisplay.textContent = triesLeft;
    const userGuess = parseInt(inputNum.value);
    const result = compareNumbers(userGuess, correctNumber);

    if (result === correctNumber) {
        tryAgain.classList.add('hidden');
        youWin.classList.remove('hidden');
        output.textContent = `Your number ${userGuess} was correct`;
        userGuess.disabled = true;
    } 
    else if (result > correctNumber && triesLeft < 0) {
        tryAgain.classList.remove('hidden');
        output.textContent = `Your number ${userGuess} was too low`;
    } 
    else if (result < correctNumber && triesLeft < 0) {
        tryAgain.classList.remove('hidden');
        output.textContent = `Your number ${userGuess} was too high`;

    } 
    else (result !== correctNumber && triesLeft === 0); 
    tryAgain.classList.add('hidden');
    gameOver.classList.remove('hidden');
    output.textContent = `You have no more tries left`;
    userGuess.disabled = true;
});












// document.getElementById('btn').onclick = () => {
//     if (secretNumber === guess) {
//         document.getElementById('output').innerHTML = `You got it! ${guess} is the correct guess!`;
//     } else if (secretNumber > guess) {
//         document.getElementById('output').innerHTML = `Try again ${guess} is too low.`;
//         triesLeft--;
//     } else if (secretNumber < guess) {
//         document.getElementById('output').innerHTML = `Oh no ${guess} is too high`;
//         triesLeft--;
//     }
// };