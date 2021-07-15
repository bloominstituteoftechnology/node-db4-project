exports.seed = function(knex, Promise) {
  return knex('ingredients').insert([
    {ingredient_name: 'eggs'},
    {ingredient_name: 'butter'},
    {ingredient_name: 'bread'},
    {ingredient_name: 'peanut butter'},
    {ingredient_name: 'bacon'}
  ]);
};
