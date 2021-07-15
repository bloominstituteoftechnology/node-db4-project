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
    let returnSteps = await db('steps')
    .where( { recipe_id })
    .orderBy('step_number', 'asc');

    let ingredientSteps = await db('ingredient_steps');
    for (let i=0; i < returnSteps.length; i++) {
      returnSteps[i].ingredients=[];
      const checkFor = returnSteps[i].step_id;
  
      ingredientSteps.forEach((item) => {
        if (item.step_id === checkFor) {
          returnSteps[i].ingredients.push(item);
        }
      })
    }
  
    return returnSteps;
}

module.exports = {
    findById,
    findSteps,
  }