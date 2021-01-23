const db = require("../../data/db-config.js");

module.exports = {
  getRecipes,
  getShoppingList,
};

function getRecipes() {
  return db("recipes");
}

// FROM recipe_ingredients as ri
// INNER JOIN ingredients ON ri.ingredient_id = ingredients.id
// INNER JOIN measurement_qty ON ri.measurement_qty_id = measurement_qty.id
// INNER JOIN measurement_units ON ri.measurement_id = measurement_units.id
// WHERE ri.recipe_id = id

function getShoppingList(id) {
  return db("recipe_ingredients as ri")
    .join("recipes as r")
    .join("ingredients as i", "ri.ingredient_id", "i.id")
    .join("measurement_qty as m", "ri.measurement_qty_id", "m.id")
    .join("measurement_units as mu", "ri.measurement_id", "mu.id")
    .select(
      "r.recipe_name",
      "r.description",
      "i.ingredient_name",
      "m.qty_amount",
      "mu.measurement_description"
    )
    .where({ recipe_id: id });
}
