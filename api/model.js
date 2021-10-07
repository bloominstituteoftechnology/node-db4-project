const db = require('../data/db-config')

const getRecipes = () => {
    return db('recipes')
}

const getRecipeById = async (id) => {
    const rows = await db('recipies as r')
        .leftJoin('steps as st', 'st.recipe_id', 'r.recipe_id')
        .leftJoin('step_ingredients as si', 'st.step_number', 'si.step_number')
        .leftJoin('ingredients as i', 'i.ingredient_id', 'si.ingredient_id')
}

module.exports = {
    getRecipes,
    getRecipeById
}
