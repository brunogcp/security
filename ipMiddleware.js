const ip = require('ip');

// Lista de IPs permitidos para simplificação. Em um cenário real, isso poderia ser dinâmico ou armazenado em um banco de dados.
const allowedIps = ['192.168.1.1', '127.0.0.1'];
const blockedIps = ['192.168.1.100']; // Exemplo de IP bloqueado

const ipMiddleware = (req, res, next) => {
  const clientIp = ip.address() || req.ip;

  console.log(`Acesso tentado do IP: ${clientIp}`);

  // Bloqueia o IP se estiver na lista de bloqueados
  if (blockedIps.includes(clientIp)) {
    return res.status(403).send('Acesso negado');
  }

  // Permite o acesso apenas se o IP estiver na lista de permitidos
  if (!allowedIps.includes(clientIp)) {
    return res.status(403).send('Seu IP não está na lista de permitidos para acesso.');
  }

  next(); // Continua para o próximo middleware se o IP for permitido
};

module.exports = ipMiddleware;