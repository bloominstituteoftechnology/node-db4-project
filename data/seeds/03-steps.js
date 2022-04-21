exports.seed = function(knex, Promise) {
    return knex('steps').insert([   
      { step_instructions: 'heat pan', step_number: 1, recipe_id: 1 },
      { step_instructions: 'cook rice', step_number: 2, recipe_id: 1 },
      { step_instructions: 'add chicken and bok choy to pan and cook', step_number: 3, recipe_id: 1 },

      { step_instructions: 'marinate pork', step_number: 1, recipe_id: 2 },
      { step_instructions: 'fry egg', step_number: 2, recipe_id: 2 },
      { step_instructions: 'combine ingredients', step_number: 3, recipe_id: 2 },

      { step_instructions: 'toast bread', step_number: 1, recipe_id: 3 },
      { step_instructions: 'fry egg and bacon. add to bread', step_number: 2, recipe_id: 3 },

    ]);
  };