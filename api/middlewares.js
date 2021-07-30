const helpers = require("./data/helpers");

const checkRecipesExists = async (req, res, next) => {
  const recipes = await helpers.getRecipesById(req.params.recipes_id);

  if (!recipes) {
    res.status(404).json({ message: "Recipe not found" });
    return;
  }

  next();
};

module.exports = {
  checkRecipesExists,
};
