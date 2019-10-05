import { getRandomNumber } from '../compareNum.js';

const test = QUnit.test;

test('compare numbers returns 0 when numbers are equal', (assert) => {
    const randomNumber = 0;
    const expected = 0;
    const result = getRandomNumber(randomNumber);
    assert.equal(result, expected);
});
test('compare numbers returns -1 when user guess too low', (assert) => {
    const randomNumber = -1;
    const expected = -1;
    const result = getRandomNumber(randomNumber);
    assert.equal(result, expected);
});
test('compare numbers returns 1 when user guess too high', (assert) => {
    const randomNumber = 1;
    const expected = 1;
    const result = getRandomNumber(randomNumber);
    assert.equal(result, expected);
});
