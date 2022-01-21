
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {recipe_id: 1, recipe_name: 'Spaghetti Bolognese'},
        {recipe_id: 2, recipe_name: 'Grandma'},
        {recipe_id: 3, recipe_name: 'West Spice'}
      ]);
    });
};
