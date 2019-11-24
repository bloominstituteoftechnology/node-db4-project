
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').insert([
    {recipe_id: 1, recipe_name: 'Grilled Cheese Sandwich'},
    {recipe_id: 2, recipe_name: 'Bacon & Eggs'}
  ]);
};
