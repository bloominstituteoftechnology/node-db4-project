
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, recipe_name: 'gourmet scrambled eggs'},
        {id: 2, recipe_name: 'boujee pancakes'},
        {id: 3, recipe_name: 'unstoppable grilled cheese sandwich'}
      ]);
    });
};
