
const db = require('../data/db-config');

const checkRecipeId = async (req, res, next) => {
  const { recipe_id } = req.params;

  try {
    const recipe = await db('recipes').where('recipe_id', recipe_id);
    if (recipe) {
      next();
    } else {
      res.status(404).json({ message: `recipe with id ${recipe_id} not found`});
    }
  } catch(err) { next(err) }
}

module.exports = {checkRecipeId};