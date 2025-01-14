import { saveScoreToStorage } from './game/saveScore.js';

import { renderGameBoard } from './game/renderBoard.js';
import { renderGameScore } from './game/renderScore.js';

import { playGame } from './game/playGame.js';

const data = localStorage.getItem('score');

const player = document.querySelector('.player-choice');

const gameScore = JSON.parse(data) || { wins: 0, losses: 0, ties: 0 };

window.addEventListener('DOMContentLoaded', () => {
  renderGameScore(gameScore);
});

const gameBtns = document.querySelectorAll('.game-btns>input');
gameBtns.forEach(elem => {
  elem.addEventListener('mousedown', () => {
    elem.classList.add('active');

    const btn = elem.value;

    if (btn === 'R') {
      playGame('rock', gameScore);
    } else if (btn === 'P') {
      playGame('paper', gameScore);
    } else if (btn === 'S') {
      playGame('scissors', gameScore);
    }

    player.style.color = 'hsl(240, 20%, 97%)';
  });

  window.addEventListener('mouseup', () => {
    elem.classList.remove('active');

    player.style.color = 'hsl(0, 1%, 20%)';
  });

  elem.addEventListener('touchstart', () => {
    elem.classList.add('active');
  });

  window.addEventListener('touchend', () => {
    elem.classList.remove('active');
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