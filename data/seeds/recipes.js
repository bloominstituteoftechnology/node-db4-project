
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        { id: 1, recipe_name: 'Jello Santa Hats'},
        { id: 2, recipe_name: 'Broccoli Banana Beignets'},
        { id: 3,  recipe_name: 'Pancake and pineapple topped pizza crusts'}
      ]);
    });
};
