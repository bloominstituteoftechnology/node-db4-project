const db = require("../data/db-config");

const getRecipes = () => {
  return db("recipeoptions as ro")
    .join("recipes as r", "r.recipe_id", "ro.recipe_id")
    .join("ingredients as i", "i.ingredient_id", "ro.ingredient_id")
    .join("steps as s", "s.ingredient_id", "i.ingredient_id")
    .select("recipe_name", "ingredient_name", "step_text");
};

const getShoppingList = (id) => {
  return db("recipeoptions as ro")
    .join("recipes as r", "r.recipe_id", "ro.recipe_id")
    .join("ingredients as i", "i.ingredient_id", "ro.ingredient_id")
    .where("r.recipe_id", id)
    .select("ingredient_name", "ingredient_quanity");
};

const getInstructions = (id) => {
  return db("recipeoptions as ro")
    .join("recipes as r", "r.recipe_id", "ro.recipe_id")
    .join("ingredients as i", "i.ingredient_id", "ro.ingredient_id")
    .join("steps as s", "s.ingredient_id", "i.ingredient_id")
    .select("step_text");
};

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions,
};
