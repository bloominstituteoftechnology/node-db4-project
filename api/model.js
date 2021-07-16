const db = require("../data/db-config");

function getRecipeById() {
  return db("recipes");
}

module.exports = {
  getRecipeById,
};
