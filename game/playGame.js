import { generateComputerMove } from './computerMove.js';

import { saveScoreToStorage } from './saveScore.js';

import { renderGameBoard } from './renderBoard.js';
import { renderGameScore } from './renderScore.js';

export function playGame(playerMove, gameScore) {
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

  saveScoreToStorage(gameScore);

  renderGameBoard(playerMove, computerMove, result);
  renderGameScore(gameScore);
}