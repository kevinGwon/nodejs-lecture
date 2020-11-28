const express = require('express');
const bodyParser = require('body-parser');
const { response } = require('express');
const app = express();

app.listen(3000, () => {
  console.log('Server Starting...');
});

app.use(bodyParser.urlencoded({ extended: false }));

const users = {};

app.get('/user', (req, res) => {
  res.send(users);
});

app.post('/user', (req, res) => {
  const body = req.body;
  const id = body.id;
  const name = body.name;
  const region = body.region;

  if (!id) return res.send('id 없음');
  if (!name) return res.send('name 없음');
  if (!region) return res.send('region 없음');

  users[id] = {
    name,
    region,
  };

  res.send(users[id]);
});

app.get('/user/:id', (req, res) => {
  const id = req.params.id;
  res.send(users[id]);
});

app.put('/user/:id', (req, res) => {
  const id = req.params.id;
  const name = req.body.name;
  const region = req.body.region;

  if (name) {
    users[id].name = name;
  }
  if (region) {
    users[id].region = region;
  }

  res.send(users[id]);
});

app.delete('/user/:id', (req, res) => {
  const id = req.params.id;

  delete users[id];

  res.send(`${id}를 제거 하였습니다.`);
});
