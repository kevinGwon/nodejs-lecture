const fs = require('fs');
const http = require('http');

http
  .createServer((req, res) => {
    // HTML
    // fs.readFile('./assets/index.html', (err, file) => {
    //   res.writeHead(200, {
    //     'Content-type': 'text/html',
    //   });
    //   res.end(file);
    // });

    // Cookie
    const date = new Date();
    date.setDate(date.getDate() + 7);

    res.writeHead(200, {
      'Content-type': 'text/html',
      'Set-Cookie': [`breakfast=toast;Expires=${date.toUTCString()}`],
    });
    res.end('<p>Set Cookie</p>');
  })
  .listen(3000, () => {
    console.log('Server running : http://127.0.0.1:3000/');
  });
