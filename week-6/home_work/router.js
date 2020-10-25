const { response } = require('express');
const fs = require('fs');

module.exports = function(app) {
  app.get('/get',function(req,res){
    res.render('./login_get.html');
  });
  app.get('/post',function(req,res){
    res.render('./login_post.html');
  });
  app.get('/display',function(req,res){
    res.render('./display.html');
    console.log('Get Method');

    // fs.readFile( __dirname + '/assets/image.jpg', (err, data) => {
    //   res.writeHead(200, {'Content-Type': 'image/jpg'});
    //   res.write(data);
    //   res.end();
    // });
  });
  app.post('/display',function(req,res){
    res.render('./display.html');
    console.log('Post Method');
  });
};
