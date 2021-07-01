
alert('The game will start! Open the console and run "game()"')

function computerPlay () {
    let choices = ['rock', 'scissors', 'paper']
    return choices[Math.floor(Math.random() * choices.length)]
}


function game() {
    let keepGoing = 0
    let userScore = 0
    let computerScore = 0
    const choicesArray = {'rock':'scissors',
                        'scissors':'paper',
                        'paper':'rock'}
    
    while (keepGoing < 5) {
        let userChoice = prompt('What is your choice?').toLowerCase()
        while  ( ! (userChoice in choicesArray)) {
            userChoice = prompt('Tha choice is not valid! Choose Rock, Scissor or Paper').toLowerCase()
        }   
                                                                
        const computerChoice = computerPlay()                               //Calculate computer selection// Ask Plasyer his selection
        console.log(playRound(userChoice, computerChoice))
        console.log(`Player score is ${userScore} and Computer score is ${computerScore}`)
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
        } else if (computerChoice === choicesArray[userChoice]) {
            keepGoing++ 
            userScore++
            return `You won! ${userChoice} beats ${computerChoice}`
        } else {
            keepGoing++
            computerScore++
            return `You lost! ${computerChoice} beats ${userChoice}`
        }
    }
}
