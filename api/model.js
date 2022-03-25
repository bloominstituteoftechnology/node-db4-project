const db = require("../data/db-config.js");

async function getRecipeById(recipe_id) {
  const rows = await db("recipes").where("recipe_id", recipe_id);

  return rows;
}

module.exports = {
  getRecipeById,
};
