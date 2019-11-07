
exports.seed = function(knex) {
  // Deletes ALL existing entries
      // Inserts seed entries
      return knex('recipes_and_ingredients').insert([
        {recipes_id: 1, ingredients_id: 1, quantity: 5},
        {recipes_id: 1, ingredients_id: 2, quantity: 5},
        {recipes_id: 2, ingredients_id: 3, quantity: 5}
      ]);
};
