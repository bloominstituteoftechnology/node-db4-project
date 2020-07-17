
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Ingredients').insert([
        {name: 'Water'},
        {name: 'Bread'},
        {name: 'Eggs'}
      ]);
    });
};
