/*
Game function 
player must guess a number between min and max
player gets a certain amount of guess
notify player of guess remaining
notify correct answer if lose
let player choose to play again
*/

//game values
let min = 1,
    max = 10,
    winningNum = getWinningNum(min, max),
    guessesLeft = 3;

//UI elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),  
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

// assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

//play again event listener
game.addEventListener('mousedown', function(e){
    if(e.target.className === 'play-again'){
        window.location.reload();
    }
});

//listen for guess
guessBtn.addEventListener('click', function(e){
    let guess = parseInt(guessInput.value);

    //validate
    if(isNaN(guess) || guess < min || guess > max){
        setMessage(`Please enter a number between ${min} and ${max}`, 'red')
    }

    //check in won
    if(guess === winningNum){
        //game over won
       
        gameOver(true, `${winningNum} is correct, YOU'RE WINNER!`);

    } else{
        //wrong number
        guessesLeft -= 1;

        if(guessesLeft === 0){
        //game over lost

        gameOver(false, `Game Over, you lost. The correct number was ${winningNum}`);
        } else {
        //game continues - answer wrong

        //change border color
        guessInput.style.borderColor = 'red';
        //clear inout
        guessInput.value = '';
        //tell user wrong number
        setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red')
        }
    }
});

//game over
function gameOver(won, msg){
    let color;
    won === true ? color = 'green' : color = 'red';

     //disable input
     guessInput.disabled = true;
     //change border color
     guessInput.style.borderColor = color;
     // set text color
     message.style.color = color;
     //set message
     setMessage(msg);

     //play again?
     guessBtn.value = 'Play Again?';
     guessBtn.className += 'play-again';
}

//get winning number
function getWinningNum(min, max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

//set message
function setMessage(msg, color){
    message.style.color = color
    message.textContent =  msg;
}