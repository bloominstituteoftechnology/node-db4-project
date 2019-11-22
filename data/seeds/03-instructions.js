exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions').insert([
    {
      instructions_id: 1,
      recipe_id: 1,
      step: "Heat pan and put in 1 tbsp butter",
      step_number: 1
    },
    {
      instructions_id: 2,
      recipe_id: 1,
      step: "Toast 2 slices of bread in butter",
      step_number: 2
    },
    {
      instructions_id: 3,
      recipe_id: 1,
      step: "Put bread on plate and place cheese between slices",
      step_number: 3
    },
    {
      instructions_id: 4,
      recipe_id: 1,
      step: "Wait for cheese to melt, and enjoy!",
      step_number: 4
    },
    {
      instructions_id: 5,
      recipe_id: 2,
      step: "Heat pan on medium-low heat",
      step_number: 1
    },
    {
      instructions_id: 6,
      recipe_id: 2,
      step: "Place 6 strips of bacon in pan and cook until crispy",
      step_number: 2
    },
    {
      instructions_id: 7,
      recipe_id: 2,
      step: "Clean pan and melt butter on medium-low heat",
      step_number: 3
    },
    {
      instructions_id: 8,
      recipe_id: 2,
      step: "Whisk three eggs in a bowl",
      step_number: 4
    },
    {
      instructions_id: 9,
      recipe_id: 2,
      step: "Cook eggs in buttered pan until fluffy",
      step_number: 5
    },
    {
      instructions_id: 10,
      recipe_id: 2,
      step: "Enjoy!",
      step_number: 6
    },

  ]);
};

