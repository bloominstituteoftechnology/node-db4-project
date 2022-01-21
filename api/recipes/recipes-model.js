function getRecipeById(recipe_id)  {
    return Promise.resolve(`awesome get the ${recipe_id}`)
}

module.exports = { getRecipeById }