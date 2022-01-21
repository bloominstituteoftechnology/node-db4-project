const ingredients = [
  {ingredient_name: 'Broccoli', ing_unit: 'lbs'},
  {ingredient_name: 'Pesto', ing_unit: 'lbs'},
  {ingredient_name: 'Pasta', ing_unit: 'lbs'},
  {ingredient_name: 'Lemon', ing_unit: 'slices'},
  {ingredient_name: 'Chicken', ing_unit: 'kilos'},
  {ingredient_name: 'Salmon', ing_unit: 'grams'}
]

exports.ingredients = ingredients

exports.seed = function(knex) {
  return knex('ingredients').insert(ingredients)
}
