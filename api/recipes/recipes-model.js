const db = require('../data/db-config.js')

function getRecipes() {
    return debug('recipes')
}

module.exports = {
    getRecipes,
}