const router = require("express").Router();

router.use("*", (req, res) => {
  res.json({ api: "up" });
});

router.use((err, req, res, next) => {
  res.status(500).json({
    customMessage: "ya done goofed in the recipes router bruv",
    message: err.message,
    stack: err.stack,
  });
});

module.exports = router;
