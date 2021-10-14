import './style.css';
import { addScore, getScores } from './myapi.js';

const userValue = document.querySelector('#name');
const scoreValue = document.querySelector('#score');
const points = document.querySelector('#points');
const refresh = document.querySelector('#refresh');
const submit = document.querySelector('#submit');

submit.addEventListener('click', (e) => {
  e.preventDefault();
  if (userValue.value === '' || scoreValue.value === '') {
    userValue.setCustomValidity('name and score is empty');
    userValue.reportValidity();
  } else if (scoreValue.value > 500) {
    scoreValue.setCustomValidity('highest score is 500');
    scoreValue.reportValidity();
  } else {
    addScore(userValue.value, scoreValue.value);
    getScores(points);
    userValue.value = '';
    scoreValue.value = '';
  }
});

refresh.addEventListener('click', () => {
  window.location.reload();
});

getScores(points);
