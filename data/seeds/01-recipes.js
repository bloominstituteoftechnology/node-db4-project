const recipes = [
  { recipe_name: 'PB&J' }
]

exports.recipes = recipes

exports.seed = function (knex) {
  return knex('recipes').insert(recipes)
}