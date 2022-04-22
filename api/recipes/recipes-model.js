function getRecipeById(recipe_id) {
    return Promise.resolve(`awesome ${recipe_id}`)
}

module.exports = { getRecipeById }