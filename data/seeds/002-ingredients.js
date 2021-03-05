
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient_id: 1, ingredient_name: 'scoop of icecream'},
        {ingredient_id: 2,ingredient_name: 'squeeze of chocolate syrup'},
        {ingredient_id: 3,ingredient_name: 'box of cheerios'},
        {ingredient_id: 4,ingredient_name: 'cup of milk'},
        {ingredient_id: 5,ingredient_name: 'cup of flour'},
        {ingredient_id: 6,ingredient_name: 'quart of water'}
      ]);
    });
};
