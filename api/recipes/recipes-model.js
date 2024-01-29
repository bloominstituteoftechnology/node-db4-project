function getRecipeById(recipe_id) {
    return Promise.resolve(`recipe with id ${recipe_id}`);
}

module.exports = {
    getRecipeById,
}