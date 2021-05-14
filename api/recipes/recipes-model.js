function getRecipeById(recipe_id) {
    return Promise.resolve(`awesome recipe id ${recipe_id}`)
}

module.exports = { getRecipeById }