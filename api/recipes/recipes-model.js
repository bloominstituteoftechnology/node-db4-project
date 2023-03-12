const db = require(`../../data/db-config`)

const getRecipeById = async (recipe_id) => {
    const recipeRows = await db(`recipes as r`).where(`recipe_id`, recipe_id)
    return recipeRows
}

module.exports = {
    getRecipeById
}