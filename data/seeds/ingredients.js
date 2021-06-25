
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient_id: 1, ingredient_name: 'tofu'},
        {ingredient_id: 2, ingredient_name: 'ground pork'},
        {ingredient_id: 3, ingredient_name: 'watercress'},
        {ingredient_id: 4, ingredient_name: 'dobanjang'},
      ]);
    });
};
