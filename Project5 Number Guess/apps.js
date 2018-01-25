/**
* Game function:
* player must guess anumber between a min and max
* player gets a certain amount of guesses
* notify player of guesses remaining
* notify the player of the correct answer if loose
* let player choose to play again
*/

// Game values
let min = 1,
    max = 10,
    winningNum = getRandomNumber(min, max),
    guessesLeft = 3;

//UI elements
const game = document.querySelector('#game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-input'),
    message = document.querySelector('.message');

// Assign UI min and max
/** assigning the text of the min and max to a variable**/
minNum.textContent = min;
maxNum.textContent = max;

// Play again event listener
game.addEventListener('mousedown', function(e) {
    if(e.target.className === 'play-again'){
        window.location.reload();
    }
});

// Event Listener
guessBtn.addEventListener('click', function() {
    let guess = parseInt(guessInput.value);

    //validate input
    if(isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }

    // Check if won
    if(guess === winningNum) {
        gameOver(true, `${winningNum} is correct, YOU WIN!`);
    } else {
        //wrong Number
        guessesLeft -= 1;

        if (guessesLeft === 0) {
            //Game over - lost
            gameOver(false, `${winningNum} is the correct answer, YOU LOST!`)
        } else {
            // game continues - answer wrong
            //change border color
            guessInput.style.borderColor = 'red';

            // clear input
            guessInput.value = '';

            // Tell user its the wrong number
            setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');
        }
    }
});

// Game over
function gameOver(won, msg) {
    let color;
    won === true ? color = 'green' : color = 'red';
    // set text color
    message.style.color = color;

    //disable if correct
    guessInput.disabled = true;
    //change border color
    guessInput.style.borderColor = color;
    //set message you win
    setMessage(msg);

    // play again?
    guessBtn.value = 'Play again'
    guessBtn.className += 'play-again';
}

//setting up a message
function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}

// Get winning random number
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max-min + 1) + min);
}
