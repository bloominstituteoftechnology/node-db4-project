const db = require('../../data/db-config')

function getRecipeById(recipe_id) {
    return Promise.resolve(` awesome recipe ${recipe_id}`)
}

module.exports = {getRecipeById}