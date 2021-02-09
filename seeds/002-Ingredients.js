
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('Ingredients').insert([
        {name: 'Water'},
        {name: 'Ground Coffee'},
        {name: 'Cereal'},
        {name: 'Milk'},
        {name: 'Eggs'}
      ]);
    });
};
