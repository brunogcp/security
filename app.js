const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const ip = require('ip');

const app = express();

// Aplica o Helmet para proteger a aplicação com diversos cabeçalhos HTTP
app.use(helmet());

// Configura o CORS para permitir requisições de qualquer origem (personalize conforme necessário)
app.use(cors());

// Exemplo de middleware para logar o IP do cliente
app.use((req, res, next) => {
  console.log(`Acesso detectado de: ${req.ip} - IP local: ${ip.address()}`);
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));