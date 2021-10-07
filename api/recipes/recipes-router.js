const router = require("express").Router();

router.use("/", (req, res, next) => {
  res.json("inside router");
});

module.exports = router;
