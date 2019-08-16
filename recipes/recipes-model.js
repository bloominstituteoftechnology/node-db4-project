const db = require('../data/db-config.js');

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}

function getRecipes() {
    return db('recipes')
}

function getShoppingList(id) {
    /*
    select r.recipe_name, i.ingredient_name, ri.qaunity, ri.measurement
    from [recipe_ingredients] ri
    join [recipes] r
    join [ingredients] i
        on ri.recipe_id = r.id and ri.ingredient_id = i.id
        where r.id = 1
    */

    return db('recipe_ingredients as ri')
        .innerJoin('recipes as r', 'ri.recipe_id','r.id')
        .innerJoin('ingredients as i', 'ri.ingredient_id', 'i.id')
        .select('r.recipe_name', 'i.ingredient_name', 'ri.qaunity', 'ri.measurement')
        .where('r.id', id)
}

function getInstructions(id) {
    /*
    select r.recipe_name, s.step_number, s.instruction
    from [steps] s
    join [recipes] r
        on s.recipe_id = r.id
        where r.id = 1
    */

    return db('steps')
        // .innerJoin('recipes as r', 's.recipe_id', 'r.id')
        // .select('r.recipe_name', 's.step_number', 's.instruction')
        .where('recipe_id', id)
}