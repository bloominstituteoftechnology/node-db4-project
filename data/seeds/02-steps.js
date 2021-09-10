exports.seed = function(knex, Promise) {
    return knex('steps').insert([
      { step_number: 1, step_instructions: "Mix Whooped-Cream And Boston", recipe_id: 1 },
      { step_number: 2, step_instructions: "Deep-Fry For 90:Minutes", recipe_id: 2 },
      { step_number: 1, step_instructions: "Open To The Letter 'P' In The Dictionary", recipe_id: 1 },
      { step_number: 2, step_instructions: "Eat The Page", recipe_id: 2 },
    ]);
};