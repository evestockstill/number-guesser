import { gameResults } from '../compareNum.js';

const test = QUnit.test;

test('gameResults returns correct when numbers are equal', (assert) => {
    const mySecrectNumber = 10;
    const userGuess = 10;
    const expected = 'correct';
    const result = gameResults(mySecrectNumber, userGuess);
    assert.equal(result, expected);
});
test('gameResults returns too low when user guess too low', (assert) => {
    const mySecrectNumber = 10;
    const userGuess = 9;
    const expected = 'too low';
    const result = gameResults(mySecrectNumber, userGuess);
    assert.equal(result, expected);
});
test('gameResults returns too high guess too high', (assert) => {
    const mySecrectNumber = 10;
    const userGuess = 11;
    const expected = 'too high';
    const result = gameResults(mySecrectNumber, userGuess);
    assert.equal(result, expected);
});
// export function gameResults(mySecrectNumber, userGuess) {
//     if (mySecrectNumber === userGuess) {
//         return 'correct';
//     } else if (mySecrectNumber < userGuess) {
//         return 'too high';
//     } else {
//         return 'too low';
//     }
// }