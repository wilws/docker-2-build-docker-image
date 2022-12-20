const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Docker 2 - Create a Docker Image</h1>");
});

app.get("/page2", (req, res) => {
  res.send("<h1>This is page2</h1>");
});

app.listen(3000, () => {
    console.log('connect to port 3000');
});
