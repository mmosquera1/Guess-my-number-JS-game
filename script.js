'use strict';

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess); //Da 0 y tipo numero, como es falsy, lo puedo usar mas abajo en el if.

  if (!guess) {
    //I use the 0 returned by guess, and with the ! sign I convert it to true, enters the if and prints the message. It`s usually the first implemented scenario.
    displayMessage('No number! Please introduce a valid number. ');

    //When player wins.
  } else if (guess === number) {
    displayMessage('Correct number!');
    document.querySelector('.number').textContent = number;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.highscore').textContent = highscore += score;

    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    //When guess is wrong.
    if (guess !== number) {
      if (score > 1) {
        displayMessage(guess < number ? 'Too low.' : 'Too high');
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        displayMessage('Game Over.');
        document.querySelector('.score').textContent = 0;
      }
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
