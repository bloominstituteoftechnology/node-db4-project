exports.seed = function (knex) {
  return knex("instructions").insert([
    {
      id: 1,
      recipe_id: 1,
      step: "Heat pan and put in 1 tbsp butter",
      step_number: 1,
    },
    {
      id: 2,
      recipe_id: 1,
      step: "Toast 2 slices of bread in butter",
      step_number: 2,
    },
    {
      id: 3,
      recipe_id: 1,
      step: "Put bread on plate and place cheese between slices",
      step_number: 3,
    },
    {
      id: 4,
      recipe_id: 1,
      step: "Wait for cheese to melt, and enjoy!",
      step_number: 4,
    },
    {
      id: 5,
      recipe_id: 2,
      step: "Heat pan on medium-low heat",
      step_number: 1,
    },
    {
      id: 6,
      recipe_id: 2,
      step: "Place 6 strips of bacon in pan and cook until crispy",
      step_number: 2,
    },
    {
      id: 7,
      recipe_id: 2,
      step: "Clean pan and melt butter on medium-low heat",
      step_number: 3,
    },
    {
      id: 8,
      recipe_id: 2,
      step: "Whisk three eggs in a bowl",
      step_number: 4,
    },
    {
      id: 9,
      recipe_id: 2,
      step: "Cook eggs in buttered pan until fluffy",
      step_number: 5,
    },
    {
      id: 10,
      recipe_id: 2,
      step: "Enjoy!",
      step_number: 6,
    },
  ]);
};
