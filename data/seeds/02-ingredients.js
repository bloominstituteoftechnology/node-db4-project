const ingredients = [
  {ingredient_name: 'Scallion', ing_unit: 'lbs'},
  {ingredient_name: 'Fish Sauce', ing_unit: 'oz'},
  {ingredient_name: 'Rotesseri Chicken', ing_unit: 'lbs'},
  {ingredient_name: 'Lemon', ing_unit: 'slices'},
  {ingredient_name: 'Beef', ing_unit: 'lbs'},
  {ingredient_name: 'Rice Noodles', ing_unit: 'grams'}
]

exports.ingredients = ingredients

exports.seed = function(knex) {
  return knex('ingredients').insert(ingredients)
}
