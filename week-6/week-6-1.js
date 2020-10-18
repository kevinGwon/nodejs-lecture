const http = require('http');
const ejs = require('ejs');
const fs = require('fs');

http
  .createServer((req, res) => {
    fs.readFile('index.ejs', 'utf-8', (error, data) => {
      const output = ejs.render(data, {
        title: '웹서버 프로그래밍',
        p: '너무 졸리다..',
      });
      res.writeHead(200, {
        'Content-type': 'text/html',
      });
      res.end(output);
    });
  })
  .listen(3000);
