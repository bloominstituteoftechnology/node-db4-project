const db = require("../../data/db-config")


const findRecipeById = async id => {
    const response = await db("recipes as r")
        .leftJoin('steps as st', 'r.recipe_id', 'st.recipe_id')
        .leftJoin('step_ingredients as si', 'st.step_id', 'si.step_id')
        .leftJoin('ingredients as i', 'si.ingredient_id', 'i.ingredient_id')
        .select('r.recipe_name', 'r.recipe_id','r.created_at', 'st.*', 'si.*', 'i.*')
        .where('r.recipe_id', id)

    if (!response.length) return false
    // return response
    return {
        recipe_id: id,
        recipe_name: response[0].recipe_name,
        created_at: response[0].created_at,
        steps: response[0].step_id
            ? response.map(res => ({
                step_id: res.step_id,
                step_number: res.step_number,
                step_instructions: res.step_instructions,
            }))
            : [],
        ingredients: response[0].ingredient_id
            ? response.map(res => ({
                ingredient_id: res.ingredient_id,
                ingredient_name: res.ingredient_name,
                quantity: res.quantity
            })) 
            : []
    }
}

module.exports = findRecipeById