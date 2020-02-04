const db = require("./knex.config");

const getRecipes = () => {
  return db("recipes");
};

const getShoppingList = recipe_id => {
  // id => recipe id
  // get all ingredients + quantities for given recipe
  // queries recipe_ingredients first
  // query ingredients table based on results
  return db('recipes_ingredients as r_i')
    .where({recipe_id})
    .join('ingredients as i', 'r_i.ingredient_id', '=', 'i.id')
    .select('i.*');
};

const getInstructions = (recipe_id) => {
  // gets all instructions/steps per given id
  // same-ish as above
  return db('recipes_steps as r_s')
    .where({recipe_id})
    .join('steps as s', 'r_s.step_id', '=', 's.id')
    .select('s.*')
}

const getRecipesByIngredientId = (ingredient_id) => {
  return db('recipes_ingredients as r_i')
  .where({ingredient_id})
  .join('recipes as r', 'r_i.ingredient_id', '=', 'r.id')
  .select('r.*');
}

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions,
  getRecipesByIngredientId
}