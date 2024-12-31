export function renderGameBoard(player, computer, result) {
  const playerChoice = document.querySelector('.player-choice')
  playerChoice.textContent = `${player}`;

  const computerChoice = document.querySelector('.computer-choice')
  computerChoice.textContent = `${computer}`;

  const outcome = document.querySelector('.result')
  outcome.textContent = `${result}`;
}