const express = require("express");
const router = express.Router();

const RecipiesModel = require("./recipies-model");

router.get("/:id", (req, res, next) => {
  RecipiesModel.findById(req.params.id)
    .then((recipie) => res.status(200).json(recipie))
    .catch(next);
});

router.use((err, req, res, next) => {
  res
    .status(err.status || 500)
    .json({ message: err.message, stack: err.stack });
});

module.exports = router;
