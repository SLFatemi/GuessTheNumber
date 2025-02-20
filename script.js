'use strict';

let highscore = 0;
let score = 20;
let buttonEl = document.querySelector('.check');
let againEl = document.querySelector('.again');

let randomNumber = Math.trunc(Math.random() * 20) + 1;
buttonEl.addEventListener('click', function() {
  if (score < 1) {
    displayMessage('💥 You Lost!');
  } else {
    const numberEl = Number(document.querySelector('.guess').value);
    if (!numberEl) {
      displayMessage('⛔ No Number');
    } else if (numberEl !== randomNumber) {
      minusscore();
      numberEl > randomNumber ? document.querySelector('.message').textContent = '📈 Too high!' :
        displayMessage('📉 Too low!');
    } else {
      correctGuess();
    }
  }
});

againEl.addEventListener('click', function() {
  again();
});

const displayMessage = function(message) {
  document.querySelector('.message').textContent = message;
};

function again() {
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  displayMessage('Start guessing...');
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
}

function minusscore() {
  score--;
  document.querySelector('.score').textContent = score;
}

function correctGuess() {
  document.querySelector('.number').textContent = String(randomNumber);
  document.querySelector('.number').style.width = '30rem';
  document.querySelector('body').style.backgroundColor = '#60b347';
  displayMessage('🎉 Correct Number!');
  if (score > highscore) {
    highscore = score;
    document.querySelector('.highscore').textContent = score;
  }
}
