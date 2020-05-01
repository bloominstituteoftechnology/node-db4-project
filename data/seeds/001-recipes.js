
exports.seed = function(knex) {

  return knex('recipes').insert([
    {id: 1, recipe_name: 'Tomato Soup'},
    {id: 2, recipe_name: 'Grilled Cheese'},
    {id: 3, recipe_name: 'Macaroni and Cheese'}
  ]);
};