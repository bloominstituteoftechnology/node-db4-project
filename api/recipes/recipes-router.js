const router = require("express").Router();
const Recipe = require("./recipes-model");

router.get("/:recipe_id", (req, res, next) => {
  Recipe.getById(req.params.recipe_id)
    .then((recipe) => {
      res.status(200).json(recipe);
    })
    .catch(next);
});

module.exports = router;
