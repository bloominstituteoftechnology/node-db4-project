const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  console.log("youre in aaron");
});

module.exports = router;
