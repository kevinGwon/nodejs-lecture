const express = require("express");
const app = express();

app.use(express.static(`${__dirname}/public`));

app.listen(3000, () => {
  console.log("Server Starting...");
  console.log("localhost:3000/image.jpg");
});
