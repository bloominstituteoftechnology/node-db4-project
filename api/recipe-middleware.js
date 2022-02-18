const db = require('../data/db-config')

module.exports = {
    async checkId(req, res, next) {
        const recipe = await db('recipes').where('id', req.params.recipe_id).first()
        if (recipe) {
            next()
        } else {
            next({message: 'Could not find recipe with given id', status: 404})
        }
    }
}