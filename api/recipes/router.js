const router = require("express").Router();
// const knex = require("knex");
// const db_config = require("./knexfile");
// const db = knex(db_config.development);

// const helpers = require("./data/helpers");

// const { checkRecipesExists } = require("./middlewares");
const Recipe = require("../recipes/model");

router.get("/:recipe_id", (req, res, next) => {
  Recipe.getRecipeById(req.params.recipe_id)
    .then((resource) => {
      res.status(200).json(resource);
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

// GET
// router.get("/", async (req, res, next) => {
//   try {
//     const recipes = await Recipe.getAll();
//     res.json(recipes);
//   } catch (err) {
//     next(err);
//   }
// });

// GET
// router.get("/recipes", (req, res, next) => {
//   helpers
//     .getRecipes()
//     .then((recipes) => {
//       res.status(200).json(recipes);
//     })
//     .catch(next);
// });

// POST
// router.post("/recipes", (req, res, next) => {
//   helpers
//     .createRecipes(req.body)
//     .then((recipe) => {
//       res.status(201).json(recipe);
//     })
//     .catch(next);
// });

// DELETE
// router.delete("/recipes/:recipes_id", checkRecipesExists, (req, res, next) => {
//   helpers
//     .deleteRecipes(req.params.recipes_id)
//     .then((count) => {
//       if (count > 0) {
//         res.status(204).end();
//       } else {
//         res.status(404).json({ message: "Recipe not found" });
//       }
//     })
//     .catch(next);
// });

module.exports = router;
