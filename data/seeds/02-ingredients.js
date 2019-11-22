exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').insert([
    {ingredient_id: 1, ingredient_name: 'Bread'},
    {ingredient_id: 2, ingredient_name: 'Cheese'},
    {ingredient_id: 3, ingredient_name: 'Butter'},
    {ingredient_id: 4, ingredient_name: 'Bacon'},
    {ingredient_id: 5, ingredient_name: 'Eggs'}
  ]);
};

