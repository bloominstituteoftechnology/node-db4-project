exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').insert([
    {ingredient_name: 'potatoes'},
    {ingredient_name: 'cheese'},
    {ingredient_name: 'chicken'},
    {ingredient_name: 'salt'},
    {ingredient_name: 'onions'},
  ]);
};
