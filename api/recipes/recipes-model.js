const getRecipeById = (recipe_id) => {
    return Promise.resolve(`recipe ${recipe_id}`)
}

module.exports = {
    getRecipeById
}