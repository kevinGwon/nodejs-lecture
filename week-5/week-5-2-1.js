/**
 * Request Status
 *
 * 100 - 조건부응답
 * 200 - 성공
 * 300 - 리다이렉션 완료
 * 400 - 요청오류
 * 500 - 서버오류
 */

/**
 * Content-type - MiMe Type
 * https://developer.mozilla.org/ko/docs/Web/HTTP/Basics_of_HTTP/MIME_types
 */

const http = require('http');

http
  .createServer((req, res) => {
    res.writeHead(200, {
      'Content-type': 'text/html',
    });
    res.end(`<h1>Hello Kevin</h1>`);
  })
  .listen(3000, () => {
    console.log('Server running : http://127.0.0.1:3000/');
  });
