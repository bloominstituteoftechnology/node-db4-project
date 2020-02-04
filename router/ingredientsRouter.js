const { Router } = require("express");
const router = Router();

const { getRecipesByIngredientId } = require("../data/database/index");

router.route("/:id/recipes").get(async ({ params: { id } }, res) => {
  /* GET ingredients/:id/recipes /id*/

  try {
    const recipes = await getRecipesByIngredientId(id);
    res.json(recipes);
  }

  catch(e) {
    console.log(e)
  }
});

module.exports.router = router;
