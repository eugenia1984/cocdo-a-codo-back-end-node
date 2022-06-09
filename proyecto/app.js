require('dotenv').config();

const express = require('express');
const { send } = require('express/lib/response');
const app = express();


app.get('/', (req, res) => {
  res.send(`<h1>Hola Express</h1>`);
});

app.use((req, res, next) => {
  res.status(404).send('Not Found')
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`http://localhost:${port}`));