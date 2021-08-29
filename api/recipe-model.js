const db = require("../data/dbConfig.js")

const getRecipes = () => {
    return db("recipes")
}

const getRecipeById = (id) => {
    return db('recipes').where({ id }).first()
}


module.exports = {
    getRecipes,
    getRecipeById
}