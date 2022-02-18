const db = require("../../data/dbConfig")

async function getRecipeById(recipe_id) {
  const rows = await db("recipes")

  return rows
}

module.exports = {
  getRecipeById,
}
