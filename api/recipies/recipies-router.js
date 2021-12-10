const express = require("express");
const router = express.Router();

router.get("/:id", (req, res, next) => {});

router.use((err, req, res, next) => {
  res.status(err.status || 500).json({ message: err.message });
});

module.exports = router;
