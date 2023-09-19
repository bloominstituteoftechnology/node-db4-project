exports.seed = function(knex, Promise) {
  return knex('steps').insert([   
    { step_number: 1, step_instructions: "gather ingredients", recipe_id: 1 },
    { step_number: 2, step_instructions: "combine ingredients", recipe_id: 1}
  ]);
};
