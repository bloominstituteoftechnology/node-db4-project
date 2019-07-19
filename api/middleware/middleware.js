const Ingredients = require('../ingredients/ingredient-model.js');
const Recipes = require('../recipes/recipe-model.js');
const Steps = require('../steps/step-model.js');

module.exports = {
  validateIngredient,
  validateIngredientId,
  validateRecipe,
  validateRecipeId,
  validateStep,
  validateStepId,
};

function validateIngredient(req, res, next) {
  if (Object.keys(req.body).length === 0)
    return res.status(400).json({
      message: 'There was not sufficient information given for an ingredient.',
    });

  const { ingredient_name } = req.body;

  if (!ingredient_name)
    return res.status(400).json({
      message: 'Oops, there was no ingredient_name given for an ingredient.',
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
      error: `There was an error getting the ingredient with the id: ${id}.`,
    });
  }
}

function validateRecipe(req, res, next) {
  if (Object.keys(req.body).length === 0)
    return res.status(400).json({
      message: 'There was not sufficient information given for a recipe.',
    });
  const { recipe_name } = req.body;
  if (!recipe_name)
    return res.status(400).json({
      message: 'Oops, there was no recipe_name given for a recipe.',
    });
  next();
}

async function validateRecipeId(req, res, next) {
  try {
    const { id } = req.params;

    const recipe = await Recipes.findById(id);
    if (recipe) {
      req.recipe = recipe;
      next();
    } else {
      res
        .status(404)
        .json({ message: `The recipe with the id: ${id} was not found.` });
    }
  } catch (error) {
    res.status(500).json({
      error: `There was an error getting the recipe with the id: ${id}.`,
    });
  }
}

function validateStep(req, res, next) {
  if (Object.keys(req.body).length === 0)
    return res.status(400).json({
      message: 'There was not sufficient information given for an instruction.',
    });
  const { step_number, instruction } = req.body;
  if (!step_number || !instruction)
    return res.status(400).json({
      message:
        'Oops, there was no step_number or instruction given for an instruction.',
    });
  next();
}

async function validateStepId(req, res, next) {
  try {
    const { id } = req.params;

    const instruction = await Steps.findById(id);
    if (instruction) {
      req.instruction = instruction;
      next();
    } else {
      res
        .status(404)
        .json({ message: `The step with the id: ${id} was not found.` });
    }
  } catch (error) {
    res.status(500).json({
      error: `There was an error getting the step with the id: ${id}.`,
    });
  }
}
