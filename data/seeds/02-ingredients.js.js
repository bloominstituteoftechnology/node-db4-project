
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient_id: 1, ingredient_name: 'flour'},
        {ingredient_id: 2, ingredient_name: 'beef'},
        {ingredient_id: 3, ingredient_name: 'pancake mix'}
      ]);
    });
};
