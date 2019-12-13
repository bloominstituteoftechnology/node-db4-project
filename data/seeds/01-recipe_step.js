
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_step')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_step').insert([
        {quantity: 2, unit_of_measurement: "Teaspoons", ingredient_id: 1}
      ]);
    });
};
