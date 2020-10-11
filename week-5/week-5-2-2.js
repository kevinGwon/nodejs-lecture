const fs = require('fs');
const http = require('http');

http
  .createServer((req, res) => {
    fs.readFile('./assets/index.html', (err, file) => {
      res.writeHead(200, {
        'Content-type': 'text/html',
      });
      res.end(file);
    });
  })
  .listen(3000, () => {
    console.log('Server running : http://127.0.0.1:3000/');
  });
