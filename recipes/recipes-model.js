const db = require("../data/db.config.js");

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
};

function getRecipes() {
  return db("recipes");
}

function getShoppingList() {
  return db("recipes");
}

function getInstructions() {
  return db("recipes")
    .select("stepby")
    .where({ id });
}
