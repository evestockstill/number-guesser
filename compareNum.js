
function compareNumbers(userGuess, correctNumber) {

    if (userGuess === correctNumber) {
        return 0;
    } else if (userGuess < correctNumber) {
        return -1;
    } else {
        return 1;
    }
}

export default compareNumbers;
// const isBlown = (volume) => {
//     return volume > 10;
// };
// export default isBlown;