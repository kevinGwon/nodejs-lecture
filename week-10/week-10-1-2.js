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

app.listen(3000, () => {
  console.log('Server Starting...');
});
