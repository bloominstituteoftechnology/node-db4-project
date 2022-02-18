
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {step_number: 1, step_instructions: 'place cheese between bread', recipe_id: 1},
        {step_number: 2, step_instructions: 'grill sandwich on skillet for 3 mins on each side', recipe_id: 1},
        {step_number: 1, step_instructions: 'sprinkle salt and pepper on chicken', recipe_id: 2},
        {step_number: 2, step_instructions: 'bake in oven for 20 mins at 350 degrees', recipe_id: 2},
        {step_number: 1, step_instructions: 'bake chicken for 20 mins at 350 degrees', recipe_id: 3},
        {step_number: 2, step_instructions: 'toss lettuce, add chicken, and drizzle dressing', recipe_id: 3},
        {step_number: 1, step_instructions: 'boil macaroni in water for 12 mins', recipe_id: 4},
        {step_number: 2, step_instructions: 'drain macaroni, place in baking tray and sprinkle cheese over', recipe_id: 4},
        {step_number: 3, step_instructions: 'bake for 35 mins at 350 degrees', recipe_id: 4}
      ]);
    });
};
