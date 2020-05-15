
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name: 'Jello Santa Hats'},
        {name: 'Broccoli Banana Beignets'},
        {name: 'Pancake and pineapple topped pizza crusts'}
      ]);
    });
};
