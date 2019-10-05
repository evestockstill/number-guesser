export function getRandomNumber(randomNumber) {
    if (randomNumber === 0) {
        return 0;
    } else if (randomNumber === -1) {
        return -1;
    } else {
        return 1;
    }
}
export function gameResults(mySecrectNumber, userGuess) {
    if (mySecrectNumber === userGuess) {
        return 0;
    } else if (mySecrectNumber < userGuess) {
        return -1;
    } else {
        return 1;
    }
}

export default function getSecrectNumber() {
    const randomNumber = Math.floor(Math.random() * 20) + 1 ;
    const mySecretNumber = getRandomNumber(randomNumber);
    return mySecretNumber;
}










