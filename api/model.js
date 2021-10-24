const db = require('../data/db-config')

async function getRecipesById(recipe_id) {


    const recipe = await db('recipes as re').where('re.recipe_id', recipe_id).select('re.recipe_name').first()

    const steps = await db('recipes as rec')
        .where('rec.recipe_id', recipe_id)
        .join('recipes_steps as bridge')
        .join('steps as st')
        .where('st.step_id', 'bridge.step_id')
        .select('st.step_number', 'st.step_instructions')
        .groupBy('st.step_number')

    const recipeStructure = {
        recipe,
        steps
    }
    console.log(steps)
    return recipeStructure
}

module.exports = {
    getRecipesById
}