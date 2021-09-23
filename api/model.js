const db = require("../data/db-config.js");

function getRecipes() {
  return db("recipes");
}

function getRecipesById(id) {
  return db("recipes").where({ id }).first();
}

module.exports = {
  getRecipes,
  getRecipesById,
};
