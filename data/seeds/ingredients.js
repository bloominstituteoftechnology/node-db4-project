
exports.seed = function(knex) {
  return knex('ingredients').del()
    .then(function () {
      return knex('ingredients').insert([
        {ingredient_id: 1, ingredient_name: 'sugar'},
        {ingredient_id: 2, ingredient_name: 'spice'},
        {ingredient_id: 3, ingredient_name: 'everything nice'},
      ]);
    });
};
