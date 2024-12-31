import { saveScoreToStorage } from './game/saveScore.js';

import { renderGameBoard } from './game/renderBoard.js';
import { renderGameScore } from './game/renderScore.js';

import { playGame } from './game/playGame.js';

const data = localStorage.getItem('score');

const gameScore = JSON.parse(data) || { wins: 0, losses: 0, ties: 0 };

window.addEventListener('DOMContentLoaded', () => {
  renderGameScore(gameScore);
});

const gameBtns = document.querySelectorAll('.game-btns>input');
gameBtns.forEach(el => {
  el.addEventListener('mousedown', () => {
    el.classList.add('active');

    const player = el.value;

    if (player === 'R') {
      playGame('rock', gameScore);
    } else if (player === 'P') {
      playGame('paper', gameScore);
    } else if (player === 'S') {
      playGame('scissors', gameScore);
    }
  });

  el.addEventListener('mouseup', () => {
    el.classList.remove('active');
  });
});

const resetBtn = document.querySelector('main>input');
resetBtn.addEventListener('click', () => {
  gameScore.wins = 0;
  gameScore.losses = 0;
  gameScore.ties = 0;

  saveScoreToStorage(gameScore);

  renderGameBoard('', '', '');
  renderGameScore(gameScore);
});