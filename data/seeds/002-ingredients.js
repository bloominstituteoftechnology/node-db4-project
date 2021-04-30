
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, ingredient_name: 'eggs', quantity: 2},
        {id: 2, ingredient_name: 'milk', quantity: 1},
        {id: 3, ingredient_name: 'butter', quantity: 1},
        {id: 4, ingredient_name: 'salt', quantity: 1},
        {id: 5, ingredient_name: 'pepper', quantity: 1}
      ]);
    });
};
