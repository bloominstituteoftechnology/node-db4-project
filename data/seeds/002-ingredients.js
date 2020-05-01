exports.seed = function(knex) {

  return knex('ingredients').insert([
    {id: 1, ingredient_name: 'Macaroni Noodles'},
    {id: 2, ingredient_name: 'Bread'},
    {id: 3, ingredient_name: 'Cheddar Cheese'},
    {id: 4, ingredient_name: 'Whole Milk'},
    {id: 5, ingredient_name: 'Tomatoes'},
    {id: 6, ingredient_name: 'Butter'},
    {id: 7, ingredient_name: 'Olive Oil'},
    {id: 8, ingredient_name: 'Garlic'},
    {id: 9, ingredient_name: 'Chicken Stock'},
    {id: 10, ingredient_name: 'Heavy Cream'},
  ]);
};