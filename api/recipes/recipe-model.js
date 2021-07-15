const db = require('../../data/db-config')

async function findById(recipe_id) {
    if (typeof(recipe_id) !== "number") {
        recipe_id = parseInt(recipe_id);
    }
    let returnRecipe = await db('recipes')
        .where({ recipe_id })
        .first();
    
    returnRecipe.steps = await findSteps(recipe_id);

    return returnRecipe;
}


async function findSteps(recipe_id) {
    return await db('steps')
    .where( { recipe_id })
    .orderBy('step_number', 'asc');
}

module.exports = {
    findById,
    findSteps,
  }