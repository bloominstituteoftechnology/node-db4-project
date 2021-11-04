const router = require("express").Router();
const helpers = require("./model");
const { checkRecipesExist } = require("./middleware");

// GET Recipes
router.get("/recipes", (req, res, next) => {
  helpers
    .getRecipes()
    .then((recipes) => {
      res.status(200).json(recipes);
    })
    .catch(next);
});

// GET Ingredients
router.get("/ingredients", (req, res, next) => {
  helpers
    .getIngredients()
    .then((ingredients) => {
      res.status(200).json(ingredients);
    })
    .catch(next);
});

// GET Steps
router.get("/steps", (req, res, next) => {
  helpers
    .getSteps()
    .then((steps) => {
      res.status(200).json(steps);
    })
    .catch(next);
});

// DELETE
router.delete("/recipes/:recipes_id", checkRecipesExist, (req, res, next) => {
  helpers
    .deleteRecipe(req.params.recipes_id)
    .then((count) => {
      if (count > 0) {
        res.status(204).end();
      } else {
        res.status(404).json({ message: "Recipe not found" });
      }
    })
    .catch(next);
});

// eslint-disable-next-line
router.use((err, req, res, next) => {
  res.status(500).json({
    customMessage: "something went wrong inside the recipe router",
    message: err.message,
    stack: err.stack,
  });
});

module.exports = router;
