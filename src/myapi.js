const gameUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
const scoresUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/H8Ha4pTxNUzGVhKJ5o9u/scores';

const newGame = async () => {
  const newGameName = 'My new game';
  const response = await fetch(gameUrl, {
    method: 'POST',
    body: JSON.stringify({ name: newGameName }),
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  });
  const jsonData = await response.json();
  return jsonData;
};

const newUser = async (userValue, scoreValue) => {
  const response = await fetch(scoresUrl, {
    method: 'POST',
    body: JSON.stringify({
      user: userValue,
      score: scoreValue,
    }),
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  });
  const jsonData = await response.json();
  return jsonData;
};

const frameCreation = (arr, cont) => {
  let players = '';
  arr.forEach((player) => {
    players += `<div id="scores">
      <h3 class="score-name">${player.user}</h3>
      <h3 class="score-points">${player.score}</h3>
    </div>`;
  });
  cont.innerHTML = players;
};
