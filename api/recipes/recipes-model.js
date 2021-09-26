function getRecipeById(recipe_id) {
    return Promise.resolve(`aweomse recipe ${recipe_id}`)
}

module.exports = { getRecipeById }