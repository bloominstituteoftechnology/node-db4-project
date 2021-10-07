const router = require("express").Router();

router.use("/", (req, res) => {
  res.json("inside router");
});

module.exports = router;
