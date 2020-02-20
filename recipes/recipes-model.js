const db = require("../data/dbConfig.js");

function getRecipes() {
  return db("recipes");
}

// SELECT i.ingredient_amount, i.ingredient_name FROM recipes as r
// JOIN recipe_ingredients as ri
// ON ri.recipe_id = r.id
// JOIN ingredients as i
// ON ri.ingredient_id = i.id;

function getShoppingList(id) {
  return db("recipes as r")
    .select("i.ingredient_amount", "i.ingredient_name")
    .join("recipe_ingredients as ri", { "ri.recipe_id": "r.id" })
    .join("ingredients as i", { "i.id": "ri.ingredient_id" })
    .where({ "r.id": id });
}

// SELECT s.step_number, s.description FROM recipes as r
// JOIN steps as s
// ON r.id = s.recipe_id;

function getInstructions(id) {
  return db("recipes as r")
    .select("s.step_number", "s.description")
    .join("steps as s", { "r.id": "s.recipe_id" })
    .where({ "r.id": id });
}

module.exports = { getRecipes, getShoppingList, getInstructions };
