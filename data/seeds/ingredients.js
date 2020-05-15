
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1,  ingredient_name: 'canned pineapple'},
        { id: 2, ingredient_name: 'old bananas'},
        { id: 3, ingredient_name: 'oil, lots of oil'}
      ]);
    });
};
