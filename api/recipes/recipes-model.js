const db = require("../../data/db-config.js");

module.exports = {
  getRecipes,
  getShoppingList,
};

function getRecipes() {
  return db("recipes");
}

function getShoppingList(id) {
  return db("ingredients as i")
    .join("measurement_units as m", "m.ingredient_id", "m.id")
    .select("i.ingredient_name", "m.measurement_description")
    .where({ recipe_id: id });
}
