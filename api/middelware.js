const db = require('../data/db-config')

const checkRecipeId = async (req, res, next) => {
    try{
        const existing = await db('recipe').where('recipe_id', req.params.recipe_id)
        .first()

        if(!existing){
            next({
                status: 404,
                message: `recipe with recipe id ${req.params.recipe_id} not found`
            })
        }else {
            next()
        }
    }catch(err){
        next(err)
    }
}

module.exports = {
    checkRecipeId
}