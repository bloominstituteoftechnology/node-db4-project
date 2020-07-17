
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Recipes').insert([
        {RecipeName: 'Scrambled_Eggs'},
        {RecipeName: 'Ramen'},
        {RecipeName: 'Toast'}
      ]);
    });
};
