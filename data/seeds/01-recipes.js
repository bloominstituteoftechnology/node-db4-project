exports.seed = function (knex, Promise) {
  return knex('recipes').insert([
    { recipe_name: 'Easy Pita Pizza' },
    { recipe_name: 'Slow Cooker Cheesy Potatoes' },
  ]);
};
