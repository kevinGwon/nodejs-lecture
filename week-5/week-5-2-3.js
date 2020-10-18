const fs = require('fs');
const http = require('http');

http
  .createServer((req, res) => {
    const cookie = req.headers.cookie;
    let data = null;
    if (cookie) {
      data = cookie.split(';').map((_data) => {
        const el = _data.split('=');
        return {
          key: el[0],
          val: el[1],
        };
      });
    } else {
      res.writeHead(200, {
        'Content-type': 'text/html',
        'Set-Cookie': ['breakfast=null', 'name=kevin', 'age=31'],
      });
    }
    res.end(`<p>${JSON.stringify(data)}</p>`);
  })
  .listen(3000, () => {
    console.log('Server running : http://127.0.0.1:3000/');
  });
