
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {recipe_id: 3, description: 'mix chocolate, flour, sugar. bake.'},
        {recipe_id: 2, description: 'mix flour, sugar, milk. bake.'},
        {recipe_id: 1, description: 'mix flour, sugar, yeast. deep fry.'}
      ]);
    });
};
