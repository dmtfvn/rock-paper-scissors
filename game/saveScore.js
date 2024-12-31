export function saveScoreToStorage(gameScore) {
  localStorage.setItem('score', JSON.stringify(gameScore));
}