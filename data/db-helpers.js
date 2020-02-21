const db = require("./db_config");

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
};

function getRecipes() {
  return db("recipes");
}

function getShoppingList(id) {
  return db("recipes_ingredients")
    .join("ingredients", "recipes_ingredients.ingredient_id", "ingredients.id")
    .select(
      "ingredients.name",
      "recipes_ingredients.quantity",
      "recipes_ingredients.units"
    )
    .where({ recipe_id: id });
}

function getInstructions(id) {
  return db("steps").where({ recipe_id: id });
}
