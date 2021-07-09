//alert('The game will start! Open the console and run "game()"')

let keepGoing = 0;
let userScore = 0;
let computerScore = 0;
const ROCK = document.querySelector('#rock');
const PAPER = document.querySelector('#paper');
const SCISSORS = document.querySelector('#scissors');
const BUTTONS = document.querySelectorAll('.button');
const CHOICES_ARRAY = {'rock':'scissors',
                        'scissors':'paper',
                        'paper':'rock'};

function computerPlay () {
    let choices = ['rock', 'scissors', 'paper'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function checkScore (userScore, computerScore) {
    if (userScore > computerScore) {
        return('YOU WIN!!')
    } else if (userScore === computerScore) {
        return('TIE!!')
    } else {
        return('YOU LOSE!!')
    }
}

function playRound(userChoice, computerChoice) {  //compare both choices
    if (userChoice === computerChoice ){
        return `Tie! You both chose ${userChoice}`
    } else if (computerChoice === CHOICES_ARRAY[userChoice]) {
        keepGoing++ 
        userScore++
        return `You won! ${userChoice} beats ${computerChoice}`
    } else {
        keepGoing++
        computerScore++
        return `You lost! ${computerChoice} beats ${userChoice}`
    }
}

for (let i = 0; i < BUTTONS.length; i++) {
    BUTTONS[i].addEventListener('click', function(e) {
            const computerChoice = computerPlay()  //Calculate computer selection 
            const userChoice = e.target.id;
            const MESSAGE_BOX = document.querySelector('.messageBox');
            MESSAGE_BOX.textContent = `${playRound(userChoice, computerChoice)}\nPlayer score is ${userScore} and Computer score is ${computerScore}`
            if (keepGoing === 5) {
                MESSAGE_BOX.textContent = `${checkScore(userScore, computerScore)}`;
                userScore = 0;
                computerScore = 0;
                keepGoing = 0;
            }
           
    })
}
