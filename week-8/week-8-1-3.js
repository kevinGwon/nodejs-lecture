const express = require('express');
const app = express();

app.use('/page/:number', (req, res) => {
  res.send(`<h1>현재 ${req.params.number} 페이지 입니다.</h1>`);
});

app.listen(3000, () => {
  console.log('Server Starting...');
});
