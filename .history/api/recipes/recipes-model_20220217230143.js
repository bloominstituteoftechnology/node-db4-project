function getRecipeById(recipe_id) {
    return Promise.resolve(`working recipe_${recipe_id}`)
}

module.exports = { getRecipeById }