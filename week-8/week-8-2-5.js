const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`<h1>Home</h1>`);
});

app.get("*", (req, res) => {
  res.send(`<h1>Error page</h1>`);
});

app.listen(3000, () => {
  console.log("Server Starting...");
});
