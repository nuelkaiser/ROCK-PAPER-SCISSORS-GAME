const rulesButton = document.querySelector('.rules');
const closeModal = document.querySelector('.modal-container');
const closeIcon = document.querySelector('.close-svg');
const options = document.querySelector('.game-btns');
const contest = document.querySelector('.contest');
const play = document.querySelector('.play');
const myChoice = document.getElementById('my-choice');
const cpuChoice = document.getElementById('cpu-choice')


//EVENT LISTENERS
rulesButton.addEventListener('click', modalOpen);
closeIcon.addEventListener('click', isCloseModal);


//SCORE
let Score = 0


//DICTIONARY 
choices =   {
    'rock': '/rock-paper-scissors-master/images/icon-rock.svg',
    'scissors': '/rock-paper-scissors-master/images/icon-scissors.svg',
    'paper': '/rock-paper-scissors-master/images/icon-paper.svg',
}

//FUNCTIONS
function modalOpen () {
    closeModal.style.display = 'block';
}

function isCloseModal () {
    closeModal.style.display = 'none'   
}

game = (myPick) => {
    console.log(myPick)
    options.style.display = 'none'
    contest.style.display = 'flex'


    myChoice.src= choices[myPick]  

    let comp = computer()

    
  refree(myPick, comp)
}

computer = ()  => {
    let cpuOptions = ['rock','paper','scissors'];
    let cpuPick = cpuOptions[Math.floor(Math.random() * 3)]
    console.log(cpuPick)
    cpuChoice.src= choices[cpuPick]
    return cpuPick
}

playAgain = () => {
    options.style.display = 'flex'
    contest.style.display = 'none'
}

const refree = (user, house) => {
    if (user == 'paper' && house == 'scissors') {
        winner(`YOU LOSE`)
    }
    if (user == 'paper' && house == 'rock') {
        winner(`YOU WIN`)
        score(Score + 1)
    }
    if (user == 'paper' && house == 'paper') {
        winner(`IT'S A TIE`)
    }
    if (user == 'rock' && house == 'scissors') {
        winner(`YOU WIN`)
        score(Score + 1)
    }
    if (user == 'rock' && house == 'paper') {
        winner(`YOU LOSE`)
    }
    if (user == 'rock' && house == 'rock') {
        winner(`IT'S A TIE`)
    }
    if (user == 'scissors' && house == 'scissors') {
        winner(`IT'S A TIE`)
    }
    if (user == 'scissors' && house == 'rock') {
        winner(`YOU LOSE`)
    }
    if (user == 'scissors' && house == 'paper') {
        winner(`YOU WIN`)
        score(Score + 1)
    }
}

const  winner = (decision) => {
    console.log(decision)
    document.querySelector('.winner h2').innerText = decision;
    document.querySelector('.winner h2').style.fontSize = '18px'
}

const score = (increase) => {
    console.log(increase)
    Score = increase;
    document.querySelector('.game-point h1').innerText = increase
}