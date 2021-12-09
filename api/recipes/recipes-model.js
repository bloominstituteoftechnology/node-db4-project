function getRecipeById(recipe_id){
    return Promise.resolve(`Recipe ${recipe_id} is on the way!`)
}

module.exports={ getRecipeById }