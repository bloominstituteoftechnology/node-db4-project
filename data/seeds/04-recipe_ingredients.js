exports.seed = function(knex, Promise) {
  return knex('recipe_ingredients').insert([
    { id: 1, recipe_id: 1, ingredient_id: 1, quantity: 2.4},
    { id: 2, recipe_id: 1, ingredient_id: 2, quantity: 1},
    { id: 3, recipe_id: 1, ingredient_id: 3, quantity: 0.6},
    { id: 4, recipe_id: 2, ingredient_id: 1, quantity: 4},
    { id: 5, recipe_id: 2, ingredient_id: 5, quantity: 2},
    { id: 6, recipe_id: 3, ingredient_id: 5, quantity: 1},
    { id: 7, recipe_id: 3, ingredient_id: 2, quantity: 0.5}
  ])
}

