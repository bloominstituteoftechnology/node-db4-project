
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {
          step: "Fire up the grill",
          step_order: 1,
          recipe_id: 1
        },
        {
          step: "Heat for 15mins",
          step_order: 2,
          recipe_id: 1
        },
        {
          step: "add ingredient",
          step_order: 3,
          recipe_id: 1
        },
        {
          step: "add more ingredient",
          step_order: 4,
          recipe_id: 1
        },
    
        { step: "Boil water for 30 mins.", step_order: 1, recipe_id: 2 },
        {
          step: "Add noodles to boiling water",
          step_order: 2,
          recipe_id: 2
        },
        {
          step: "Let noodles boil for 10 mins",
          step_order: 3,
          recipe_id: 2
        },
        {
          step: "While noodles are boiling lets prep our cheese sauce",
          step_order: 4,
          recipe_id: 2
        },
        {
          step: "Batter eggs",
          step_order: 5,
          recipe_id: 2
        },
        {
          step: "Add milk to eggs",
          step_order: 6,
          recipe_id: 2
        },
        {
          step: "Top it off with cheese of your choice.",
          step_order: 7,
          recipe_id: 2
        }
      ]);
    });
};
