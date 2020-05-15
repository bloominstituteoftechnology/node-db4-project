
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('measurements').del()
    .then(function () {
      // Inserts seed entries
      return knex('measurements').insert([
        { id: 1, quantity: 1, recipe_id: 1, ingredients_id: 1 },
        { id: 2, quantity: 1, recipe_id: 1, ingredients_id: 2 },
        { id: 3, quantity: 5, recipe_id: 2, ingredients_id: 3 },
      ]);
    });
};
