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