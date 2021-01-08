exports.seed = async function(knex) {
  // Inserts seed entries
  await knex('ingredients').insert([
    {ingredientName: 'bread', quantity: 'however much you want', recipe_id: 1},
    {ingredientName: 'butter', quantity: 'a schmear', recipe_id: 1},
    {ingredientName: 'water', quantity: 'enough', recipe_id: 2},
    {ingredientName: 'pasta', quantity: 'a handful or 2', recipe_id: 2},
    {ingredientName: 'sauce', quantity: 'one jar', recipe_id: 2},
    {ingredientName: 'bread', quantity: '2 slices', recipe_id: 3},
    {ingredientName: 'peanut butter', quantity: 'a spoonful, but on a knife', recipe_id: 3},
    {ingredientName: 'jelly', quantity: 'a knifeful', recipe_id: 3},
  ]);    
};