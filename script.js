let displayedScore = document.getElementById('score');
let computerScore = 0
let score = 0;
displayedScore.innerHTML = `score: ${score}`;
const choices = ['rock', 'paper', 'scissors'];

function randomChoice(){
    let randomIdx = Math.floor(Math.random() * choices.length);
    return choices[randomIdx];
}

function playerSelect(playerChoice){
    let computerChoice = randomChoice();
    evaluate(playerChoice, computerChoice);
}

function evaluate(playerChoice, computerChoice){
    const computerResult = document.getElementById('computer-result');
    if(playerChoice === 'rock' && computerChoice === 'paper'){
        computerResult.innerHTML = `The computer chose paper you lost`;
        computerScore += 1;
    }else if (playerChoice === 'rock' && computerChoice === 'scissors'){
        computerResult.innerHTML = `The computer chose scissors you won`;
        score +=1;
    }else if(playerChoice === 'scissors' && computerChoice === 'paper'){
        computerResult.innerHTML = `The computer chose paper you won`;
        score +=1;
    }else if (playerChoice === 'scissors' && computerChoice === 'rock'){
        computerResult.innerHTML = `The computer chose rock you lost`;
        computerScore +=1;
    }else if (playerChoice === 'paper' && computerChoice === 'rock'){
        computerResult.innerHTML = `The computer chose rock you won`;
        score +=1;
    }else if(playerChoice === 'paper' && computerChoice === 'scissors'){
        computerResult.innerHTML = `The computer chose scissors you lost`;
        computerScore += 1;
    }else{
        computerResult.innerHTML = `It's a Tie!`
    }
    displayedScore.innerHTML = `score: ${score}`;
}

function reset(){
    score = 0;
    displayedScore.innerHTML = `score: ${score}`;
    const computerResult = document.getElementById('computer-result');
    computerResult.innerHTML = '';
}
