function getRecipeByID(recipe_id) {
    return Promise.resolve(`you just recieved recipe: ${recipe_id}`)
}

module.exports = { getRecipeByID }