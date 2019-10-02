import compareNumbers from 'compareNum.js';

const test = QUnit.test;

test('return true if guessed number is equal to secret number', function(assert) {
    const correctNumber = 9;
    const userChoice = 9;
    const result = compareNumbers(correctNumber);
    
    //Arrange
    // Set up your parameters and expectations

    //Act 
    // Call the function you're testing and set the result to a const

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(true, false);
});
