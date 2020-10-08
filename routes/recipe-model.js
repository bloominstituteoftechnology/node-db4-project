const db = require("../data/db-config");

module.exports = {
  getRecipes,
  findById,
  update,
  remove,
  addRecipe,
};
//This returns only the recipes name nothing else
function getRecipes() {
  return db("recipes");
}

function findById(id) {
  return db("recipes").where({ id });
}

function update(id, changes) {
  return db("recipes").where({ id }).update(changes);
}

function remove(id) {
  return db("recipes").where({ id }).delete();
}

function addRecipe(recipe) {
  return db("recipes")
    .insert(recipe)
    .then((res) => {
      const id = res[0];
      return findById(id);
    });
}
