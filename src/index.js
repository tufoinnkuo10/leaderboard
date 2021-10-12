import './style.css';

const scorelist = document.querySelector('.scorelist');
const names = document.querySelector('.names');
const numbers = document.querySelector('.numbers');
const submitbutton = document.querySelector('#submit-button');
const inputs = document.querySelectorAll('.names, .numbers');

const saveData = (user, data) => localStorage.setItem(user, JSON.stringify(data));
const getData = (user) => JSON.parse(localStorage.getItem(user));

inputs.forEach((e) => {
  e.addEventListener('input', () => {
    const user = {
      name: names.value,
      number: numbers.value,
    };
    saveData('libraryData', user);
  });
});

submitbutton.addEventListener('click', () => {
  const scores = document.querySelector('.list');
  scorelist.appendChild(scores);

  const nom = document.createElement('li');
  const num = document.createElement('li');
  const Break = document.createElement('br');

  const libraryData = getData('libraryData');
  if (libraryData !== null) {
    nom.innerHTML = libraryData.name;
    num.innerHTML = libraryData.number;
  }

  scores.appendChild(nom);
  scores.appendChild(num);
  scores.appendChild(Break);

  names.value = null;
  numbers.value = null;
});
