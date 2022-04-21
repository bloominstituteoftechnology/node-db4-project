


function getRecipeById (recipe_id) {
return Promise.resolve(`awesome recipe with recipe_id: ${recipe_id}`);
}

module.exports = {
  getRecipeById,
};