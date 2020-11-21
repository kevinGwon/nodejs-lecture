const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/login', (req, res) => {
  fs.readFile('login.html', (error, data) => {
    res.send(data.toString());
  });
});

app.post('/login', (req, res) => {
  const id = req.body.id;
  const pwd = req.body.pwd;
  console.log(req.body);
  console.log(id, pwd);
  if (id === 'kevin' && pwd === '1234') {
    res.send('<h1>Success</h1>');
  } else {
    res.redirect('/login');
  }
});

app.listen(3000, () => {
  console.log('Server Starting...');
});
