const fs = require('fs');
const ejs = require('ejs');
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();

const client = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'Company', // === client.query('USE Company')
});

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  fs.readFile('list.html', 'utf-8', (error, data) => {
    client.query('SELECT * FROM products', (error, result) => {
      if (result) {
        res.send(
          ejs.render(data, {
            data: result,
          })
        );
      } else {
        console.log(error);
      }
    });
  });
});

app.get('/delete/:id', (req, res) => {
  client.query('DELETE FROM products WHERE id=?', [req.params.id], () => {
    res.redirect('/');
  });
});

app.get('/insert', (req, res) => {
  fs.readFile('insert.html', 'utf-8', (error, data) => {
    res.end(data);
  });
});

app.post('/insert', (req, res) => {
  const body = req.body;
  const name = body.name;
  const modelnumber = body.modelnumber;
  const serise = body.serise;
  client.query(
    'INSERT INTO products (name, modelnumber, serise) VALUES (?, ?, ?)',
    [name, modelnumber, serise],
    (error, result) => {
      if (result) {
        res.redirect('/');
      } else {
        console.log(error);
      }
    }
  );
});

app.listen(3000, () => {
  console.log('Server Starting...');
});
