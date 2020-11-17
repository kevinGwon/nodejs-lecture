const express = require("express");
const app = express();

app.use((req, res, next) => {
  req.a = "a";
  res.b = "b";
  console.log("1 Middle Ware");
  next();
});

app.use((req, res, next) => {
  console.log("2 Middle Ware");
  next();
});

app.use((req, res, next) => {
  console.log("3 Middle Ware");
  console.log(req.a);
  next();
});

app.use((req, res, next) => {
  console.log("4 Middle Ware");
  next();
});

app.use((req, res) => {
  console.log("5 Middle Ware");
  console.log(res.b);

  res.send("<h1>Load..</h1>");
});

app.listen(3000, () => {
  console.log("Server Starting...");
});
