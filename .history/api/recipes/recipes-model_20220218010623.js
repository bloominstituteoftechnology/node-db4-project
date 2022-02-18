

function getRecipeById(recipe_id) {
    return Promise.resolve(`recipe_${recipe_id}`)
}

module.exports = { getRecipeById }