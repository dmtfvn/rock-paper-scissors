let computerMove = '';

function pickComputerMove() {
  const randomNumber = Math.random();

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'scissors';
  }
}

const gameButtons = document.querySelectorAll('.js-button');
gameButtons.forEach((button) => {
  button.addEventListener('mousedown', () => {
    button.classList.add('active');

    const playerMove = button.textContent;

    let result = '';

    if (playerMove === 'R') {
      pickComputerMove();

      if (computerMove === 'rock') {
        result = 'Tie';
      } else if (computerMove === 'paper') {
        result = 'You lose';
      } else if (computerMove === 'scissors') {
        result = 'You Win';
      }

      console.log(`You picked rock. Computer picked ${computerMove}. ${result}.`)

    } else if (playerMove === 'P') {
      pickComputerMove();

      if (computerMove === 'rock') {
        result = 'You Win';
      } else if (computerMove === 'paper') {
        result = 'Tie';
      } else if (computerMove === 'scissors') {
        result = 'You lose';
      }

      console.log(`You picked paper. Computer picked ${computerMove}. ${result}.`)

    } else if (playerMove === 'S') {
      pickComputerMove();

      if (computerMove === 'rock') {
        result = 'You lose';
      } else if (computerMove === 'paper') {
        result = 'You Win';
      } else if (computerMove === 'scissors') {
        result = 'Tie';
      }

      console.log(`You picked scissors. Computer picked ${computerMove}. ${result}.`)
    }
  });

  button.addEventListener('mouseup', () => {
    button.classList.remove('active');
  });
});