const Ingredients = require('../ingredients/ingredient-model.js');

module.exports = {
  validateIngredient,
  validateIngredientId,
};

function validateIngredient(req, res, next) {
  if (Object.keys(req.body).length === 0)
    return res.status(400).json({
      message: 'There was not sufficient information given for an ingredient.',
    });

  const { ingredient_name } = req.body;

  if (!ingredient_name)
    return res.status(400).json({
      message: 'Oops, there was no name given for an ingredient.',
    });
  next();
}

async function validateIngredientId(req, res, next) {
  try {
    const { id } = req.params;
    const ingredient = await Ingredients.findById(id);

    if (ingredient) {
      req.ingredient = ingredient;
      next();
    } else {
      res
        .status(404)
        .json({ message: `The ingredient with the id: ${id} was not found.` });
    }
  } catch (error) {
    const { id } = req.params;
    res.status(500).json({
      error: `There was an error getting the ingredient with the id: ${id}`,
    });
  }
}
