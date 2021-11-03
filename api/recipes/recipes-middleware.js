const Recipe = require('../recipes/recipes-model');



function handleError(err, req, res, next) { //eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message,
    prodMessage: 'something went really wrong!',
    stack: err.stack,
  });
}

async function checkRecipeId (req, res, next) {
  const { recipe_id } = req.params;
  try {
    const possibleRecipe = await Recipe.getById(recipe_id)
    if (!possibleRecipe){
      next({ status: 404, message: `recipe with id ${recipe_id} is not found`})
    } else {
      req.possibleRecipe = possibleRecipe
      next()
    }
  } catch (err) {
    next(err)
  }
}

module.exports = {
  handleError,
  checkRecipeId,
}
