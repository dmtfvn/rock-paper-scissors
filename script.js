const gameScore = {
  wins: 0,
  losses: 0,
  ties: 0
};

function pickComputerMove() {
  const randomNumber = Math.random();

  let computerMove = '';

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'scissors';
  }

  return computerMove;
}

const curResult = document.querySelector('.js-cur-result');
const finalResult = document.querySelector('.js-final-result');

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = '';

  if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'Tie';
    } else if (computerMove === 'paper') {
      result = 'You lose';
    } else if (computerMove === 'scissors') {
      result = 'You Win';
    }
  } else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'You Win';
    } else if (computerMove === 'paper') {
      result = 'Tie';
    } else if (computerMove === 'scissors') {
      result = 'You lose';
    }
  } else if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      result = 'You lose';
    } else if (computerMove === 'paper') {
      result = 'You Win';
    } else if (computerMove === 'scissors') {
      result = 'Tie';
    }
  }

  if (result === 'You Win') {
    gameScore.wins++;
  } else if (result === 'You lose') {
    gameScore.losses++;
  } else if (result === 'Tie') {
    gameScore.ties++;
  }

  curResult.textContent = `
    You picked ${playerMove}. Computer picked ${computerMove}. ${result}.
  `;

  finalResult.textContent = `
    Wins: ${gameScore.wins}, Losses: ${gameScore.losses}, Ties: ${gameScore.ties}.
  `;
}

const reset = document.querySelector('.js-reset');
reset.addEventListener('click', () => {
  gameScore.wins = 0;
  gameScore.losses = 0;
  gameScore.ties = 0;
});

const gameButtons = document.querySelectorAll('.js-button');
gameButtons.forEach((button) => {
  button.addEventListener('mousedown', () => {
    button.classList.add('active');

    const player = button.textContent;

    if (player === 'R') {
      playGame('rock');
    } else if (player === 'P') {
      playGame('paper');
    } else if (player === 'S') {
      playGame('scissors');
    }
  });

  button.addEventListener('mouseup', () => {
    button.classList.remove('active');
  });
});