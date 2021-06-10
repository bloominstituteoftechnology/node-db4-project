const Recipes = require('./models')


const checkRecipeId = (req, res, next) => {
    Recipes.getRecipeById(req.params.id) 
        .then(recipe => {
            if (!recipe) {
                next({
                    status: 404,
                    message: `Hmmmst... recipe with id ${req.params.id} can't be found`
                })
            } else {
                req.recipe = recipe
                next()
            }
        })
        .catch(next)
}

module.exports = checkRecipeId