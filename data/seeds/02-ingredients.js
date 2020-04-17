
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {recipe_id: 1, ingredient_name: 'flour', quantity: 1},
        {recipe_id: 1, ingredient_name: 'cheese', quantity: 2},
        {recipe_id: 1, ingredient_name: 'pepperoni', quantity: 3},
        {recipe_id: 1, ingredient_name: 'yeast', quantity: 4},
        {recipe_id: 1, ingredient_name: 'water', quantity: 5},
        {recipe_id: 2, ingredient_name: 'yeast', quantity: 4},
        {recipe_id: 2, ingredient_name: 'water', quantity: 5},
        {recipe_id: 2, ingredient_name: 'hops', quantity: 6},
        {recipe_id: 2, ingredient_name: 'barley', quantity: 7},
      ]);
    });
};
