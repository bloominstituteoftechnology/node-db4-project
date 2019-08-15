const db = require("./db-config");

module.exports = {
  getRecipes,
  geShoppingList,
  getInstructions
};

function getRecipes() {
  // should return a list of all recipes in the database
  return db("recipes");
}

function getShoppingList(recipe_id) {
  // should return a list of all ingredients and quantities for a given recipe
}

function getInstructions(recipe_id) {
  // should return a list of step by step instructions for preparing a recipe
}
