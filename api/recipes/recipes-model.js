const db = require("../../data/db-config");

async function getById(recipe_id){
  const recipe = await db("recipes as r")
  .where("recipe_id", recipe_id);

  return recipe
}

module.exports = { getById };