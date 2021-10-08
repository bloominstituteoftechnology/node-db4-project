function getRecipesById(recipe_id) {
    return Promise.resolve(`Looks like recipe with id of ${recipe_id} is looking tasty`)
}

module.exports = { getRecipesById }