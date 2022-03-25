const express = require("express");
const helpers = require("./model");

const router = express.Router();

router.get("/:recipe_id", (req, res, next) => {
  helpers
    .getRecipesById(req.params.recipe_id)
    .then((recipes) => {
      res.status(200).json(recipes);
    })
    .catch(next); // our custom err handling middleware in server.js will trap this
});

module.exports = router;
