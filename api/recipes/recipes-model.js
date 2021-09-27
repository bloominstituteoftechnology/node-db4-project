const db = require('../../data/db-config')

async function getRecipeById(recipe_id) {
    const rows = await db("recipes as r")
        .leftJoin("steps as st", "st.recipe_id","r.recipe_id")
        .leftJoin("step_ingredients as st_ing", "st.step_number", "st_ing.step_id")
        .leftJoin("ingredients as ing", "ing.ingredient_id", "st_ing.ingredient_id")
        .select("r.recipe_id","r.recipe_name","st.step_id","st.step_number","st.instructions", "ing.ingredient_id", "ing.name as ing_name", "st_ing.quantity", "st_ing.measurement")
        .where("r.recipe_id", recipe_id)
        .orderBy("st.step_number")

    const recipe = {
        recipe_id: rows[0].recipe_id,
        recipe_name: rows[0].recipe_name,
        steps: []
    }

    rows.forEach(row => {
        if(recipe.steps.length !== row.step_number) {

            recipe.steps.push({
                step_instructions: row.instructions,
                step_id: row.step_id,
                step_number: row.step_number,
                ingredients: []
            })
        }


    })

    recipe.steps.forEach(step => {
        rows.forEach(row => {
            if(row.step_number === step.step_number && row.ingredient_id !== null) {
                step.ingredients.push({
                    ingredient_id: row.ingredient_id,
                    ingredient_name: row.name,
                    quantity: row.quantity + " " + row.measurement
                })
            }
        })
    })


    return recipe
}

module.exports = {
    getRecipeById
}