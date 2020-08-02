const http = require('http');
const app = require('./src/app');
const ip = require('ip');

require('dotenv').config();

const server = http.Server(app);
const port = 8080;

server.listen(port, () => {
  console.log(`Serving from ${ip.address()}:${port}`);
});
