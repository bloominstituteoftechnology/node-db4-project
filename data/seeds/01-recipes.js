
exports.seed = function(knex) {
  return knex('recipes').insert([
    { recipe_name: 'AmazeBalls PB chocolate chip cookies'},
    { recipe_name: 'Delicious smoothie'},
    { recipe_name: 'Chip Dip'},
    { recipe_name: 'Chocolate Milk'},
  ])
};
