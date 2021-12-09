exports.seed = async function(knex) {
    return knex('steps').insert([   
      { step_number: '1', step_instructions: "preheat oven to 400 degrees" },
      { step_number: '2', step_instructions: "add red sauce to pizza" },
      { step_number: '3', step_instructions: "add cheese to pizza" },
      { step_number: '4', step_instructions: "cook in oven for 8 min" },
      { step_number: '1', step_instructions: "heat pan on medium" },
      { step_number: '2', step_instructions: "cook meat for 6 min" },
      { step_number: '3', step_instructions: "add toppings" },
      { step_number: '4', step_instructions: "fold tacos" },
    ]);
  };