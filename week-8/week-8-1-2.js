const express = require('express');
const app = express();

app.use((req, res) => {
  // 요청헤더 속성 추출
  const agent = req.header('user-agent');

  console.log(req.headers);

  // Cross Browswer
  // if (agent.toLocaleLowerCase().match(/chrome/)) {
  //   res.send('Chrome');
  // } else {
  //   res.send('Else Browser');
  // }

  // query
  // root?a=1&b=2&c=3
  res.send(req.query);
});

app.listen(3000, () => {
  console.log('Server Starting...');
});
