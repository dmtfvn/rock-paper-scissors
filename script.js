const gameScore = getScoreFromStorage();

function saveScoreToStorage() {
  localStorage.setItem('score', JSON.stringify(gameScore));
}

function getScoreFromStorage() {
  return JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
  };
}

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

function renderGameScore() {
  const score = `
    <p>Wins: ${gameScore.wins}, Losses: ${gameScore.losses}, Ties: ${gameScore.ties}.</p>
  `;

  return score;
}

const resultInfo = document.querySelector('.js-result-info');
resultInfo.innerHTML = `
  <p>Ready to play?</p>
  ${renderGameScore()}
`;

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

  saveScoreToStorage();

  resultInfo.innerHTML = `
    <p>You picked <span>${playerMove}</span>. Computer picked <span>${computerMove}</span>. <span>${result}</span>.</p>
    ${renderGameScore()}
  `;
}

const resetButton = document.querySelector('.js-reset-button');
resetButton.addEventListener('click', () => {
  gameScore.wins = 0;
  gameScore.losses = 0;
  gameScore.ties = 0;

  saveScoreToStorage();

  resultInfo.innerHTML = `
    <p>Score was reset!</p>
    ${renderGameScore()}
  `;
});

const mainButtons = document.querySelectorAll('.js-main-button');
mainButtons.forEach((button) => {
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