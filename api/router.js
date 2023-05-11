const express = require("express");
const Helpers = require("./model");

const router = express.Router();

router.get("/", (req, res, next) => {
  Helpers.getRecipes();
  //   console.log("made it to get");
});

module.exports = router;
