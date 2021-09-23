const router = require("express").Router();
const helpers = require("./model");
const { checkRecipesExist } = require("./middleware");
// GET
router.get("/recipes", (req, res, next) => {
  helpers
    .getRecipes()
    .then((recipes) => {
      res.status(200).json(recipes);
    })
    .catch(next);
});
// DELETE
router.delete("/recipes/:recipes_id", checkRecipesExist, (req, res, next) => {
  helpers
    .deleteRecipes(req.params.recipes_id)
    .then((count) => {
      if (count > 0) {
        res.status(204).end();
      } else {
        res.status(404).json({ message: "Recipe not found" });
      }
    })
    .catch(next);
});

module.exports = router;
