const express = require("express");

const app = express();

app.use("/", (req, res, next) => {
  console.log("/ middleware");
  res.send("<p>The Middleware that handles just</p>");
});

app.listen(3000);
