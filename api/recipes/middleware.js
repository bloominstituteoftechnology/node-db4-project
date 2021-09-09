const findById = require("./modal")

const verifyRecipeId = (req, res, next) => {
    const { id } = req.params
    findById(id).then(recipe => {
        req.recipe = recipe
        next()
    }).catch(next)
}

module.exports = verifyRecipeId