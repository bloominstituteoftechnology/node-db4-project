const Recipes = require("../recipes/recipe-model");
const Instructions = require("../recipes/instructions.model");
const Ingredients = require("../recipes/ingredients-model");

// Validation functions
function recipeBody(req, res, next) {
  const recipe = req.body;
  !recipe.name
    ? next({
        status: 400,
        message: "Please provide a recipe name",
      })
    : next();
}

async function recipeId(req, res, next) {
  try {
    const recipe = await Recipes.getById(req.params.id);
    !recipe
      ? next({
          status: 404,
          message: "Recipe does not exist",
        })
      : next();
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
}

function instructionBody(req, res, next) {
  const instruction = req.body;
  if (!instruction.step || !instruction.step_number) {
    next({ status: 400, message: "Please provide a step number and step" });
  } else {
    next();
  }
}

async function instructionId(req, res, next) {
  const { instructionId } = req.params;
  try {
    const instruction = await Instructions.getById(instructionId);

    !instruction.length
      ? next({
          status: 404,
          message: `Instruction with id of ${instructionId} does not exist`,
        })
      : next();
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
}

function ingredientBody(req, res, next) {
  const ingredient = req.body;

  !ingredient.name
    ? res.status(400).json({ message: "Please provide an ingredient name" })
    : next();
}

async function ingredientId(req, res, next) {
  const { id } = req.params;

  try {
    const ingredient = await Ingredients.getById(id);

    !ingredient.length
      ? res.status(400).json({
          message: `Ingredient with id of ${id} does not exist!`,
        })
      : next();
  } catch (error) {
    res.status(500).json({
      message: "Error while validating ingredient id",
    });
  }
}

async function shoppingListItem(req, res, next) {
  const { ingredient_id, unit, ingredient_quantity } = req.body;
  if (!(ingredient_id && unit && ingredient_quantity)) {
    res.status(400).json({
      message: "Please provide a ingredient_id, unit and ingredient_quantity",
    });
  } else {
    next();
  }
}

module.exports = {
  recipeBody,
  recipeId,
  instructionBody,
  instructionId,
  ingredientBody,
  ingredientId,
  shoppingListItem,
};