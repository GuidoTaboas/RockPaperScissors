alert('The game will start! Open the console and run "game()"')

function computerPlay () {
    let choices = ['rock', 'scissors', 'paper']
    return choices[Math.floor(Math.random() * choices.length)]
}

const choicesArray = {'rock':'scissors',
                        'scissors':'paper',
                        'paper':'rock'}

function game() {
    let keepGoing = 0
    let userScore = 0
    let computerScore = 0
    while (keepGoing < 5) {
        const userChoice = prompt('What is your choice?').toLowerCase() // Ask Plasyer his selection
        const computerChoice = computerPlay()                           //Calculate computer selection
        console.log(playRound(userChoice, computerChoice))
        console.log(`Player score is ${userScore} and Computer score is ${computerScore}`)
        keepGoing++
    } 

    if (userScore > computerScore) {
        console.log('YOU WIN!!')
    } else if (userScore === computerScore) {
        console.log ('TIE!!')
    } else {
        console.log('YOU LOSE!!')
    }

    function playRound(userChoice, computerChoice) {  //compare both choices
        if (userChoice === computerChoice ){
            return `Tie! You both chose ${userChoice}`
        } else if (userChoice === "rock" && computerChoice === 'scissors') {
            userScore++
            return "You win! Rock beats Scissor"
        } else if (userChoice === "rock" && computerChoice === 'paper') {
            computerScore++
            return "You lose! Paper beats Rock"
        } else if (userChoice === "scissors" && computerChoice === 'paper') {
            userScore++
            return "You win! Scissors beats Paper"
        } else if (userChoice === "scissors" && computerChoice === 'rock') {
            computerScore++
            return "You lose! Rock beats Scissors"
        } else if (userChoice === "paper" && computerChoice === 'rock' ) {
            userScore++
            return "You win! Paper beats Rock"
        } else if (userChoice === "paper" && computerChoice === 'scissors') {
            computerScore++
            return "You lose! Scissors beats Paper"
        }
    }
}

