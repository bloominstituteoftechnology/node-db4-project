
exports.seed = function(knex) {
      return knex('step_ingredients').insert([
        {
          step_id: 1,
          ingredients_id: 1 
        },
        {
          step_id: 2,
          ingredients_id: 2 
        },
        {
          step_id: 3,
          ingredients_id: 3 
        }
      ]);
}

