function getScoreFromStorage() {
  return JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
  };
}

const gameScore = getScoreFromStorage();

function saveScoreToStorage() {
  localStorage.setItem('score', JSON.stringify(gameScore));
}

const gameBoard = document.querySelector('.js-game-board');

function renderGameBoard(player, computer, result) {
  gameBoard.innerHTML = `
    <div class="player-result-computer">
      <div class="avatar">
        <img src="icons/player.png">
        <p>${player}</p>
      </div>
      <p class="result">${result}</p>
      <div class="avatar">
        <img src="icons/computer.png">
        <p>${computer}</p>
      </div>
    </div>
  `;
}
renderGameBoard('', '', '');

function renderGameScore() {
  const score = `
    <p>Wins ${gameScore.wins} ~ Losses ${gameScore.losses} ~ Ties ${gameScore.ties}</p>
  `;

  return score;
}

const gameResult = document.querySelector('.js-game-result');
gameResult.innerHTML = `${renderGameScore()}`;

function generateComputerMove() {
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

function playGame(playerMove) {
  const computerMove = generateComputerMove();

  let result = '';

  if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'Tie';
    } else if (computerMove === 'paper') {
      result = 'You Lose';
    } else if (computerMove === 'scissors') {
      result = 'You Win';
    }
  } else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'You Win';
    } else if (computerMove === 'paper') {
      result = 'Tie';
    } else if (computerMove === 'scissors') {
      result = 'You Lose';
    }
  } else if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      result = 'You Lose';
    } else if (computerMove === 'paper') {
      result = 'You Win';
    } else if (computerMove === 'scissors') {
      result = 'Tie';
    }
  }

  if (result === 'You Win') {
    gameScore.wins++;
  } else if (result === 'You Lose') {
    gameScore.losses++;
  } else if (result === 'Tie') {
    gameScore.ties++;
  }

  saveScoreToStorage();
  renderGameBoard(playerMove, computerMove, result);

  gameResult.innerHTML = `${renderGameScore()}`;
}

const resetButton = document.querySelector('.js-reset-button');
resetButton.addEventListener('click', () => {
  gameScore.wins = 0;
  gameScore.losses = 0;
  gameScore.ties = 0;

  saveScoreToStorage();
  renderGameBoard('', '', '');

  gameResult.innerHTML = `${renderGameScore()}`;
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