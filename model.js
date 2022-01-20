

function getRecipe () {
  return Promise.resolve("get recipe!")
}

function getRecipeById (recipe_id) {
  return Promise.resolve("get recipe ID!")
}

module.exports = {
  getRecipe,
  getRecipeById
}