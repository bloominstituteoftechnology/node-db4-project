
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, ingredient_name: 'eggs'},
        {id: 2, ingredient_name: 'milk'},
        {id: 3, ingredient_name: 'butter'},
        {id: 4, ingredient_name: 'salt'},
        {id: 5, ingredient_name: 'pepper'}
      ]);
    });
};
