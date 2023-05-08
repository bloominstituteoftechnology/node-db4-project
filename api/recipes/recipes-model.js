function getRecipeById(recipe_id){
    return Promise.resolve(`awesomeness with ${recipe_id}`)
    }

module.exports = {
    getRecipeById
}