let keepGoing = 0;
let userScore = 0;
let computerScore = 0;
let winner = false

const ROCK = document.querySelector('#rock');
const PAPER = document.querySelector('#paper');
const SCISSORS = document.querySelector('#scissors');
const BUTTONS = document.querySelectorAll('.button');
const IMG_DISPLAY = document.querySelector('.imageDisplay')
const MESSAGE_BOX = document.querySelector('.messageBox');

const IMG_ROCK = new Image()
IMG_ROCK.src = 'images/rock.png'
IMG_ROCK.id = 'rock'

const IMG_PAPER = new Image()
IMG_PAPER.src = 'images/paper.png'
IMG_PAPER.id = 'paper'

const IMG_SCISSORS = new Image()
IMG_SCISSORS.src = 'images/scissors.png'
IMG_SCISSORS.id = 'scissors'

const CHOICES_ARRAY = {'rock':'scissors',
                        'scissors':'paper',
                        'paper':'rock'};

function chooseImg (COMPUTER_CHOICE) {
    if (COMPUTER_CHOICE === 'rock')  {
        var comp_img_choice = IMG_ROCK
    } else if (COMPUTER_CHOICE === 'paper') {
        var comp_img_choice = IMG_PAPER
    } else {
        var comp_img_choice = IMG_SCISSORS
    }  
    return comp_img_choice
}          

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

function playRound(USER_CHOICE, COMPUTER_CHOICE) {  //compare both choices
    if (USER_CHOICE === COMPUTER_CHOICE ){
        winner = false
        return `Tie! You both chose ${USER_CHOICE}`
    } else if (COMPUTER_CHOICE === CHOICES_ARRAY[USER_CHOICE]) {
        winner = 'Player'
        keepGoing++ 
        userScore++
        return `You won! ${USER_CHOICE} beats ${COMPUTER_CHOICE}`
    } else {
        winner = 'Computer'
        keepGoing++
        computerScore++
        return `You lost! ${COMPUTER_CHOICE} beats ${USER_CHOICE}`
    }
}

function historyMessage(USER_CHOICE, COMPUTER_CHOICE) {
    const table = document.querySelector('.tableBody')
    const ROW = document.createElement('tr')
    let cell1 = ROW.insertCell()
    let cell2 = ROW.insertCell()
    let cell3 = ROW.insertCell()
    if (winner){
        cell1.textContent = USER_CHOICE
        cell2.textContent = COMPUTER_CHOICE
        cell3.textContent = winner
    } else {cell1.textContent = USER_CHOICE
        cell2.textContent = COMPUTER_CHOICE
        cell3.textContent = "Tie"
    }
    table.appendChild(ROW)
    winner = false
}

function updateIMG(IMG_DISPLAY, COMPUTER_CHOICE) {
    IMG_DISPLAY.innerHTML = '';
    IMG_DISPLAY.appendChild(chooseImg(COMPUTER_CHOICE))
}

const LOG_BUTTON = document.getElementsByClassName('logButton')
console.log(LOG_BUTTON)
for (let i = 0; i < LOG_BUTTON.length; i++) {
    LOG_BUTTON[i].addEventListener('click', function() {
        let logAtt = document.getElementsByClassName('classChange')[0]
        if (logAtt.style.visibility === 'hidden') {
            logAtt.style.visibility = 'visible'
        } else {
            logAtt.style.visibility = 'hidden'
        }
    })
}

for (let i = 0; i < BUTTONS.length; i++) {
    BUTTONS[i].addEventListener('click', function(e) {
            const COMPUTER_CHOICE = computerPlay();  //Calculate computer selection 
            const USER_CHOICE = e.target.id;
            updateIMG(IMG_DISPLAY, COMPUTER_CHOICE);
            MESSAGE_BOX.textContent = `${playRound(USER_CHOICE, COMPUTER_CHOICE)}\n` +
            `Player score is ${userScore} and Computer score is ${computerScore}`
            historyMessage(USER_CHOICE, COMPUTER_CHOICE)
            if (keepGoing === 5) {
                MESSAGE_BOX.textContent = `${checkScore(userScore, computerScore)}`;
                userScore = 0;
                computerScore = 0;
                keepGoing = 0;
            } 
    })
}


