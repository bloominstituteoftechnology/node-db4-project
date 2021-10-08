const db = require('../data/db-config')

const getRecipes = () => {
    return db('recipes')
}

const getRecipeById = async (recipe_id) => {
    const rows = await db('recipes as r')
        .leftJoin('steps as st', 'st.recipe_id', 'r.recipe_id')
        .leftJoin('steps_ingredients as si', 'st.step_id', 'si.step_id')
        .leftJoin('ingredients as i', 'i.ingredient_id', 'si.ingredient_id')
        .select(
            'r.recipe_id', 
            'r.recipe_name',
            'r.created_at', 
            'st.step_id', 
            'st.step_number',
            'st.step_instructions',
            'i.ingredient_id',
            'i.ingredient_name',
            'si.quantity_oz',
        )
        .orderBy("st.step_number")
        .where('r.recipe_id', recipe_id)

    const recipe = {
        recipe_id: rows[0].recipe_id,
        recipe_name: rows[0].recipe_name,
        created_at: rows[0].created_at,
        steps: []
    }

    rows.forEach(row => {
        if(row.step_id) {
            recipe.steps.push({
                step_id:row.step_id,
                step_number: row.step_number,
                step_instructions: row.step_instructions,
                ingredients: []
            })
        }
    })
    
    recipe.steps.forEach(row => {
        if(row.ingredient_id) {
            recipe.steps.ingredients.push({
                ingredient_id: row.ingredient_id,
                ingredient_name: row.ingredient_name,
                quantity_oz: row.quantity_oz
            })
        }
    })
    
 return recipe

}

module.exports = {
    getRecipes,
    getRecipeById
}
