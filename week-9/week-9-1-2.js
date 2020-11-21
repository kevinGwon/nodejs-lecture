const fs = require('fs');
const express = require('express');
const app = express();
const multipart = require('connect-multiparty');

app.use(multipart({ uploadDir: `${__dirname}/multipart` }));

app.get('/', (req, res) => {
  fs.readFile('upload.html', (error, data) => {
    res.send(data.toString());
  });
});

app.post('/', (req, res) => {
  console.log(req.body);
  console.log(req.files);

  const { file } = req.files;
  const comment = req.body.comment;
  const name = file.originalFilename;
  const path = file.path;
  const changeName = `${__dirname}/multipart/${name}`;

  fs.rename(path, changeName, (error) => {
    fs.unlink(path, (error) => {
      console.log('업로드 실패');
    });
    res.redirect('/');
  });
});

app.listen(3000, () => {
  console.log('Server Starting...');
});
