exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("steps")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("steps").insert([
        {
          step_number: 1,
          step_instructions: "Preheat oven and melt butter",
          ingredients: 2,
          recipe: 1,
        },
        {
          step_number: 2,
          step_instructions: "Cover chicken with butter",
          ingredients: 3,
          quantity: 2,
          recipe: 1,
        },
        {
          step_number: 3,
          step_instructions: "Cook chicken in oven",
          recipe: 1,
        },
        {
          step_number: 1,
          step_instructions: "Heat oil",
          ingredients: 1,
          recipe: 2,
        },
        {
          step_number: 2,
          step_instructions: "Drop in chicken",
          ingredients: 3,
          quantity: 2,
          recipe: 2,
        },
        {
          step_number: 3,
          step_instructions: "Dry with paper towel",
          recipe: 2,
        },
        {
          step_number: 1,
          step_instructions: "Boil rice",
          ingredients: 4,
          quantity: 3,
          recipe: 3,
        },
        {
          step_number: 2,
          step_instructions: "Dice chicken",
          ingredients: 3,
          recipe: 3,
        },
        {
          step_number: 3,
          step_instructions: "Cook chicken then combine",
          recipe: 3,
        },
      ]);
    });
};
