
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {recipe_name: 'Cereal'},
        {recipe_name: 'Ham Sandwich'},
        {recipe_name: 'Avocado Toast'}
      ]);
    });
};
