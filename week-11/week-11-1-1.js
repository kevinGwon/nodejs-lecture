const mysql = require('mysql');

const client = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'Company', // === client.query('USE Company')
});

client.query('SELECT * FROM products', (error, result, fields) => {
  if (result) {
    console.log(result);
  } else {
    console.log(error);
  }
});
