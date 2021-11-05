const db = require("../data/db-config");

async function findRecipeById(recipe_id) {
  const rows = await db("recipes as r")
    .leftJoin("steps as s", "r.recipe_id", "s.recipe_id")
    .select("r.recipe_name", "s.*")
    .where("r.recipe_id", recipe_id);

  const results = {
    recipe_id: Number(recipe_id),
    scheme_name: rows[0].scheme_name,
    steps: rows[0].step_id
      ? rows.map((step) => {
          return {
            step_id: step.step_id,
            step_number: step.step_number,
            instructions: step.instructions,
          };
        })
      : [],
  };
  return results;
}

router.get("/:recipe_id", findRecipeById, (req, res, next) => {
  const { recipe_id } = req.params;

  Recipes.findById(recipe_id)
    .then((recipe) => {
      res.json(recipe);
    })
    .catch(next);
});
