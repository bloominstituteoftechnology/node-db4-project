
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient_id: 1, ingredient: 'bread'},
        {ingredient_id: 2, ingredient: 'peanutbutter'},
        {ingredient_id: 3, ingredient: 'jelly'}
      ]);
    });
};
