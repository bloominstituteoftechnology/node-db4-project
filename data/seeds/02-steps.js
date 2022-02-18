
exports.seed = function(knex) {
  return knex('steps').insert([
    { step_number: 1, instructions: 'Preheat oven to 350 degrees.', recipe_id: 1},
    { step_number: 2, instructions: 'Mix butter, sugar, peanut butter and eggs.', recipe_id: 1},
    { step_number: 3, instructions: 'Add dry ingredients, and mix.', recipe_id: 1},
    { step_number: 4, instructions: 'Spoon onto cookie sheet and bake for 12 minutes.', recipe_id: 1},
    { step_number: 1, instructions: 'In a blender add desired fruits.', recipe_id: 2},
    { step_number: 2, instructions: 'Add in almond milk or water.', recipe_id: 2},
    { step_number: 3, instructions: 'Blend until it is all mixed in.', recipe_id: 2},
    { step_number: 1, instructions: 'In a bowl add ingredients and mix.', recipe_id: 3},
    { step_number: 2, instructions: 'Ready to serve!', recipe_id: 3},
    { step_number: 1, instructions: 'Mix milk and chocolate powder in a cup.', recipe_id: 4},
    { step_number: 2, instructions: 'Ready to drink!', recipe_id: 4}
  ])
};
