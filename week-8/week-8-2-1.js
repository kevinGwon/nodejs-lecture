const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log("1 Middle Ware");
  next();
});

app.use((req, res, next) => {
  console.log("2 Middle Ware");
  next();
});

app.use((req, res, next) => {
  console.log("3 Middle Ware");
  next();
});

app.use((req, res, next) => {
  console.log("4 Middle Ware");
  next();
});

app.use((req, res, next) => {
  console.log("5 Middle Ware");
  next();
});

app.listen(3000, () => {
  console.log("Server Starting...");
});
