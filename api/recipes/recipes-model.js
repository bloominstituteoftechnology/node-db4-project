function getRecipeById(recipe_id) {
    return Promise.resolve(`${recipe_id}`);
}

module.exports = { getRecipeById };