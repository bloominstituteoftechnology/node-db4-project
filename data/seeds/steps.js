exports.seed = function (knex, Promise) {
    return knex('steps').insert([
      { 
        step_instructions: "Put a large saucepan on a medium heat", 
        step_number:1,
        recipe_id: 1,
      },
      {
        step_instructions: "Add 1 tbsp olive oil", 
        step_number:2,
        recipe_id: 1,
      },
      {
        step_instructions: "Add sausage", 
        step_number:2,
        recipe_id: 1,
      }
    ]);
  };