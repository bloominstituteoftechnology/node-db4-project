
exports.seed = function(knex) {
  return knex('steps').del()
    .then(function () {
      return knex('steps').insert([
        {
          step_id: 1, 
          recipe_id: 1, 
          step_number: 1, 
          step_instructions: "go to step 2"
        },
        {
          step_id: 2, 
          recipe_id: 1, 
          step_number: 2, 
          step_instructions: "use ingredients"
        },
      ]);
    });
};
