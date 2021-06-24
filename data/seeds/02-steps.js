
exports.seed = function(knex, Promise) {
    return knex('steps').insert([
      { step_number: 1, step_instructions: "Grab pot", recipe_id: 1 }, 
      { step_number: 2, step_instructions: "Boil water", recipe_id: 1 }, 
      { step_number: 3, step_instructions: "Eat food", recipe_id: 1 }
    ]);
  };