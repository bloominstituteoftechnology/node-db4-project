
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {
          step_number: 1, 
          step_instructions: 'Take big size potatoes', 
          recipe_id: 1 
        },
        {
          step_number: 2, 
          step_instructions: 'Cut it with the help of knife', 
          recipe_id: 1 
        },
        {
          step_number: 3, 
          step_instructions: 'Fry in oil till crispy', 
          recipe_id: 1 
        },
        {
          step_number: 4, 
          step_instructions: 'Sprinkle salt and black pepper to taste', 
          recipe_id: 1 
        },
        {
          step_number: 1, 
          step_instructions: 'Place eggs in a single layer in a large pan', 
          recipe_id: 2
        },
        {
          step_number: 2, 
          step_instructions: 'add enough cold water to cover by 1 inch', 
          recipe_id: 2
        },
        {
          step_number: 3, 
          step_instructions: 'Cover and quickly bring it to a boil', 
          recipe_id: 2
        },
        {
          step_number: 4, 
          step_instructions: 'Remove from the heat. Let stand for 15 minutes', 
          recipe_id: 2
        },
        {
          step_number: 5, 
          step_instructions: 'Rinse eggs in cold water and place in ice water until completely cooled. Drain and remove the shells', 
          recipe_id: 2
        },
        {
          step_number: 6, 
          step_instructions: 'Sprinkle some salt and pepper', 
          recipe_id: 2
        },
        {
          step_number: 1, 
          step_instructions: 'Grab an empty bowl', 
          recipe_id: 3
        },
        {
          step_number: 2, 
          step_instructions: 'Pour in cereal', 
          recipe_id: 3
        },
        {
          step_number: 3, 
          step_instructions: 'Pour in milk', 
          recipe_id: 3
        },
        {
          step_number: 4, 
          step_instructions: 'Grab spoon and enjoy', 
          recipe_id: 3
        },
      ]);
    });
};
