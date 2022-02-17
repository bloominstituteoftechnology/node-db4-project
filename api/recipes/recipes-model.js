function getRecipeById (recipe_id){

    return Promise.resolve(`Requested recipe with id ${recipe_id}`)
}

module.exports = { 
    
    getRecipeById 

}