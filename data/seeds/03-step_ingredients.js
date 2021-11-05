
exports.seed = function (knex) {
  return knex('step_ingredients').insert([
    { ingredient_name: 'ingredient 1' },
    { ingredient_name: 'ingredient 2' },
    { ingredient_name: 'ingredient 3' },
    { ingredient_name: 'ingredient 4' },
  ])
}
