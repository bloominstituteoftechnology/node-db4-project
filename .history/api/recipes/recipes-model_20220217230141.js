function getRecipeById(recipe_id) {
    return Promise.resolve(`working recipe${recipe_id}`)
}

module.exports = { getRecipeById }