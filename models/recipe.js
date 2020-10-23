const db = require("../data/config")

function getRecipes() {
  return db("recipes as r")
    .select("r.id as recipe_id", "r.name as recipe")
}

function getShoppingList(recipe_id) {
  // SELECT
  // 	r.id recipe_id,
  // 	i.name ingredients,
  // 	i.quantity
  // FROM recipes AS r
  // INNER JOIN recipes_ingredients AS r_i ON r.id = r_i.recipe_id
  // INNER JOIN ingredients AS i ON r_i.ingredient_id = i.id
  // WHERE r.id = ?;
  return db("recipes as r")
    .where("r.id", recipe_id)
    .select("r.id as recipe_id", "i.name as ingredient", "i.quantity")
    .innerJoin("recipes_ingredients as r_i", "r_i.recipe_id", "r.id")
    .innerJoin("ingredients as i", "i.id", "r_i.ingredient_id")
}

function getInstructions(recipe_id) {
  // SELECT
  // 	r.id recipe_id,
  // 	s.instruction
  // FROM recipes AS r
  // INNER JOIN steps AS s ON s.recipe_id = r.id
  // WHERE r.id = ?;
  return db("recipes as r")
    .select("s.id as step", "r.id as recipe_id", "s.instruction")
    .innerJoin("steps as s", "s.recipe_id", "r.id")
    .where("r.id", recipe_id)
}

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions,
}