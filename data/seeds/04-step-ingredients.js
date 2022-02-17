exports.seed = function (knex, Promise) {
  return knex('step_ingredients').insert([
    { quantity: '10', recipe_id: '1', step_id: '2', ingredient_id: '1' },
    { quantity: '15 oz', recipe_id: '1', step_id: '2', ingredient_id: '2' },
    { quantity: '1 tsp', recipe_id: '1', step_id: '2', ingredient_id: '3' },
    {
      quantity: '4 cups, shredded',
      recipe_id: '1',
      step_id: '2',
      ingredient_id: '4',
    },
    { quantity: '5 0z', recipe_id: '1', step_id: '2', ingredient_id: '5' },

    { quantity: '32 oz', recipe_id: '2', step_id: '6', ingredient_id: '6' },
    { quantity: '1 cup', recipe_id: '2', step_id: '7', ingredient_id: '7' },
    { quantity: '10.5oz', recipe_id: '2', step_id: '7', ingredient_id: '8' },
    { quantity: '1 tsp', recipe_id: '2', step_id: '7', ingredient_id: '9' },
    {
      quantity: '2 cups, shredded',
      recipe_id: '2',
      step_id: '8',
      ingredient_id: '10',
    },
  ]);
};
