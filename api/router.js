const express = require("express");
const helpers = require("./model");

const router = express.Router();

router.get("/:recipe_id", (req, res, next) => {
  helpers
    .getById(req.params.recipe_id)
    .then((recipe) => {
      res.json(recipe);
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
