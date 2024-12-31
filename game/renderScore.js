export function renderGameScore(gameScore) {
  const wins = document.querySelector('.wins');
  wins.textContent = `${gameScore.wins}`;

  const losses = document.querySelector('.losses');
  losses.textContent = `${gameScore.losses}`;

  const ties = document.querySelector('.ties');
  ties.textContent = `${gameScore.ties}`;
}