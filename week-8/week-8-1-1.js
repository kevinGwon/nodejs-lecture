const express = require('express');
const app = express();

app.use((req, res) => {
  // res.writeHead(200, {
  //   'Content-Type': 'text/html',
  // });
  // res.end({
  //   name: 'Gwon',
  //   first: 'seunggon',
  // });

  // (res.writeHead, red.end를 다음과 같이 한번에 사용할 수 있다.

  // Satus 200
  res.status(200).send({
    name: 'Gwon',
    first: 'seunggon',
  });

  // Status 400
  // res.status(404).send({
  //   name: 'Gwon',
  //   first: 'seunggon',
  // });
});

app.listen(3000, () => {
  console.log('Server Starting...');
});
