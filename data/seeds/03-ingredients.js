const ingredients =  [
  {ing_name: 'butter', ing_unit: 'tbs'},
  {ing_name: 'peanut butter', ing_unit: 'cups'},
  {ing_name: 'sugar', ing_unit: 'cups'},
  {ing_name: 'eggs', ing_unit: 'singular'},
  {ing_name: 'flour', ing_unit: 'cups'},
  {ing_name: 'baking soda', ing_unit: 'tsp'},
  {ing_name: 'strawberries', ing_unit: 'cups'},
  {ing_name: 'mangoes', ing_unit: 'cups'},
  {ing_name: 'raspberries', ing_unit: 'cups'},
  {ing_name: 'blueberries', ing_unit: 'cups'},
  {ing_name: 'almond milk', ing_unit: 'cups'},
  {ing_name: 'sour cream', ing_unit: 'oz'},
  {ing_name: 'ranch powder', ing_unit: 'packet'},
  {ing_name: 'cheese', ing_unit: 'cups'},
  {ing_name: 'milk', ing_unit: 'cups'},
  {ing_name: 'chocolate powder', ing_unit: 'tbs'},
]

exports.seed = function(knex) {
  return knex('ingredients').insert(ingredients)
};
