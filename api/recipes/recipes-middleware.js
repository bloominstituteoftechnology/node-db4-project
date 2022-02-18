const Recipe = require('./recipes-model')
exports.checkRecipesId = async (req, res, next) =>{
    try{
        const existRecipe = await Recipe.findById(req.params.recipeId)
        if(!existRecipe){
            next({status: 404, message: "NO RECIPE!!!"})
        }else{
            req.recipe = existRecipe
            next()
        }
    }catch(err){
        next(err)
    }

}