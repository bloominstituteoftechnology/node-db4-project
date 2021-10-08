const Recipes = require("./recipes-model");

const checkRecipeId = async (req, res, next) => {
  const { id } = req.params;
  try {
    const fetchedRecipe = await Recipes.getRecipeById(id);

    if (!fetchedRecipe) {
      res.status(404).json({ message: `recipe with id ${id} does not exists` });
    } else {
      req.recipe = fetchedRecipe;
      next();
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  checkRecipeId,
};
