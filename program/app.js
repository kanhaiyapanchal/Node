const http = require('node:http');
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  var body = 'Hii krishav kese ho';
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', body.length);
  res.end(body);
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});