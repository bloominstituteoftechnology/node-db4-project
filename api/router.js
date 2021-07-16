const express = require("express");
const helpers = require("./model");
const router = express.Router();

router.get("/:id", (req, res, next) => {
  helpers
    .getRecipeById()
    .then((recipes) => {
      res.status(200).json(recipes);
      console.log("inside.then:");
    })
    .catch(next);
});

module.exports = router;
