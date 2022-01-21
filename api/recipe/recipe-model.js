const db = require('../../data/db-config')

const getRecipeById = async recipe_id => {

    const recipeRows = await db('recipes as r')
        .where('recipe_id', recipe_id)

    const ingreds = await db('step_ingredients AS si')
        .join("ingredients AS i", 'i.ingredient_id', 'si.ingredient_id')
        .join('steps AS s', 's.step_id','si.step_id')
        .where('s.recipe_id', 1)

    const steps = await db('steps AS s')
        .join('recipes AS r', 'r.recipe_id', 's.recipe_id')
        // .select('r.recipe_id', 'r.recipe_name')
        .where('r.recipe_id', recipe_id)
        .orderBy('s.step_number')


    const ingredients = ingreds.map(ingreds => {
        return ({
            ingredient_id: ingreds.ingredient_id,
            ingredient_name: ingreds.ingredient_name,
            quantity: ingreds.quantity
        })
    })

    const stepMap = steps.map(step => {
        return ({
            step_id: step.step_id,
            step_number: step.step_number,
            step_instructions: step.step_text,
            ingredients: !ingredients ? [] : ingredients
        })
    })

    const result = {
        recipe_id: steps[0].recipe_id,
        recipe_name: steps[0].recipe_name,
        steps: stepMap
    }
    return result

}










module.exports = {
    getRecipeById
}