// index.js
const http = require('http');

const hostname = '0.0.0.0'; // Usamos 0.0.0.0 para que o contêiner seja acessível externamente
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World!\n');
});

server.listen(port, hostname, () => {
  console.log(`Servidor rodando em http://<span class="math-inline">\{hostname\}\:</span>{port}/`);
});