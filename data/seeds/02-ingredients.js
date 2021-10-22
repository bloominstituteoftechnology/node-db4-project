const ingredients = [
  { ingredient: 'Peanut Butter' },
  { ingredient: 'Jelly' },
  { ingredient: 'Bread' }
]

exports.ingredients = ingredients

exports.seed = function (knex) {
  return knex('ingredients').insert(ingredients)
}