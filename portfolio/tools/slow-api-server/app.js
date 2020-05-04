const express = require(`express`);
const swimming = require(`../../public/api/swimming.json`);

//=============================================================================
// Settings
const port = 8081;

//=============================================================================
const app = express()

app.get('/api/swimming.json', (request, response) => {
	setTimeout(() => response.send(swimming), 20000);
});

app.listen(port);

console.log(`listening: ${port}`);
