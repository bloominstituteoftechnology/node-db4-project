const { getRecipeById } = require("../model/model")

const checkRecipeId = () => {
    return async (req, res, next) => {
        try {
            const recipe = await getRecipeById(req.params.id)
            if(!recipe){
                return res.status(404).json({
                    message: `Recipe with id ${req.params.id} not found`
                })
            } else {
                req.recipe = recipe
                next()
            }
        } catch(err){
            next(err)
        }
    }
}

module.exports = { checkRecipeId }