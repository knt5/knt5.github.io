const express = require(`express`);
const cors = require(`cors`);
const swimming = require(`../../public/api/swimming.json`);

//=============================================================================
// Settings
const port = 8081;

//=============================================================================
const app = express()
app.use(cors());

app.get('/api/swimming.json', (request, response) => {
	setTimeout(() => response.send(swimming), 10000);
});

app.listen(port);

console.log(`listening: ${port}`);
