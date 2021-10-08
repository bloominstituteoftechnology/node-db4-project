const Recipes = require('./models/recipe-model');

const checkRecipeId = async (req, res, next) => {
    try {
        const validRecipeId = await Recipes.getRecipeById(req.params.recipe_id);

        if(!validRecipeId){
            next({ status: 404, message: `recipe with recipe_id ${req.params.recipe_id} not found` });
        } else {
            req.recipe = validRecipeId;
            next();
        }
    }
    catch(err){
        next(err);
    }
}

const checkRecipeName = async (req, res, next) => {
    try {
        const recipeName = req.body.recipe_name;

        if(typeof recipeName !== 'string' || !recipeName || recipeName === null){
            next({
                status:400,
                message: 'Invalid recipe name'
            })
        } else {
            next();
        }
    }
    catch(err){
        next(err);
    }
}

module.exports = {
    checkRecipeId,
    checkRecipeName
}
