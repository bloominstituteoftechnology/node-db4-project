const db = require("../data/dbConfig");

function getRecipes() {
  return db("recipes");
}

function getShoppingList(id) {
  return db("recipe_ingredients as r&i")
    .where({ "r&i.recipe_id": id })
    .join("ingredients as i", "i.id", "=", "r&i.ingredient_id")
    .select("i.ingredient_name", "r&i.quantity");
}

function getInstructions(id) {
  console.log(id);
  return db("steps")
    .where({ "steps.recipe_id": id })
    .select("steps.step_num", "steps.instructions");
}

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions,
};
