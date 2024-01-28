const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const app = express();
const ipMiddleware = require('./ipMiddleware.js');

// Aplica o Helmet
app.use(helmet());

// Configura o CORS (ajuste as opções conforme a necessidade do projeto)
app.use(cors());

// Middleware para gerenciamento de IPs
app.use(ipMiddleware);

app.get('/', (req, res) => {
  res.send('Segurança aprimorada com CORS, Helmet, e gerenciamento de IPs!');
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));