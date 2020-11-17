const express = require("express");
const app = express();

app.get("/a", (req, res) => {
  res.send('<a href="/b">b로 가기</a>');
});

app.get("/b", (req, res) => {
  res.send('<a href="/a">a로 가기</a>');
});

app.listen(3000, () => {
  console.log("Server Starting...");
});
