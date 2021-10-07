
exports.seed = function(knex) {
      return knex('steps').insert([
        {
         recipe_id: 1,
         step_number: 1,
         step_instructions: 'mix all ingredients in bowl'
        },
        {
          recipe_id: 1,
          step_number: 2,
          step_instructions: 'put the mix in cooky like shapes on a tray'
        },
        {
          recipe_id: 1,
          step_number: 2,
          step_instructions: 'put the tray in the oven for 1 hour and 45 mins. at 350F'
        }
      ]);
};

