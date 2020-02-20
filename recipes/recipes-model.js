const db = require("../data/dbConfig.js");

function getRecipes() {
  return db("recipes");
}

function getShoppingList() {}

function getInstructions() {}

module.exports = { getRecipes, getShoppingList, getInstructions };
