const db = require("../data/db-config");

module.exports = {
  getRecipes() {
    return db("recipes");
  },
  getShoppingList(id) {
    return db("recipe_ingredients as r")
      .join("ingredients as i", "r.ingredient_id", "i.id")
      .select("i.ingredient_name", "r.amount")
      .where({ "r.recipe_id": id });
  },
  getInstructions(id) {
    return db("recipes as r").select("r.instructions").where({ "r.id": id });
  },
};
