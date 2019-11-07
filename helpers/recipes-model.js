const db = require('../data/dbconfig.js')

module.exports = {
    getRecipes,
    getShoppingList,
}

function getRecipes(){
    return db('recipes')
}

