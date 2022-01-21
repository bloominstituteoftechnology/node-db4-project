const db = require('../data/db-config')

async function getRecipeById(recipe_id){
    const data = await db('steps as s')
        .leftJoin('recipes as r', 's.recipe_id', 'r.recipe_id')
        .leftJoin('step_ingredients as si', 'si.step_id', 's.step_id')
        .leftJoin('ingredients as i', 'si.ingredient_id', 'i.ingredient_id')
        .select('r.recipe_id','recipe_name','s.step_id',  'step_number', 'instructions', 'ingredient_name', 'quantity','si.ingredient_id')
        .where('r.recipe_id', recipe_id)

    const newObject = {
        recipe_id:data[0].recipe_id,
        recipe_name:data[0].recipe_name,
        steps : data.reduce((steps, step) => {
            console.log('steps', steps)
            console.log('step', step)
            const { 
                step_id, 
                step_number, 
                instructions, 
                ingredient_name,
                quantity,
                ingredient_id } = step
            return steps.concat({ 
                step_id, 
                step_number, 
                instructions, 
                ingredients: {
                    ingredient_id,
                    ingredient_name,
                    quantity
                }
            })
          }, []),
    }

    return newObject
}


// select recipe_id,recipe_name, step_number, instructions, ingredient_name, quantity
//    from steps as s 
//    left join recipes as r
//        on s.recipe_id = r.recipe_id
//    left join step_ingredients as si
//        on si.step_id = s.step_id
//    left join ingredients as i
//        on si.ingredient_id = i.ingredient_id
//    where r.recipe_id = 1
    

module.exports = {
    getRecipeById
}