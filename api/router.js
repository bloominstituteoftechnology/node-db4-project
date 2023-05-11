const express = require("express");
const helpers = require("./model");

const router = express.Router();

router.get("/", (req, res, next) => {
  console.log("made it to get");
});
