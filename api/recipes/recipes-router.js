const router = require("express").Router();

server.use("/", (req, res, next) => {
  res.json("inside router");
});

module.exports = router;
