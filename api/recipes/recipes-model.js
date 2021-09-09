
function getRecipeById(recipe_id){
    return Promise.resolve(`great recipe with id: ${recipe_id}`)
}
module.exports = {getRecipeById};