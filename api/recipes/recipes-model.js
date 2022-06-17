const db = require('../../data/db-config');

exports.getRecipeById = function(recipe_id) {
  return db('recipes')
    .where('recipes.id',recipe_id)
    .select('steps.id').as('step_id')
    .select(db.raw(`recipes.id as 'rid'`))
    .select('recipes.recipe_name',
           'steps.step_instructions',
          'steps.step_number',
          'amounts.amount',
          'amounts.ingredient_id',
          'ingredients.ingredient_name',
          'recipes.created_at')
    .leftJoin('steps','recipes.id','=','steps.recipe_id')
    .leftJoin('amounts','amounts.step_id','=','steps.id')
    .leftJoin('ingredients','amounts.ingredient_id','=','ingredients.id')
    .then(arr => {

      console.log(arr);

      const make_cake_bake = {};

      let i = 0;
      while(arr[i].rid != recipe_id) {
        i++;
      }   
 
      make_cake_bake.recipe_id = recipe_id;
      make_cake_bake.recipe_name = arr[i].recipe_name;
      make_cake_bake.created_at = arr[i].created_at;
      make_cake_bake.steps = [];

      const passed_steps = {};
      let next_step = {};


      for (let i = 0; i < arr.length; i++) {
        next_step = {};
        if (!passed_steps.hasOwnProperty(arr[i].step_number) && arr[i].rid == recipe_id) {
          passed_steps[arr[i].step_number] = 1;

          next_step.step_id = arr[i].id;
          next_step.step_instructions = arr[i].step_instructions;
          next_step.step_number = arr[i].step_number;
          next_step.ingredients = [];
          
          let passed_ingredients = {};
          let next_ingredient = {};

          for (let j = 0; j < arr.length; j++) {
            next_ingredient = {};
            if (arr[j].ingredient_id && !passed_ingredients.hasOwnProperty(arr[j].ingredient_id) && arr[j].id === arr[i].id) {
              passed_ingredients[arr[j].ingredient_id] = 1;
              next_ingredient.ingredient_id = arr[j].ingredient_id;
              next_ingredient.ingredient_name = arr[j].ingredient_name;
              next_ingredient.quantity = arr[j].amount;
        
              next_step.ingredients.push(next_ingredient);
            }
          }
 
          make_cake_bake.steps.push(next_step);  
        }
      }


      return make_cake_bake;
    })
   
};
