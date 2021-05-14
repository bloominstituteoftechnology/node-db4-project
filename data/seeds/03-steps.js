exports.seed = function(knex, Promise) {
    return knex('steps').insert([
      // recipe_id must match valid recipe
      { step_instructions: "Flatten pizza dough", step_number: 1, recipe_id: 1 },
      { step_instructions: "Spread sauce on dough", step_number: 2, recipe_id: 1 },
      { step_instructions: "Sprinkle cheese all around pizza", step_number: 3, recipe_id: 1 },
      { step_instructions: "Place pepperoni evenly", step_number: 4, recipe_id: 1 },
      { step_instructions: "Place in oven at 425 degrees", step_number: 5, recipe_id: 1 },
      { step_instructions: "Place cereal in bowl", step_number: 1, recipe_id: 2 },
      { step_instructions: "Add milk", step_number: 2, recipe_id: 2 },
      { step_instructions: "butter a side of each slide of bread", step_number: 1, recipe_id: 3 },
      { step_instructions: "Place sliced cheese between unbuttered slices of bread", step_number: 2, recipe_id: 3 },
      { step_instructions: "Cook in pan on medium heat. Flip after a few.", step_number: 3, recipe_id: 3 },
      { step_instructions: "Enjoy the cheesy goodness", step_number: 4, recipe_id: 3 }
    ]);
  };