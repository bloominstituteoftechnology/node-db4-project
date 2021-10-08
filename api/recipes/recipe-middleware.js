const Recipes = require('./recipe-model');

const checkRecipeId = async (req, res, next) => {
    try {
        const validRecipeId = await Recipes.getRecipeById(req.params.recipe_id);

        if(!validRecipeId){
            next({ status: 404, message: `recipe with recipe_id ${req.params.recipe_id} not found` });
        } else {
            next();
        }
    }
    catch(err){
        next(err);
    }
}
module.exports = {
    checkRecipeId
}
