
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {recipe_name: 'Chocolate Milk'},
        {recipe_name: 'Grilled Cheese Sandwich'}
      ]);
    });
};
