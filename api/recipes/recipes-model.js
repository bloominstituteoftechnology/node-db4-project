const db =  require('../../data/db-config')

module.exports = {
    getRecipeById,
}

async function getRecipeById() {
    // return "getRecipeById"
    return db('recipes')
}