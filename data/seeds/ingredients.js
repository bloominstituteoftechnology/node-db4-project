
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient_name: 'canned pineapple'},
        {ingredient_name: 'old bananas'},
        {ingredient_name: 'oil, lots of oil'}
      ]);
    });
};
