const express = require('express');
const app = express();
const router = require('./router')(app);

app.listen(3000, (req, res) => {
    console.log('Express server has started on port 3000');
});
app.set('views', __dirname);
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);