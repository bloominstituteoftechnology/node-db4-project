const db = require('../../data/db-config')

function getRecipes() {
    return db('recipes')
}

async function getRecipeById(recipe_id) {
   const recipe = await db
        .select('recipe_name',
            'created_at',
            's.step_id',
            'step_number',
            'step_text',
            'i.ingredient_id',
            'ingredient_quantity',
            'ingredient_name')
        .from('recipes AS r')
        .join('steps AS s', 'r.recipe_id', 's.recipe_id')
        .leftJoin('step_ingredients AS si', 's.step_id', 'si.step_id')
        .leftJoin('ingredients AS i', 'si.ingredient_id', 'i.ingredient_id')
        .where('r.recipe_id', recipe_id)
        .orderBy('s.step_id')

    return ({
        recipe_id: recipe.recipe_id,
        recipe_name: recipe.recipe_name,
        created_at: recipe.created_at,
        steps: recipe.map(rec => {
            return({
                step_id: rec.step_id,
                step_number: rec.step_number,
                step_instructions: rec.step_text,
                ingredients: {
                    ingredient_id: rec.ingredient_id,
                    ingredient_name: rec.ingredient_name,
                    quantity: rec.ingredient_quantity
                }
            })
        })
    })
}

module.exports = {
    getRecipes,
    getRecipeById
}
