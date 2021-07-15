const recipes = require('./recipe-model');

const checkRecipeId = (req, res, next) => {
    const { recipe_id } = req.params;

    recipes.findById(recipe_id)
      .then((resp) => {
        req.recipe = resp;
        if (resp === undefined || resp === null || resp === []) {
          res.status(404).json({ 
            message: `recipe with recipe_id ${recipe_id} not found` 
          })
        } else {
          next();
        }
      })
}

module.exports = {
    checkRecipeId
}