const router = require("express").Router();
const Recipes = require("./recipe-model");

router.get("/", (req, res, next) => {
  Recipes.findRecipes()
    .then((resp) => {
      res.status(200).json(resp);
    })
    .catch(next);
});

router.get("/:recipe_id", async (req, res, next) => {
  try {
    const result = await Recipes.getRecipeByID(req.params.recipe_id);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
