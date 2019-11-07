
exports.seed = function(knex) {
    // Inserts seed entries
    return knex('recipes').insert([
      {recipe_name: 'Honey Beans'},
      {recipe_name: 'Pancakes'},
      {recipe_name: 'Plaintain Porridge'},
      {recipe_name: 'Okro Soup'},
      {recipe_name: 'Egusi soup'},
      {recipe_name: 'Jollof Rice'}
    ]);
};
