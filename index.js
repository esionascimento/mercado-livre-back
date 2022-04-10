const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
require('dotenv').config();

const routers = require('./src/routes');

const port = process.env.PORT || 3001
const app = express();

app.get('/', (_req, res) => {
  res.send(`API no ar, na Porta ${port}`);
});

app.use(bodyParser.json());
app.use(cors())
app.use(routers);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});