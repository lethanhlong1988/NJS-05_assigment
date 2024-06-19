const express = require("express");

const router = express.Router();

router.get("/users", (req, res, next) => {
    console.log("/users middleware");
    res.send("<p>The Middleware that handles just /users</p>");
  });
  
  router.get("/", (req, res, next) => {
    console.log("/ middleware");
    res.send("<p>The Middleware that handles just</p>");
  });

module.exports = router;
