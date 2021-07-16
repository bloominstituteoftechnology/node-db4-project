const recipes = [
  { recipe_name: 'Chicken Lettuce Wrap' },
  { recipe_name: 'Apple Pie' },
]

exports.recipes = recipes

exports.seed = function(knex) {
  return knex('recipes').insert(recipes)
}
