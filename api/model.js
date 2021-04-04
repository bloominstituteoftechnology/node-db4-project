const db = require('../data/db-config.js');


const getRecipes = () => {
  return db("recipe_steps as rs")
    .join("recipes as r", "r.recipe_id", "rs.recipe_id")
    .join("ingredients as i", "i.ingredients_id", "rs.ingredients_id")
    .join("steps as s", "s.ingredients_id", "i.ingredients_id")
    .select("recipe_name", "ingredients_name", "step_instructions");
};

const getShoppingList = (id) => {
  return db("recipe_steps as rs")
    .join("recipes as r", "r.recipe_id", "rs.recipe_id")
    .join("ingredients as i", "i.ingredients_id", "rs.ingredients_id")
    .where("r.recipe_id", id)
    .select("ingredients_name", "quanity");
};

const getInstructions = (id) => {
  return db("recipe_steps as rs")
    .join("recipes as r", "r.recipe_id", "rs.recipe_id")
    .join("ingredients as i", "i.ingredients_id", "rs.ingredients_id")
    .join("steps as s", "s.ingredients_id", "i.ingredients_id")
    .select("step_instructions");
};

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions,
}; 