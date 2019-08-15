const db = require("./db-config");

module.exports = {
  getRecipes
  //   geShoppingList,
  //   getInstructions
};

function getRecipes() {
  db("recipes");
}
