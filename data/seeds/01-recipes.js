
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').insert([
    {recipe_name: 'Potatoes au Gratin'},
    {recipe_name: 'Roasted Chicken'},
    {recipe_name: 'Fried Onions'}
  ]);
};
