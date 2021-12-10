exports.seed = async function(knex) {
    return knex('steps').insert([   
      { step_number: 1, step_instructions: "preheat oven to 400 degrees", recipe_id: 1 },
      { step_number: 2, step_instructions: "add red sauce to pizza", recipe_id: 1 },
      { step_number: 3, step_instructions: "add cheese to pizza", recipe_id: 1 },
      { step_number: 4, step_instructions: "cook in oven for 8 min", recipe_id: 1 },
      { step_number: 1, step_instructions: "heat pan on medium", recipe_id: 2 },
      { step_number: 2, step_instructions: "cook meat for 6 min", recipe_id: 2 },
      { step_number: 3, step_instructions: "add toppings", recipe_id: 2 },
      { step_number: 4, step_instructions: "fold tacos", recipe_id: 2 },
    ]);
  };