let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById('userScore');
const compScore_span = document.getElementById('compScore');
const board_div = document.querySelector('.board');
const result_div = document.querySelector('#result > p');
const rock_option_div = document.getElementById('rock');
const paper_option_div = document.getElementById('paper');
const scissor_option_div = document.getElementById('scissor');

let win = (userChoice, computerChoice) => {
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    if (userChoice === 'paper')
        result_div.innerHTML = `${userChoice} covers ${computerChoice}, you win! 🔥`
    else if (userChoice === 'scissor')
        result_div.innerHTML = `${userChoice} cuts ${computerChoice}, you win! 🔥`
    else
        result_div.innerHTML = `${userChoice} breaks ${computerChoice}, you win! 🔥`        
}

let lose = (userChoice, computerChoice) => {
    compScore++;
    compScore_span.innerHTML = compScore;
    userScore_span.innerHTML = userScore;
    if (computerChoice === 'paper')
        result_div.innerHTML = `${computerChoice} covers ${userChoice}, computer wins!`
    else if (computerChoice === 'scissor')
        result_div.innerHTML = `${computerChoice} cuts ${userChoice}, computer wins!`
    else
        result_div.innerHTML = `${computerChoice} breaks ${userChoice}, computer wins!`
}

let draw = () => {
    result_div.innerHTML = 'DRAW!';
}

// random computer choice 
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissor'];
    const computerChoice = Math.floor(Math.random() * 3);
    return choices[computerChoice];
}


const game = (userChoice) => {
    const computerChoice = getComputerChoice();

    // switch case to check who wins
    switch(userChoice + " " + computerChoice) {
        case "rock scissor":
        case "paper rock":
        case "scissor paper":
            console.log('Computer choses: ' + computerChoice);
            win(userChoice, computerChoice);
            break;
        case "scissor rock":
        case "rock paper":
        case "paper scissor":
            console.log('Computer choses: ' + computerChoice);
            lose(userChoice, computerChoice);
            break;
        case "scissor scissor":
        case "rock rock":
        case "paper paper":
            console.log('Computer choses: ' + computerChoice);
            draw();
            break;
        
    }
}

function mainGame() {
    rock_option_div.addEventListener("click", () => {
        game('rock');
    });

    paper_option_div.addEventListener('click', () => {
        game('paper');
    });

    scissor_option_div.addEventListener('click', () => {
        game('scissor');
    });
}

mainGame();