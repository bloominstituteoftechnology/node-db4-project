const router = require("express").Router();
const Recipe = require("./recipes-model.js");

router.get("/:recipe_id", (req, res, next) => {
  Recipe.getRecipeById(req.params.recipe_id)
    .then((resource) => {
      res.status(200).json(resource);
    })
    .catch(next);
});

// eslint-disable-next-line no-unused-vars
router.use((err, req, res, next) => {
  res.status(500).json({
    customMessage: "Something went wrong in the recipes router",
    message: err.message,
    stack: err.stack,
  });
});

module.exports = router;
