
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredient_quantity').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredient_quantity').insert([
        {amount: '1 pair', recipe_ingredient_id: 1},
        {amount: '1 - 2', recipe_ingredient_id: 2},
        {amount: '1 - 2', recipe_ingredient_id: 2},
      ]);
    });
};
