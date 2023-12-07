const router = require("express").Router();

router.use("*", (req, res) => {
  res.json({ api: "up" });
});

// eslint-disable-next-line no-unused-vars
router.use((err, req, res, next) => {
  res.status(500).json({
    customMessage: "Something went wrong in the recipes router",
    message: err.message,
    stack: err.stack,
  });
});
