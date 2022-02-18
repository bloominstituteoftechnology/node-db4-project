const Recipe = require('./recipes-model')

exports.checkRecipesId = async (req, res, next) =>{
    try{
        const existRecipe = await Recipe.findById(req.params.id) 
        if(!existRecipe){
            next({status: 404, message: "not found recipe"})
        }else {
            req.recipe = existRecipe
            next()
        }
    }catch(err){
        next(err)
    }
}