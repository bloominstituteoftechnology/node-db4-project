function getRecipeById(recipe_id) {
    return Promise.resolve(`Recipe #${recipe_id} is delicious!`)
}

module.exports = {
    getRecipeById
}