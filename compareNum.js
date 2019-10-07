
export function gameResults(mySecrectNumber, userGuess) {
    if (mySecrectNumber === userGuess) {
        return 'correct';
    } else if (mySecrectNumber < userGuess) {
        return 'too high';
    } else if (mySecrectNumber > userGuess) {
        return 'too low';
    }
}

export default function getSecrectNumber() {
    const randomNumber = Math.floor(Math.random() * 20) + 1 ;
    return randomNumber;

}










