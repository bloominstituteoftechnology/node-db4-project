exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('steps').truncate()
      .then(function () {
        // Inserts seed entries
        return knex('steps').insert([
          {step_instruction: "Fill pot with water and salt generously, then set to boil", step_number: 1, recipe_id: 1},
          {step_instruction: "Set rice to cook on medium heat for 15 minutes, and set aside pomegranate molasses and pine nuts.", step_number: 2, recipe_id: 1},
          {step_instruction: "Remove rice, drain, and fluff. Drizzle with pomegranate molasses.", step_number: 3, recipe_id: 1},
          {step_instruction: "Set milk to boil at medium heat, being careful not to boil and curdle", step_number: 1, recipe_id: 2},
          {step_instruction: "Once milk has begun to simmer, slowly whisk in a generous serving of wheat cereal", step_number: 2, recipe_id: 2},
        ]);
      });
  };