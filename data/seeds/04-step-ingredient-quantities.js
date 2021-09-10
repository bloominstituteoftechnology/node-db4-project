
exports.seed = function(knex, promise) {
      // Inserts seed entries
      return knex('step_ingredient_quantities').insert([
        {quantity: 2, ingredient_id: 1, recipe_step_id:1},
        {quantity: 10, ingredient_id: 2, recipe_step_id: 2},
        {quantity: 12, ingredient_id: 3, recipe_step_id: 3},
        {quantity: 45, ingredient_id: 4, recipe_step_id: 5},
        {quantity: 90, ingredient_id: 5, recipe_step_id: 6}
      ]);
};
