const router = require("express").Router(); //instantiate the router

router.use("*", (req, res) => {
  //test if routing working with catchall endpoint
  res.json({ api: "up" });
});

router.use((err, req, res, next) => {
  res.status(500).json({
    customMessage: "something went wrong with recipes router",
    message: err.message,
    stack: err.stack,
  });
});

module.exports = router;
