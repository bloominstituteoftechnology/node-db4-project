const express = require("express");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    res.status(200).json("Getting recipes");
  } catch {
    res.status(500).json("Getting an internal error ❌");
  }
});

module.exports = router;
