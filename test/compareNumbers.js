import compareNumbers from '../compareNum.js';

const test = QUnit.test;

test('compare numbers returns 0 when numbers are equal', (assert) => {
    const correctNumber = 9;
    const userGuess = 9;
    const expected = 0;
    const result = compareNumbers(correctNumber, userGuess);
    assert.equal(result, expected);
});
test('compare numbers returns -1 when user guess too low', (assert) => {
    const correctNumber = 9;
    const userGuess = 8;
    const expected = -1;
    const result = compareNumbers(userGuess, correctNumber);
    assert.equal(result, expected);
});
test('compare numbers returns 1 when user guess too high', (assert) => {
    const userGuess = 10;
    const correctNumber = 9;
    const expected = 1;
    const result = compareNumbers(userGuess, correctNumber);
    assert.equal(result, expected);
});
// test('compare numbers returns 0 when numbers are equal', (assert) => {
//     const correctNumber = 9;
//     const result = compareNumbers(correctNumber);
//     const expected = 0;
//     assert.equal(result, expected);
// });
// test('compare numbers returns 1 when numbers too low', (assert) => {
//     const correctNumber = 9;
//     const result = compareNumbers(correctNumber);
//     const expected = 1;
//     assert.equal(result, expected);
// });
// test('compare numbers returns -1 when numbers are too high', (assert) => {
//     const correctNumber = 9;
//     const result = compareNumbers(correctNumber);
//     const expected = -1;
//     assert.equal(result, expected);
// });